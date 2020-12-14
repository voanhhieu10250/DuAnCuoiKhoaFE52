const handleExchangeDateString = (stringDate, type) => {
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
  if (type === "date") {
    result = year + "-" + month + "-" + dt;
  }
  if (type === "time") {
    result = hour + ":" + minutes;
  }
  if (type === "date/time") {
    result = {
      date: year + "-" + month + "-" + dt,
      time: hour + ":" + minutes,
    };
  }

  return result;
};

export default handleExchangeDateString;
