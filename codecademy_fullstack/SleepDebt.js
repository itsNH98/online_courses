const getSleepHours = (day) => {
    switch (day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 10;
        break;
    }   
  }
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday');
  
  const getIdealSleepHours = () => {
    let idealHours = 12;
    return idealHours * 2;
  }
  
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours > idealSleepHours) {
      console.log("More sleep than needed");
    } else if (actualSleepHours < idealSleepHours) {
      console.log("Less sleep than needed" + ` You need ${idealSleepHours - actualSleepHours}h more sleep!`);
    } else {
      console.log("Perfect amount of sleep");
    }
  }
  
  calculateSleepDebt();