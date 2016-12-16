const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function updateHandsInDegrees(element, value, interval) {
  const degrees = ((value / interval) * 360) + 90;
  element.style.transform = "rotate(" + degrees + "deg)";
}

function setDate() {
  const now = new Date();
  updateHandsInDegrees(secondHand, now.getSeconds(), 60);
  updateHandsInDegrees(minuteHand, now.getMinutes(), 60);
  updateHandsInDegrees(hourHand, now.getHours(), 12);
}

setInterval(setDate, 1000);
