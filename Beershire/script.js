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
    // Update iframes
    // Top Row
    document.getElementById('CurrentPosition').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=169774953&amp;format=interactive";
    document.getElementById('RobotStatus').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1875447996&amp;format=interactive";
    document.getElementById('Returns').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=236014177&amp;format=interactive";
    document.getElementById('RobotVSOrganic').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=2140973151&amp;format=interactive";
    // Med Row Left
    document.getElementById('StabilityReport').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1748461419&amp;format=interactive" ;
    document.getElementById('Gauge1').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1615243752&amp;format=interactive" ;
    document.getElementById('Gauge2').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1208141090&amp;format=interactive" ;
    document.getElementById('Gauge3').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1521776556&amp;format=interactive" ;
    document.getElementById('Gauge4').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=626094903&amp;format=interactive" ;
    // Med Row Right
    document.getElementById('Gauge5').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1958608144&amp;format=interactive" ;
    document.getElementById('Gauge6').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=556863310&amp;format=interactive" ;
    document.getElementById('WinLoss').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=464452970&amp;format=interactive" ;
    document.getElementById('PieStatistics').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=933713189&amp;format=interactive" ;
    document.getElementById('Waterfall').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=2036398605&amp;format=interactive" ;
    document.getElementById('PnL').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1151239520&amp;format=interactive" ;
    // Bottom Row
    document.getElementById('ReserveFundStats').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=5933387&amp;format=interactive" ;
    document.getElementById('ActiveFund').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1217445004&amp;format=interactive" ;
    document.getElementById('DividendFund').src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1133905235&amp;format=interactive" ;
    i += 1
  }
  else if(i == 1){
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
