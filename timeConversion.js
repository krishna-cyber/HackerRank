/** @format */

function timeConverter(str) {
  const arr = str.split(":");
  const [hour, minute, period] = arr;
  let sec = period.slice(0, 2);
  let duration = period.slice(2, 4);
  const obj = { hour, minute, sec, duration };
  let time = "";

  //converting object having string into number
  obj.hour = Number(obj.hour);

  //checking the time object
  if (obj.duration == "AM") {
    if (obj.hour === 12) {
      time = `00:${obj.minute}:${obj.sec}`;
      console.log(time);
    } else if (obj.hour < 12) {
      time = `0${obj.hour}:${obj.minute}:${obj.sec}`;
      console.log(time);
    }
  } else {
    obj.hour == 12
      ? (time = `${obj.hour}:${obj.minute}:${obj.sec}`)
      : (time = `${obj.hour + 12}:${obj.minute}:${obj.sec}`);
    console.log(time);
  }
}

//calling the function
timeConverter("06:40:03AM");
