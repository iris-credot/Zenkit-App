const express = require('express');
const taskfunctions = require("../controllers/Taskcontr.js");
const router= express.Router();




router.route('/').get(taskfunctions.getAllTasks).post(taskfunctions.createTask)
router.route('/:id').get(taskfunctions.getTask).patch(taskfunctions.updateTask).delete(taskfunctions.deleteTask)

module.exports= router;
