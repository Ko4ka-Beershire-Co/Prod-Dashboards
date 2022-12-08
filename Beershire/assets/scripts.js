// Loading true
let db = 0;
const n = 60*5;

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
    document.getElementById("Hesoyam II").innerHTML =
      final_data_2[0]["Hesoyam II"];

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
    const Hesoyam_II_data = [];

    while (lookback > 2) {
      // console.log(text[j-i]) // как заказать 0:5
      Organic_data.push(final_data[j - lookback]["Organic"]);
      Lancelot_data.push(final_data[j - lookback]["Lancelot 2.7"]);
      Hesoyam_07b_data.push(final_data[j - lookback]["Hesoyam 0.7b"]);
      Hesoyam_I_data.push(final_data[j - lookback]["Hesoyam I"]);
      HYMm.push(final_data[j - lookback]["HYM LSTM-"]);
      HYMp.push(final_data[j - lookback]["HYM LSTM+"]);
      Hesoyam_II_data.push(final_data[j - lookback]["Hesoyam II"]);
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
          name: "Hesoyam II-b",
          data: Hesoyam_II_data,
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
        "#6bbc25",
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


setInterval(() => {
  location.reload();
}, n * 1000);
