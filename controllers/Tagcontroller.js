const Tag = require('../model/Tag.js')
const asyncWrapper = require('../middleware/async.js')
const customError = require('../errors/customerror.js');
const {validationResult} = require('express-validator');


const tagfunctions= {
getAllTags: asyncWrapper(async (req, res) => {
  const tags = await Tag.find({})
  res.status(200).json({ tags })
}),
createTag: asyncWrapper(async (req, res,next) => {
  const result = validationResult(req);
  if(!result.isEmpty()) {
         next(new customError(result.array()[0].message));
  }
    const newTag = new Tag(req.body);
    const savedTag = await newTag.save();
    res.status(201).json(savedTag);
  
}),
getTag: asyncWrapper(async (req, res, next) => {
  const { id: tagID } = req.query
  const tag = await Tag.findOne({ _id: tagID })
  if (!tag) {
    
   return next(new customError(`Tag with id ${tagID } is not found`,404));
  }

  res.status(200).json({ tag })
}),


 deleteTag: asyncWrapper(async (req, res, next) => {
  const { id: tagID } = req.query
  const tag = await Tag.findOneAndDelete({ _id: tagID })
  if (!tag) {
    return next(new customError(`Tag with id ${tagID } is not found`,404));
  }
  res.status(200).json({ tag })
}),

 updateTag: asyncWrapper(async (req, res, next) => {
  const result = validationResult(req);
  if(!result.isEmpty()) {
         next(new customError(result.array()[0].msg));
  }
  const { id: tagID } = req.query

  const tag = await Tag.findOneAndUpdate({ _id: tagID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!tag) {
    return next(new customError(`Tag with id ${tagID } is not found`,404));
  }

  res.status(200).json({ tag })
})
}
module.exports = tagfunctions
