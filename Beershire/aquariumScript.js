// Interval (in seconds!!!)
const n = 60 * 5;
const switcher = document.querySelector('.ButtonColor');
var theme = "white" // | "dark"
var timeframe = "short" // | "long"


function updateStuff([stuff]) {
    for (const item in stuff)
    {
      const oldHTML = stuff.item.innerHTML;
      stuff.item.innerHTML = "";
      stuff.item.innerHTML = oldHTML;
    }
  }

  // Containers
  const topArea = document.querySelector(".topArea");
  const BBoxLeftArea = document.querySelector(".BBoxLeftArea");
  const BBoxRightArea = document.querySelector(".BBoxRightArea");
  const SBoxLeftArea = document.querySelector(".SBoxLeftArea");
  const SBoxMidArea = document.querySelector(".SBoxMidArea");
  const SBoxRightArea = document.querySelector(".SBoxRightArea");
  const AquariumBody = document.querySelector(".AquariumBody");
  
  // Change theme version 2.0

setInterval(() => {
  updateStuff([AquariumBody, topArea]);
}, n * 1000);  

  function switchThemeNew(){
    if(theme=="white" && timeframe == "short"){
          // Change White Theme to Black
          document.body.style.background = '#5A4C4C'
          document.querySelector(".top").style.background = '#2B2B2B'
          document.querySelector(".BBoxLeft").style.background = '#2B2B2B'
          document.querySelector(".BBoxRight").style.background = '#2B2B2B'
          document.querySelector(".SBoxLeft").style.background = '#2B2B2B'
          document.querySelector(".SBoxMid").style.background = '#2B2B2B'
          document.querySelector(".SBoxRight").style.background = '#2B2B2B'
          document.querySelector(".ButtonHistory").style.background = '#5A4C4C'
          document.querySelector(".ButtonColor").style.background = '#5A4C4C'
          // Version 2.0
          var n = 0
          for (j in dark_short_ids){
            // console.log(dark_short_ids[n+1])
            document.getElementById(dark_short_ids[n]).src = dark_short_links[n]
            n+=1
          }
          n=0
          theme="dark"
      }
      else if (theme=="dark" && timeframe == "short"){
        // Change Black Theme to White
        // MB just run a page-refresh
        document.body.style.background = '#BDBDBD'
        document.querySelector(".top").style.background = '#FFFFFF'
        document.querySelector(".BBoxLeft").style.background = '#FFFFFF'
        document.querySelector(".BBoxRight").style.background = '#FFFFFF'
        document.querySelector(".SBoxLeft").style.background = '#FFFFFF'
        document.querySelector(".SBoxMid").style.background = '#FFFFFF'
        document.querySelector(".SBoxRight").style.background = '#FFFFFF'
        document.querySelector(".ButtonHistory").style.background = '#BDBDBD'
        document.querySelector(".ButtonColor").style.background = '#BDBDBD'
        // Update iframes
        window.location.href = window.location.href;
        theme="white"
      }
      else if(theme=="white" && timeframe == "long"){
        // Change White Theme to Black
        document.body.style.background = '#5A4C4C'
        document.querySelector(".top").style.background = '#2B2B2B'
        document.querySelector(".BBoxLeft").style.background = '#2B2B2B'
        document.querySelector(".BBoxRight").style.background = '#2B2B2B'
        document.querySelector(".SBoxLeft").style.background = '#2B2B2B'
        document.querySelector(".SBoxMid").style.background = '#2B2B2B'
        document.querySelector(".SBoxRight").style.background = '#2B2B2B'
        document.querySelector(".ButtonHistory").style.background = '#5A4C4C'
        document.querySelector(".ButtonColor").style.background = '#5A4C4C'
        // Version 2.0
        var n = 0
        for (j in dark_short_ids){
          // console.log(dark_short_ids[n+1])
          document.getElementById(dark_short_ids[n]).src = dark_long_links[n]
          n+=1
        }
        n=0
        theme="dark"
      }
      else if(theme=="dark" && timeframe == "long"){
        // Change Black Theme to White
        // MB just run a page-refresh
        document.body.style.background = '#BDBDBD'
        document.querySelector(".top").style.background = '#FFFFFF'
        document.querySelector(".BBoxLeft").style.background = '#FFFFFF'
        document.querySelector(".BBoxRight").style.background = '#FFFFFF'
        document.querySelector(".SBoxLeft").style.background = '#FFFFFF'
        document.querySelector(".SBoxMid").style.background = '#FFFFFF'
        document.querySelector(".SBoxRight").style.background = '#FFFFFF'
        document.querySelector(".ButtonHistory").style.background = '#BDBDBD'
        document.querySelector(".ButtonColor").style.background = '#BDBDBD'
        // Update iframes
        // Version 2.0
        var n = 0
        for (j in dark_short_ids){
          // console.log(dark_short_ids[n+1])
          document.getElementById(dark_short_ids[n]).src = white_long_links[n]
          n+=1
        }
        n=0
        theme="white"
      }
      else{
              // Update iframes
              window.location.href = window.location.href;
              theme="white"
              timeframe="short"
      }
    }

setInterval(() => {
    updateStuff([AquariumBody, topArea]);
  }, n * 1000);