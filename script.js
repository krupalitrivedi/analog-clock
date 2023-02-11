var dotLine = document.getElementsByClassName('dotline');
var clock1 = document.getElementsByClassName('clock')[0];

for (var i = 1; i < 12; i++) {
  clock1.innerHTML += "<div class='dotline'></div>";
  dotLine[i].style.transform = "rotate(" + 30 * i + "deg)";
}