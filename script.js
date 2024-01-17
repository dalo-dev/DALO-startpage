const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const updateTime = function () {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const clockStr = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  timeElement.innerText = clockStr;
  dateElement.innerText = date.toLocaleDateString(undefined, dateOptions);

  setTimeout(updateTime, 1000);
};

updateTime();
