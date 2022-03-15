// Interval (in seconds!!!)
const n = 60;

// Containers
const topArea = document.querySelector(".topArea");
const BBoxLeftArea = document.querySelector(".BBoxLeftArea");
const BBoxRightArea = document.querySelector(".BBoxRightArea");
const SBoxLeftArea = document.querySelector(".SBoxLeftArea");
const SBoxMidArea = document.querySelector(".SBoxMidArea");
const SBoxRightArea = document.querySelector(".SBoxRightArea");

function updateStuff(stuff) {
  const oldHTML = stuff.innerHTML;
  stuff.innerHTML = "";
  stuff.innerHTML = oldHTML;
}

setInterval(() => {
  updateStuff(topArea);
  updateStuff(BBoxLeftArea);
  updateStuff(BBoxRightArea);
  updateStuff(SBoxLeftArea);
  updateStuff(SBoxMidArea);
  updateStuff(SBoxRightArea);
}, n * 1000);
