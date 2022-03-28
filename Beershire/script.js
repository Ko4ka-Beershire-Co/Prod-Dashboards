// Interval (in seconds!!!)
const n = 60 * 5;
const switcher = document.querySelector('.ButtonColor');
var i = 0

// Containers
const topArea = document.querySelector(".topArea");
const BBoxLeftArea = document.querySelector(".BBoxLeftArea");
const BBoxRightArea = document.querySelector(".BBoxRightArea");
const SBoxLeftArea = document.querySelector(".SBoxLeftArea");
const SBoxMidArea = document.querySelector(".SBoxMidArea");
const SBoxRightArea = document.querySelector(".SBoxRightArea");

// Change theme
function switchTheme() {
  // console.log('current class name: ' + document.body.background);
  if(i == 0){
    document.body.style.background = '#5A4C4C'
    document.querySelector(".top").style.background = '#2B2B2B'
    document.querySelector(".BBoxLeft").style.background = '#2B2B2B'
    document.querySelector(".BBoxRight").style.background = '#2B2B2B'
    document.querySelector(".SBoxLeft").style.background = '#2B2B2B'
    document.querySelector(".SBoxMid").style.background = '#2B2B2B'
    document.querySelector(".SBoxRight").style.background = '#2B2B2B'
    document.querySelector(".ButtonHistory").style.background = '#5A4C4C'
    document.querySelector(".ButtonColor").style.background = '#5A4C4C'
    i += 1
  }
  else if(i == 1){
    document.body.style.background = '#BDBDBD'
    document.querySelector(".top").style.background = '#FFFFFF'
    document.querySelector(".BBoxLeft").style.background = '#FFFFFF'
    document.querySelector(".BBoxRight").style.background = '#FFFFFF'
    document.querySelector(".SBoxLeft").style.background = '#FFFFFF'
    document.querySelector(".SBoxMid").style.background = '#FFFFFF'
    document.querySelector(".SBoxRight").style.background = '#FFFFFF'
    document.querySelector(".ButtonHistory").style.background = '#BDBDBD'
    document.querySelector(".ButtonColor").style.background = '#BDBDBD'
    i -= 1
  }
}

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
