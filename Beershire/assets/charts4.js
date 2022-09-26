fetch("https://opensheet.elk.sh/14ePg5bfMRZpy7tQZCI2K8CXreXBN97BkDYTj8nedYH4/API-out")
  .then((response) => response.json()).then((data) => {
    var final_data = data

    // Actual Code goes in here

    let j = Object.keys(final_data).length

    // Set Arrays
    var lookback = 100
    var Organic_data = []
    var HYMm = []
    var Date_Time = []

    while (lookback > 0) {
      // console.log(text[j-i]) // как заказать 0:5
      Organic_data.push(final_data[j-lookback]['Organic'])
      HYMm.push(final_data[j-lookback]['Lancelot 2.7'])
      Date_Time.push(final_data[j-lookback]['Datetime'])
      lookback -= 1
    }

    var options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'Organic Data',
        data: Organic_data.slice(0, -1)
      },
      {
        name: 'Organic Data',
        data: HYMm.slice(0, -1)
      },
      ],
      xaxis: {
        categories: Date_Time.slice(0, -1)
      }
    }
    
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    
    chart.render();


  })
