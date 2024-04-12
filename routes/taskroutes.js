const express = require('express');
const taskfunctions = require("../controllers/Taskcontr.js");
const setTime =require('../middleware/time.js');
const router= express.Router();
const addTaskValidation= require('../utilis/validation.js');




router.route('/').get(taskfunctions.getAllTasks).post(setTime,addTaskValidation,taskfunctions.createTask)
router.route('/find').get(taskfunctions.getTask,taskfunctions.searchAny).patch(taskfunctions.updateTask).delete(taskfunctions.deleteTask)

module.exports= router;
