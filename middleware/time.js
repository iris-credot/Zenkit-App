const durationCalculator = require('../utilis/functionhelper');
const setTime = async (req, res, next) => {
    console.log(req.body.dueDate);
    var startTime = "";
    var endTime = "";
    if (req.body.dueDate.startDate) {
        startTime = new Date(req.body.dueDate.startDate).toLocaleTimeString();
    }
    if (req.body.dueDate.endDate) {
        endTime = new Date(req.body.dueDate.endDate).toLocaleTimeString();
    }
    req.body.dueDate.startTime = startTime;
    req.body.dueDate.endTime = endTime;
  
    const duration = durationCalculator(req.body.dueDate.startDate, req.body.dueDate.endDate);
    req.body.dueDate.duration = duration.durationPeriod;
    req.body.dueDate.durationType = duration.durationType;
    // Your task.
    // Calculate the duration of the task by using the startDate and endDate.
    // Determine wether the duration is in min, hours, days.
    next();
  }
  module.exports = setTime