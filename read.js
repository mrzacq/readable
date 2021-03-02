const Read = (d) => {
  if(!d){
    d = new Date()
  }
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const year = d.getFullYear();
  const day = d.getDay();

  let strDay, strMonth;

  switch (day) {
    case 0:
      strDay = "Sunday";
      break;
    case 1:
      strDay = "Monday";
      break;
    case 2:
      strDay = "Tuesday";
      break;
    case 3:
      strDay = "Wednesday";
      break;
    case 4:
      strDay = "Thursday";
      break;
    case 5:
      strDay = "Friday";
      break;
    case 6:
      strDay = "Saturday";
      break;
  }

  switch (month) {
    case 1:
      strMonth = "January";
      break;
    case 2:
      strMonth = "February";
      break;
    case 3:
      strMonth = "March";
      break;
    case 4:
      strMonth = "April";
      break;
    case 5:
      strMonth = "May";
      break;
    case 6:
      strMonth = "June";
      break;
    case 7:
      strMonth = "July";
      break;
    case 8:
      strMonth = "August";
      break;
    case 9:
      strMonth = "September";
      break;
    case 10:
      strMonth = "October";
      break;
    case 11:
      strMonth = "November";
      break;
    case 12:
      strMonth = "December";
      break;
  }

  return `${strDay}, ${date} ${strMonth} ${year}`;
};

module.exports = Read;
