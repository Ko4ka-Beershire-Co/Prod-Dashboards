// Loading true
let db = 0;

const dat = fetch(
  "https://opensheet.elk.sh/14ePg5bfMRZpy7tQZCI2K8CXreXBN97BkDYTj8nedYH4/API-out-stats"
)
  .then((response) => response.json())
  .then((data) => {
    const final_data_2 = data;
    document.getElementById("organic").innerHTML = final_data_2[0]["Organic"];
    document.getElementById("Lancelot 2.7").innerHTML =
      final_data_2[0]["Lancelot 2.7"];
    document.getElementById("Hesoyam 0.7b").innerHTML =
      final_data_2[0]["Hesoyam 0.7b"];
    document.getElementById("Hesoyam I").innerHTML =
      final_data_2[0]["Hesoyam I"];
    document.getElementById("HYM LSTM+").innerHTML =
      final_data_2[0]["HYM LSTM+"];
    document.getElementById("HYM LSTM-").innerHTML =
      final_data_2[0]["HYM LSTM-"];
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

const res = fetch(
  "https://opensheet.elk.sh/14ePg5bfMRZpy7tQZCI2K8CXreXBN97BkDYTj8nedYH4/API-out"
)
  .then((response) => response.json())
  .then((data) => {
    const final_data = data;

    // Actual Code goes in here

    let j = Object.keys(final_data).length;

    // Set Arrays
    const days = 20;
    let lookback = 4 * 24 * days;
    const Organic_data = [];
    const Lancelot_data = [];
    const Hesoyam_07b_data = [];
    const Hesoyam_I_data = [];
    const HYMm = [];
    const HYMp = [];
    const Date_Time = [];

    while (lookback > 2) {
      // console.log(text[j-i]) // как заказать 0:5
      Organic_data.push(final_data[j - lookback]["Organic"]);
      Lancelot_data.push(final_data[j - lookback]["Lancelot 2.7"]);
      Hesoyam_07b_data.push(final_data[j - lookback]["Hesoyam 0.7b"]);
      Hesoyam_I_data.push(final_data[j - lookback]["Hesoyam I"]);
      HYMm.push(final_data[j - lookback]["HYM LSTM-"]);
      HYMp.push(final_data[j - lookback]["HYM LSTM+"]);
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
        width: 3,
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

    // const spark1 = {
    //   chart: {
    //     id: "spark1",
    //     group: "sparks",
    //     type: "bar",
    //     // height: "100%",
    //     sparkline: {
    //       enabled: true,
    //     },
    //     dropShadow: {
    //       enabled: true,
    //       top: 1,
    //       left: 1,
    //       blur: 2,
    //       opacity: 0.2,
    //     },
    //   },
    //   series: [
    //     {
    //       data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21],
    //     },
    //   ],
    //   stroke: {
    //     curve: "smooth",
    //   },
    //   markers: {
    //     size: 0,
    //   },
    //   grid: {
    //     padding: {
    //       top: 20,
    //       bottom: 10,
    //       left: 110,
    //     },
    //   },
    //   colors: ["#fff"],
    //   tooltip: {
    //     x: {
    //       show: false,
    //     },
    //     y: {
    //       title: {
    //         formatter: function formatter(val) {
    //           return "";
    //         },
    //       },
    //     },
    //   },
    // };

    // const spark2 = {
    //   chart: {
    //     id: "spark2",
    //     group: "sparks",
    //     type: "bar",
    //     //height: "100%",
    //     sparkline: {
    //       enabled: true,
    //     },
    //     dropShadow: {
    //       enabled: true,
    //       top: 1,
    //       left: 1,
    //       blur: 2,
    //       opacity: 0.2,
    //     },
    //   },
    //   series: [
    //     {
    //       data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69],
    //     },
    //   ],
    //   stroke: {
    //     curve: "smooth",
    //   },
    //   grid: {
    //     padding: {
    //       top: 20,
    //       bottom: 10,
    //       left: 110,
    //     },
    //   },
    //   markers: {
    //     size: 0,
    //   },
    //   colors: ["#fff"],
    //   tooltip: {
    //     x: {
    //       show: false,
    //     },
    //     y: {
    //       title: {
    //         formatter: function formatter(val) {
    //           return "";
    //         },
    //       },
    //     },
    //   },
    // };

    // const spark3 = {
    //   chart: {
    //     id: "spark3",
    //     group: "sparks",
    //     type: "bar",
    //     //height: "100%",
    //     sparkline: {
    //       enabled: true,
    //     },
    //     dropShadow: {
    //       enabled: true,
    //       top: 1,
    //       left: 1,
    //       blur: 2,
    //       opacity: 0.2,
    //     },
    //   },
    //   series: [
    //     {
    //       data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19],
    //     },
    //   ],
    //   stroke: {
    //     curve: "smooth",
    //   },
    //   markers: {
    //     size: 0,
    //   },
    //   grid: {
    //     padding: {
    //       top: 20,
    //       bottom: 10,
    //       left: 110,
    //     },
    //   },
    //   colors: ["#fff"],
    //   xaxis: {
    //     crosshairs: {
    //       width: 1,
    //     },
    //   },
    //   tooltip: {
    //     x: {
    //       show: false,
    //     },
    //     y: {
    //       title: {
    //         formatter: function formatter(val) {
    //           return "";
    //         },
    //       },
    //     },
    //   },
    // };

    // const spark4 = {
    //   chart: {
    //     id: "spark4",
    //     group: "sparks",
    //     type: "bar",
    //     //height: "100%",
    //     sparkline: {
    //       enabled: true,
    //     },
    //     dropShadow: {
    //       enabled: true,
    //       top: 1,
    //       left: 1,
    //       blur: 2,
    //       opacity: 0.2,
    //     },
    //   },
    //   series: [
    //     {
    //       data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61],
    //     },
    //   ],
    //   stroke: {
    //     curve: "smooth",
    //   },
    //   markers: {
    //     size: 0,
    //   },
    //   grid: {
    //     padding: {
    //       top: 20,
    //       bottom: 10,
    //       left: 110,
    //     },
    //   },
    //   colors: ["#fff"],
    //   xaxis: {
    //     crosshairs: {
    //       width: 1,
    //     },
    //   },
    //   tooltip: {
    //     x: {
    //       show: false,
    //     },
    //     y: {
    //       title: {
    //         formatter: function formatter(val) {
    //           return "";
    //         },
    //       },
    //     },
    //   },
    // };

    // new ApexCharts(document.querySelector("#spark1"), spark1).render();
    // new ApexCharts(document.querySelector("#spark2"), spark2).render();
    // new ApexCharts(document.querySelector("#spark3"), spark3).render();
    // new ApexCharts(document.querySelector("#spark4"), spark4).render();

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
          name: "Lancelot 2.7",
          data: Lancelot_data,
        },
        {
          name: "Hesoyam 0.7b",
          data: Hesoyam_07b_data,
        },
        {
          name: "Hesoyam I",
          data: Hesoyam_I_data,
        },
        {
          name: "HYM-",
          data: HYMm,
        },
        {
          name: "HYM+",
          data: HYMp,
        },
      ],
      title: {
        text: "Weekly Chart",
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
        "#ad4d38",
        "#ecb45e",
        "#4bbea0",
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
          data: [(10000 - db)],
        },
      ],
      xaxis: {
        categories: ["Data Base"],
        max: 10000,
        tickAmount: 4,
      },
      fill: {
        opacity: 1,
      },
      colors: ["#f0b64d", "#4ead98"], //Edit Colors Here
      legend: {
        position: "top",
        horizontalAlign: "left",
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
          data: [parseInt((10000 - db)/4/24)],
        },
      ],
      xaxis: {
        categories: ["Cycle Dur."],
        max: 10000/4/24,
        tickAmount: 4,
      },
      fill: {
        opacity: 1,
      },
      colors: ["#ad4d38", "#a2a3a5"], //Edit Colors Here
      legend: {
        position: "top",
        horizontalAlign: "left",
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
  })
  .catch((err) => console.log(err));
