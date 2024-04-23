const Task = require('../model/Task.js')
const asyncWrapper = require('../middleware/async.js')
const customError = require('../errors/customerror.js');
const { validationResult } = require('express-validator');


const taskfunctions = {
  getAllTasks: asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  }),
  
  createTask: asyncWrapper(async (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
       // Instead of sending a response here, pass the error to the next middleware
       return next(new customError(result.array()[0].msg));
    }
   
       const newTask = new Task(req.body);
       const savedTask = await newTask.save();
       // Ensure this is the only response sent for this request
       res.status(201).json(savedTask);
    
   }),
   
  getTask: asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.query
    const task = await Task.findOne({ _id: taskID })
    if (!task) {

      return next(new customError(`Task with id ${taskID} is not found`, 404));
    }

    res.status(200).json({ task })
  }),

  findByStatus: asyncWrapper(async (req, res, next) => {
    const taskStatus = req.query.status;

    const foundTasks = await Task.find({ status: taskStatus });
    return res.status(200).json({
      size: foundTasks.length,
      foundTasks
    });

  }),

  findByParentId: asyncWrapper(async (req, res, next) => {
    const parentId = req.query.parent;


    const foundTasks = await Task.find({ parentTask: parentId });
    return res.status(200).json({
      size: foundTasks.length,
      foundTasks
    });

  }),

  findByTag: asyncWrapper(async (req, res, next) => {
    const tagId = req.query.tag;
    const allTasks = await Task.find({ tags: tagId });
    return res.status(200).json({
      size: allTasks.length,
      allTasks
    });

  }),


  deleteTask: asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.query
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
      return next(new customError(`Task with id ${taskID} is not found`, 404));
    }
    res.status(200).json({ task })
  }),
   addCheckListItem: asyncWrapper(async (req, res, next) => {
    const taskId = req.query.id;
    const item = req.body;

    const taskBeforeUpdate = await TaskModel.findById(taskId);
    const checkListItems = taskBeforeUpdate.checkList;
    checkListItems.push(item);

    const updatedTask = await TaskModel.findByIdAndUpdate(
        taskId, 
        { checkList: checkListItems }, 
        { new: true }
    ).populate("tags");

    if (!updatedTask) {
        return next(new customError(`Task not found`));
    };

    return res.status(200).json(updatedTask);    
}),

updateCheckListItem:asyncWrapper(async (req, res, next) => {
    const taskId = req.query.id;
    const checkListItem = req.query.item;
    const update = req.body;

    const taskBeforeUpdate = await TaskModel.findById(taskId);
    const checkListItems = taskBeforeUpdate.checkList;

    checkListItems.forEach(item => {
        if (item._id.toString() === checkListItem && !update.name) {
            item.checked = !item.checked;
        } else if (item._id.toString() === checkListItem && update.name) {
            item.name = update.name;
        }
    }
)}),
    
  updateTask: asyncWrapper(async (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
     return  next(new customError(result.array()[0].msg));
    }
    const { id: taskID } = req.query

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })

    if (!task) {
      return next(new customError(`Task with id ${taskID} is not found`, 404));
    }

    res.status(200).json({ task })
  })
}
module.exports = taskfunctions
