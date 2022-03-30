// Interval (in seconds!!!)
const n = 60 * 5;
const switcher = document.querySelector('.ButtonColor');
var theme = "white" // | "dark"
var timeframe = "short" // | "long"
// iframe links
const dark_short_links = ["https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=169774953&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1875447996&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=236014177&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=2140973151&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1748461419&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1615243752&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1208141090&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1521776556&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=626094903&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1958608144&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=556863310&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=464452970&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=933713189&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=2036398605&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1151239520&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=5933387&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1217445004&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1133905235&amp;format=interactive"];

// ID list - const throughout themes and frames
const dark_short_ids = [
'CurrentPosition',
'RobotStatus',
'Returns',
'RobotVSOrganic',
'StabilityReport',
'Gauge1',
'Gauge2',
'Gauge3',
'Gauge4',
'Gauge5',
'Gauge6',
'WinLoss',
'PieStatistics',
'Waterfall',
'PnL',
'ReserveFundStats',
'ActiveFund',
'DividendFund'
];
// iframe LONG links 1
const dark_long_links = [
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1096378101&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1737882857&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=611458383&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1388212988&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1841367596&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1050112261&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=2001214678&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=387367062&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=186328755&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1426496597&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1497045533&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1497045533&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=849298539&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=849298539&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=797857331&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=385539300&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=988823980&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=815999875&format=interactive"

]
// iframe LONG links 2
const white_long_links = [
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1981749800&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=199042839&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1646576543&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1871077641&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=167062731&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=750235108&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1022423159&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1918519616&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1582891652&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=271505805&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1497384139&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1840031333&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=962607120&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=732323493&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=2023999403&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1814665876&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=1068815175&format=interactive",
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR14XQRk4R6ga6BVzSnVdvVqTRzOpZOe47CrHSZQksAKOU5PhjouKfVhEmxMq8E0y4yRAG-WlBWC-ZS/pubchart?oid=453748935&format=interactive"
]

// Containers
const topArea = document.querySelector(".topArea");
const BBoxLeftArea = document.querySelector(".BBoxLeftArea");
const BBoxRightArea = document.querySelector(".BBoxRightArea");
const SBoxLeftArea = document.querySelector(".SBoxLeftArea");
const SBoxMidArea = document.querySelector(".SBoxMidArea");
const SBoxRightArea = document.querySelector(".SBoxRightArea");

// Change theme version 2.0

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


// Change theme
function switchTheme() {
  // console.log('current class name: ' + document.body.background);
  if(theme=="white"){
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
    theme="dark"
  }
  else if(theme=="dark"){
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
}

// Change theme
function switchTimeframe() {
  if(theme=="white" && timeframe == "short"){
    // Version 2.0
    var n = 0
    for (j in dark_short_ids){
      // console.log(dark_short_ids[n+1])
      document.getElementById(dark_short_ids[n]).src = white_long_links[n]
      n+=1
    }
    n=0
    timeframe="long"
}
else if(theme=="dark" && timeframe == "short"){
      // Version 2.0
      var n = 0
      for (j in dark_short_ids){
        // console.log(dark_short_ids[n+1])
        document.getElementById(dark_short_ids[n]).src = dark_long_links[n]
        n+=1
      }
      n=0
      timeframe="long"
}
else if(theme=="white" && timeframe == "long"){
      // Version 2.0
      var n = 0
      for (j in dark_short_ids){
        // console.log(dark_short_ids[n+1])
        document.getElementById(dark_short_ids[n]).src = white_short_links[n]
        n+=1
      }
      n=0
      timeframe="short"
}
else if(theme=="dark" && timeframe == "long"){
      // Version 2.0
      var n = 0
      for (j in dark_short_ids){
        // console.log(dark_short_ids[n+1])
        document.getElementById(dark_short_ids[n]).src = dark_short_links[n]
        n+=1
      }
      n=0
      timeframe="short"
}
else{
   // Update iframes
   window.location.href = window.location.href;
   theme="white"
   timeframe="short"
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
