const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [30, 'name can not be more than 20 characters'],
    unique: true
  },
  description:{
type: String,
required: true, 
unique:true
  },
  status: {
    type: String,
    required:false,
    enum: ['TODO', 'IN_PROGRESS', 'COMPLETED', 'LATE', 'OVERDUE'],
    default:"TODO"
  },
  parentTask: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task",
    required: false,
},
tags: {
    type: Array,
    required: false
},
  duedate:{
      startDate:{
        type: Date,
        required:true,
      },
      endDate:{
        type: Date,
        required:true,
      },
      startTime:{
        type: String,
        required:false,
      },
      endTime:{
        type: String,
        required:false,
      },
      duration:{
        type: Number,
        required:false,
      },
     durationType:{
      type: String,
      required:false,
      enum: {
        values:['Hours', 'Minutes', 'Days', 'Weeks', 'Months'],
         message:"{vALUE} is not a valid duration type"
      },
      default:"Days"
     }
  },
  checklist: [{
    name: {
      type: String,
      required: true,
  },
  checked: {
      type: Boolean,
      required: true,
      default: false
  }
}],
workload: {
  type: Number,
  required: false,
  default: 0,
  min: 0,
  max: 5
}

});

module.exports = mongoose.model('Task', TaskSchema)
