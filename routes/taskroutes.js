const express = require('express');
const taskfunctions = require("../controllers/Taskcontr.js");
const setTime =require('../middleware/time.js');
const router= express.Router();
const {checkSchema} = require('express-validator');
const rsult = require('../utilis/validation.js');




router.route('/').get(taskfunctions.getAllTasks).post(setTime,checkSchema(rsult.validation),taskfunctions.addCheckListItem,taskfunctions.createTask)
router.route('/find').get(taskfunctions.getTask,taskfunctions.findByParentId,taskfunctions.findByStatus,taskfunctions.findByTag).patch(setTime,checkSchema(rsult.validation),taskfunctions.updateCheckListItem,taskfunctions.updateTask).delete(taskfunctions.deleteTask)

module.exports= router;
