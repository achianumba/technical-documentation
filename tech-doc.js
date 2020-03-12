window.onscroll = () => {
  var page = document.documentElement;
  var yOffset = page.scrollTop;
  var pageHeight = page.scrollHeight - page.clientHeight;
  var position = (yOffset / pageHeight) * 100;
  document.querySelector("#reading-progress").style.width = `${position}%`;
}

var navDiv = document.querySelector(".navLinks");
document.querySelector(".menuBtn").addEventListener("click", function() {
  if(navDiv.style.display === "none") {
    navDiv.style.display = "block";
  } else {
    navDiv.style.display = "none";
  }
});

