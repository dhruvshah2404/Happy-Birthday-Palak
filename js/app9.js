var answer = "Kajal";
var submitElem = document.getElementById("submitBtn");
var elem = document.getElementById("video");

submitElem.addEventListener("click", checkAnsAndPlayVideo);

elem.addEventListener("ended", newpage, false);

function checkAnsAndPlayVideo(e) {
  e.preventDefault();
  var textElem = document.getElementById("textbox").value;
  console.log(textElem);
  if (textElem === answer) {
    elem.removeAttribute("hidden")
      elem.setAttribute("autoplay","");
    fullscreen();
  }
  else {
    alert("Wrong answer");
  }
}
function fullscreen() {
  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
}
function newpage() {
  console.log("Open");
  window.open("page10.html");
}
