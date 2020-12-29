export default function handleExchangeDateString(stringDate, type) {
  let date = new Date(stringDate + "Z");
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let result = "";
  switch (type) {
    case "date":
      result = year + "-" + month + "-" + dt;
      break;

    case "dateRevert":
      result = dt + "-" + month + "-" + year;
      break;

    case "dateWithDot":
      result = year + "." + month + "." + dt;
      break;

    case "dateWithDotRevert":
      result = dt + "." + month + "." + year;
      break;

    case "time":
      result = hour + ":" + minutes;
      break;

    case "date/time":
      result = {
        date: year + "-" + month + "-" + dt,
        time: hour + ":" + minutes,
      };
      break;

    case "getDate":
      result = dt;
      break;

    case "getMonth":
      result = month;
      break;

    case "getYear":
      result = year;
      break;

    case "getHour":
      result = hour;
      break;

    case "getMinute":
      result = minutes;
      break;

    default:
      break;
  }

  return result;
}
