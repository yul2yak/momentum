const clock = document.querySelector("#clock");

function updateClock() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  //   const second = String(now.getSeconds()).padStart(2, "0");
  //   clock.innerText = `${hour}:${minute}:${second}`;
  clock.innerText = `${hour}:${minute}`;
  //  clock.innerText = now.toTimeString();
}

updateClock();
setInterval(() => {
  updateClock();
}, 1000);
