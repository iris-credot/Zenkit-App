const Task = require('../model/Task.js')
const asyncWrapper = require('../middleware/async.js')


const taskfunctions= {
getAllTasks: asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
}),
createTask: asyncWrapper(async (req, res) => {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  
}),
getTask: asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.query
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
   return res.status(404).json({ message: 'Contact not found' });
  }

  res.status(200).json({ task })
}),

 deleteTask: asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.query
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
   return res.status(404).json({ message: 'Contact not found' });
  }
  res.status(200).json({ task })
}),

 updateTask: asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.query

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!task) {
   return res.status(404).json({ message: 'Contact not found' });
  }

  res.status(200).json({ task })
})
}
module.exports = taskfunctions;
