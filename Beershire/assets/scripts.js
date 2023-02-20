// Loading true
let db = 0;
const n = 60*5;

const dat = fetch(
  "https://opensheet.elk.sh/14ePg5bfMRZpy7tQZCI2K8CXreXBN97BkDYTj8nedYH4/API-out-stats"
)
  .then((response) => response.json())
  .then((data) => {
    const final_data_2 = data;
    document.getElementById("organic").innerHTML =
      final_data_2[0]["Organic"];
    document.getElementById("Lancelot 2.7").innerHTML =
      final_data_2[0]["Hesoyam II"];
    document.getElementById("Hesoyam 0.7b").innerHTML =
      final_data_2[0]["Hesoyam II-s"];
    document.getElementById("Hesoyam I").innerHTML =
      final_data_2[0]["Hesoyam II-h"];
    document.getElementById("HYM LSTM+").innerHTML =
      final_data_2[0]["Hesoyam I"];
    document.getElementById("HYM LSTM-").innerHTML =
      final_data_2[0]["HYM LSTM-"];

    db = final_data_2[0]["Database"];

    const cardDataArr = document.querySelectorAll(".card-data");
    cardDataArr.forEach((cardData) => {
      // if(Number(cardData.textContent) > )
      const data = cardData.textContent;

      // console.log("card data: ", Number(data.substring(0, data.indexOf("%"))));

      if (Number(data.substring(0, data.indexOf("%"))) < 0) {
        cardData.classList.add("redColor");
      } else if (Number(data.substring(0, data.indexOf("%"))) > 0) {
        cardData.classList.add("greenColor");
      }
    });
  });

  
// buttons
// const btnTimeframe = document.getElementById("btnTimeframe");
const timeframeBtns = document.querySelectorAll(".btnTimeframe");
// containers
const containerCharts = document.querySelector("#line-adwords");
const barChart = document.querySelector("#barchart");
const barChart2 = document.querySelector("#barchart2");

// LocalStorage
if(!window.localStorage.getItem("timeframe")) {
  window.localStorage.setItem("timeframe", 0);
}


const timeframes = [
  'https://opensheet.elk.sh/14ePg5bfMRZpy7tQZCI2K8CXreXBN97BkDYTj8nedYH4/API-out',
  'https://opensheet.elk.sh/14ePg5bfMRZpy7tQZCI2K8CXreXBN97BkDYTj8nedYH4/API-out-hourly'
]

timeframeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    containerCharts.innerHTML = "";
    barChart.innerHTML = "";
    barChart2.innerHTML = "";
    
    if(btn.textContent == '1h'){
      window.localStorage.setItem("timeframe", 1);
    } else if (btn.textContent == '15m') {
      window.localStorage.setItem("timeframe", 0);
    }
  
    loadData(window.localStorage.getItem("timeframe"))
  })
})



function loadData(timeframe) {
  const res = fetch(
    timeframes[timeframe]
  )
    .then((response) => response.json())
    .then((data) => {
      const final_data = data;
      console.log(final_data)
      console.log('again');
      // Actual Code goes in here

      let j = Object.keys(final_data).length;
      
      // Set Arrays
      let days = 30;
/*       if (timeframe == 1){
        days = 10;
      } */
      let lookback = 4 * 24 * days;
      const Organic_data = [];
      const Lancelot_data = [];
      const Hesoyam_07b_data = [];
      const Hesoyam_I_data = [];
      const HYMm = [];
      //const HYMp = [];
      const Date_Time = [];

      while (lookback > 2) {
        // console.log(text[j-i]) // как заказать 0:5
        Organic_data.push(final_data[j - lookback]["Organic"]);
        Lancelot_data.push(final_data[j - lookback]["Hesoyam II"]);
        Hesoyam_07b_data.push(final_data[j - lookback]["Hesoyam II-s"]);
        Hesoyam_I_data.push(final_data[j - lookback]["Hesoyam II-h"]);
        HYMm.push(final_data[j - lookback]["Hesoyam I"]);
        //HYMp.push(final_data[j - lookback]["HYM LSTM+"]);
        Date_Time.push(final_data[j - lookback]["Datetime"]);
        lookback -= 1;
        }

      window.Apex = {
        chart: {
          foreColor: "#ccc",
          toolbar: {
            show: false,
          },
        },
        stroke: {
          width: 2,
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          theme: "dark",
        },
        grid: {
          borderColor: "#535A6C",
          xaxis: {
            lines: {
              show: true,
            },
          },
        },
      };

      const optionsLine = {
        chart: {
          height: "100%",
          width: "100%",
          type: "line",
          zoom: {
            enabled: false,
          },
          /*
          dropShadow: {
            enabled: false,
            top: 3,
            left: 2,
            blur: 4,
            opacity: 1,
          },
          */
        },
        /*stroke: {
          curve: "smooth",
          width: 2,
        },
        */
        //colors: ["#3F51B5", '#2196F3'],
        series: [
          {
            name: "Organic",
            data: Organic_data,
          },
          {
            name: "Hesoyam II",
            data: Lancelot_data,
          },
          {
            name: "Hesoyam II s",
            data: Hesoyam_07b_data,
          },
          {
            name: "Hesoyam II h",
            data: Hesoyam_I_data,
          },
          /* 
          {
            name: "HYM-",
            data: HYMm,
          },
           */
          {
            name: "Hesoyam I-py",
            data: HYMm,
          },
        ],
        title: {
          text: "Доходность моделей. V 3.9.0",
          align: "left",
          offsetY: 5,
          offsetX: 5,
        },
        grid: {
          show: false,
          padding: {
            bottom: 0,
          },
        },
        colors: [
          "#a2a3a5",
          "#33ccff",
          "#8080ff",
          "#00e6b8",
          "#c5b785",
          "#d7e4de",
        ], //Edit Colors Here
        labels: Date_Time,
        xaxis: {
          tooltip: {
            enabled: true,
          },
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: true,
          },
          axisTicks: {
            show: false,
          },
        },
        legend: {
          show: true,
          position: "top",
          horizontalAlign: "center",
          offsetY: 0,
        },
      };

      const chartLine = new ApexCharts(
        document.querySelector("#line-adwords"),
        optionsLine
      );
      chartLine.render();
        
      // disable legent display
      chartLine.series.toggleSeries('Organic')
      chartLine.series.toggleSeries('Hesoyam I-py')

      const optionsBar = {
        chart: {
          height: 170,
          type: "bar",
          stacked: true,
        },
        plotOptions: {
          bar: {
            // columnWidth: "30%",
            horizontal: true,
          },
        },
        series: [
          {
            name: "Used Space",
            data: [db],
          },
          {
            name: "Total Space",
            data: [(35000 - db)],
          },
        ],
        xaxis: {
          categories: ["Data Base"],
          max: 35000,
          tickAmount: 4,
        },
        fill: {
          opacity: 1,
        },
        colors: ["#f0b64d", "#4ead98"], //Edit Colors Here
        legend: {
          position: "top",
          horizontalAlign: "center",
          offsetX: -20,
        },
      };
      const optionsBarDay = {
        chart: {
          height: 170,
          type: "bar",
          stacked: true,
        },
        plotOptions: {
          bar: {
            // columnWidth: "30%",
            horizontal: true,
          },
        },
        series: [
          {
            name: "Days Used",
            data: [parseInt(db/4/24)],
          },
          {
            name: "Days Left",
            data: [parseInt((35000 - db)/4/24)],
          },
        ],
        xaxis: {
          categories: ["Cycle Dur."],
          max: 35000/4/24,
          tickAmount: 4,
        },
        fill: {
          opacity: 1,
        },
        colors: ["#ad4d38", "#a2a3a5"], //Edit Colors Here
        legend: {
          position: "top",
          horizontalAlign: "center",
          offsetX: -20,
        },
      };

      const chartBar = new ApexCharts(
        document.querySelector("#barchart"),
        optionsBar
      );

      chartBar.render();

      const chartBar2 = new ApexCharts(
        document.querySelector("#barchart2"),
        optionsBarDay
      );

      chartBar2.render();
      // Loading false
      const activityStatus = fetch(
        "https://opensheet.elk.sh/14ePg5bfMRZpy7tQZCI2K8CXreXBN97BkDYTj8nedYH4/Activity-API"
      )
        .then((response) => response.json())
        .then((data) => { 
        var options = {
          series: [{
            name: 'Jan',
            data: [
              {x: 'W1', y: data[0]['W1']},
              {x: 'W2', y: data[0]['W2']},
              {x: 'W3', y: data[0]['W3']},
              {x: 'W4+', y: data[0]['W4']}
            ]
          },
          {
            name: 'Feb',
            data: [
              {x: 'W1', y: data[0]['W5']},
              {x: 'W2', y: data[0]['W6']},
              {x: 'W3', y: data[0]['W7']},
              {x: 'W4', y: data[0]['W8']}
            ]
          },
          {
            name: 'Mar',
            data: [
              {x: 'W1', y: null},
              {x: 'W2', y: null},
              {x: 'W3', y: null},
              {x: 'W4', y: null}
            ]
          },
          {
            name: 'Apr',
            data: [
              {x: 'W1', y: null},
              {x: 'W2', y: null},
              {x: 'W3', y: null},
              {x: 'W4', y: null}
            ]
          },
          {
            name: 'May',
            data: [
              {x: 'W1', y: null},
              {x: 'W2', y: null},
              {x: 'W3', y: null},
              {x: 'W4', y: null}
            ]
          },
          {
            name: 'Jun',
            data: [
              {x: 'W1', y: null},
              {x: 'W2', y: null},
              {x: 'W3', y: null},
              {x: 'W4', y: null}
            ]
          },
          {
            name: 'Jul',
            data: [
              {x: 'W1', y: null},
              {x: 'W2', y: null},
              {x: 'W3', y: null},
              {x: 'W4', y: null}
            ]
          },
          {
            name: 'Aug',
            data: [
              {x: 'W1', y: null},
              {x: 'W2', y: null},
              {x: 'W3', y: null},
              {x: 'W4', y: null}
            ]
          },
          {
            name: 'Sep',
            data: [
              {x: 'W1', y: null},
              {x: 'W2', y: null},
              {x: 'W3', y: null},
              {x: 'W4', y: null}
            ]
          },
          {
            name: 'Oct',
            data: [
              {x: 'W1', y: null},
              {x: 'W2', y: null},
              {x: 'W3', y: null},
              {x: 'W4', y: null}
            ]
          },
          {
            name: 'Nov',
            data: [
              {x: 'W1', y: null},
              {x: 'W2', y: null},
              {x: 'W3', y: null},
              {x: 'W4', y: null}
            ]
          },
          {
            name: 'Dec',
            data: [
              {x: 'W1', y: null},
              {x: 'W2', y: null},
              {x: 'W3', y: null},
              {x: 'W4', y: null}
            ]
          },
        ],
          chart: {
          height: 350,
          type: 'heatmap',
        },
        plotOptions: {
          heatmap: {
            enableShades: false,
            shadeIntensity: 0.9,
            radius: 5,
            useFillColorAsStroke: true,
            colorScale: {
              ranges: [{
                  from: 0,
                  to: 0,
                  name: 'Нет',
                  color: '#30544c',
                },
                {
                  from: 1,
                  to: 5,
                  name: 'Низкая',
                  color: '#decb0e'
                },
                {
                  from: 6,
                  to: 12,
                  name: 'Средняя',
                  color: '#5e9c20'
                },
                {
                  from: 13,
                  to: 20,
                  name: 'Высокая',
                  color: '#ffab00'
                },
                {
                  from: 20,
                  to: 99,
                  name: 'Аномальная',
                  color: '#ee0c04'
                }
              ]
            }
          }
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          width: 1
        },
        title: {
          text: 'Активность Hesoyam II (сделок в неделю 2023)'
        },
        legend: {
          position: "top"
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
      })

      })
    .catch((err) => console.log(err));
}

loadData(window.localStorage.getItem("timeframe"))

setInterval(() => {
  location.reload();
}, n * 1000);
