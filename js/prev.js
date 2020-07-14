document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball() {
  let eyes = document.querySelectorAll(".eye");
  eyes.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 - 270;
    eye.style.transform = `rotate(${rot}deg)`;
  });
}

$(document).ready(function () {
  let newdata = $("#aarogya-setu-container");
  $("#x").click(function () {
    newdata.fadeOut(1000);
  });
});

//  logic of auto scroll zen scroll
function call() {
  let autodata1 = document.getElementById("autodata1");
  zenscroll.to(autodata1);
}

function call2() {
  let autodata2 = document.getElementById("autodata2");
  zenscroll.to(autodata2);
}
