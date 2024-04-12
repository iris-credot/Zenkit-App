const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  description:{
type: String,
required: true, 
  },
  status: {
    type: String,
    required:false,
    enum: ['TODO', 'IN_PROGRESS', 'COMPLETED', 'LATE', 'OVERDUE'],
    default:"TODO"
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
  }
});

module.exports = mongoose.model('Task', TaskSchema)
