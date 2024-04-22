const express = require('express');
const tagfunctions = require("../controllers/Tagcontroller.js");
const setTime =require('../middleware/time.js');
const router2= express.Router();
const {checkSchema} = require('express-validator');
const result = require('../utilis/validation.js');


router2.post('/add', checkSchema(result.validation), tagfunctions.createTag);
router2.get('/list', tagfunctions.getAllTags);
router2.put('/update', tagfunctions.updateTag);
router2.get('/findById', tagfunctions.getTag);
router2.delete('/delete', tagfunctions.deleteTag);



module.exports= router2;