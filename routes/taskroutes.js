const express = require('express');
const taskfunctions = require("../controllers/Taskcontr.js");
const setTime =require('../middleware/time.js');
const router= express.Router();
const {checkSchema} = require('express-validator');
const rsult = require('../utilis/validation.js');




router.route('/').get(taskfunctions.getAllTasks).post(setTime,checkSchema(rsult.validation),taskfunctions.createTask)
router.route('/find').get(taskfunctions.getTask).patch(setTime,checkSchema(rsult.validationupd),taskfunctions.updateTask).delete(taskfunctions.deleteTask)
router.route('/addcheck').post(taskfunctions.addCheckListItem).patch(taskfunctions.updateCheckListItem);
router.get('/bystatus',taskfunctions.findByStatus)
router.get('/byparent',taskfunctions.findByParentId)
router.get('/bytag',taskfunctions.findByTag)

module.exports= router;
