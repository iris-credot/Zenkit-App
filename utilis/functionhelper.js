 const durationCalculator = (startDate, endDate) => {
    const duration = {
        durationPeriod: 0,
        durationType: ''
    };
  
    var startDateAsNumber = new Date(startDate).getTime();
    var endDateAsNumber = new Date(endDate).getTime();
    var oneHour = 1000*60*60;
    var difference = endDateAsNumber - startDateAsNumber;
    var numberOfHours = difference/oneHour;
    
    if (numberOfHours < 1) {
      let numberOfMinutes = difference/(1000*60);
      duration.durationPeriod = numberOfMinutes;
      duration.durationType = "Minutes"; 
    } else if (numberOfHours >= 1 && numberOfHours < 24) {
      duration.durationPeriod = numberOfHours;
      duration.durationType = "Hours"
    } else if (numberOfHours >= 24 && numberOfHours < 168) {
      duration.durationPeriod = numberOfHours/24;
      duration.durationType = "Days"
    }
    else if (numberOfHours >= 168 && numberOfHours < 720) {
    duration.durationPeriod = numberOfHours/24;
    duration.durationType = "Weeks"
  }
    else if (numberOfHours >= 720 ) {
    duration.durationPeriod = numberOfHours/24;
    duration.durationType = "Months"
  }
  
    return duration;
  };
  module.exports= durationCalculator;