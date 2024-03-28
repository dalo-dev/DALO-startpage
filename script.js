const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

setInterval(() => {
  const now = new Date();
  timeElement.innerText = new Intl.DateTimeFormat(navigator.language, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(now);
  dateElement.innerText = new Intl.DateTimeFormat(
    navigator.language,
    dateOptions
  ).format(now);
}, 1000);
