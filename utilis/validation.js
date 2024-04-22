/*const { body } = require('express-validator') ;
// we have query , body ,validationResult,matchedData,checkSchema,check
 const addTaskValidation = [
  
    body("name", "Task name is required").notEmpty().withMessage("Must not be empty").isString().isLength({min:3,max:30}).withMessage("Must be atleast 3-10 characters")
];
// const queryValidation=[query("filter").isString().notEmpty().withMessage("Must not be empty").isLength({min:3,max:10}).withMessage("Must be atleast 3-10 characters")]
module.exports = addTaskValidation;
*/
const  validation = {
name:{

    isLength:{
        options:{
            min:3,
            max:30
        },
        errorMessage: "Must be atleast 3-10 characters"
    },
    notEmpty:{
        
        errorMessage: "Must not be empty"
    },
    isString:{

        errorMessage: "Must be a string"
    }
}
};

module.exports = {validation};