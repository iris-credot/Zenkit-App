const { body } = require('express-validator') ;

 const addTaskValidation = [
    body("name", "Task name is required").not().isEmpty(),
];
module.exports = addTaskValidation;