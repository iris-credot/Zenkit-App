const durationCalculator = require('../utilis/functionhelper');
const setTime = async (req, res, next) => {
    console.log(req.body.duedate);
    var startTime = "";
    var endTime = "";
    if (req.body.duedate.startDate) {
        startTime = new Date(req.body.duedate.startDate).toLocaleTimeString();
    }
    if (req.body.duedate.endDate) {
        endTime = new Date(req.body.duedate.endDate).toLocaleTimeString();
    }
    req.body.duedate.startTime = startTime;
    req.body.duedate.endTime = endTime;
  
    const duration = durationCalculator(req.body.duedate.startDate, req.body.duedate.endDate);
    req.body.duedate.duration = duration.durationPeriod;
    req.body.duedate.durationType = duration.durationType;
    // Your task.
    // Calculate the duration of the task by using the startDate and endDate.
    // Determine wether the duration is in min, hours, days.
    next();
  }
  module.exports = setTime