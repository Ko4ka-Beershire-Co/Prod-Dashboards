const res = fetch("https://opensheet.elk.sh/14ePg5bfMRZpy7tQZCI2K8CXreXBN97BkDYTj8nedYH4/API-out")
  .then((response) => response.json()).then((data) => {
    var final_data = data

    // Actual Code goes in here

    let j = Object.keys(final_data).length

    // Set Arrays
    const days = 7
    var lookback = 4*24*days
    var Organic_data = []
    var Lancelot_data = []
    var Hesoyam_07b_data = []
    var Hesoyam_I_data = []
    var HYMm = []
    var HYMp = []
    var Date_Time = []

    while (lookback > 2) {
      // console.log(text[j-i]) // как заказать 0:5
      Organic_data.push(final_data[j-lookback]['Organic'])
      Lancelot_data.push(final_data[j-lookback]['Lancelot 2.7'])
      Hesoyam_07b_data.push(final_data[j-lookback]['Hesoyam 0.7b'])
      Hesoyam_I_data.push(final_data[j-lookback]['Hesoyam I'])
      HYMm.push(final_data[j-lookback]['HYM LSTM-'])
      HYMp.push(final_data[j-lookback]['HYM LSTM+'])
      Date_Time.push(final_data[j-lookback]['Datetime'])
      lookback -= 1
    }
    
window.Apex = {
  chart: {
    foreColor: '#ccc',
    toolbar: {
      show: false
    },
  },
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    theme: 'dark'
  },
  grid: {
    borderColor: "#535A6C",
    xaxis: {
      lines: {
        show: true
      }
    }
  }
};

var spark1 = {
  chart: {
    id: 'spark1',
    group: 'sparks',
    type: 'bar',
    height: '100%',
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark2 = {
  chart: {
    id: 'spark2',
    group: 'sparks',
    type: 'bar',
    height: '100%',
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
  }],
  stroke: {
    curve: 'smooth'
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  markers: {
    size: 0
  },
  colors: ['#fff'],
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark3 = {
  chart: {
    id: 'spark3',
    group: 'sparks',
    type: 'bar',
    height: '100%',
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark4 = {
  chart: {
    id: 'spark4',
    group: 'sparks',
    type: 'bar',
    height: '100%',
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

new ApexCharts(document.querySelector("#spark1"), spark1).render();
new ApexCharts(document.querySelector("#spark2"), spark2).render();
new ApexCharts(document.querySelector("#spark3"), spark3).render();
new ApexCharts(document.querySelector("#spark4"), spark4).render();


var optionsLine = {
  chart: {
    height: "100%",
    width: "100%",
    type: 'line',
    zoom: {
      enabled: false
    },
    dropShadow: {
      enabled: false,
      top: 3,
      left: 2,
      blur: 4,
      opacity: 1,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  //colors: ["#3F51B5", '#2196F3'],
  series: [{
      name: "Organic",
      data: Organic_data
    },
    {
      name: "Lancelot 2.7",
      data: Lancelot_data
    },
    {
      name: "Hesoyam 0.7b",
      data: Hesoyam_07b_data
    },
    {
      name: "Hesoyam I",
      data: Hesoyam_I_data
    },
    {
      name: "HYM-",
      data: HYMm
    },
    {
      name: "HYM+",
      data: HYMp
    }
  ],
  title: {
    text: 'Weekly Chart',
    align: 'left',
    offsetY: 5,
    offsetX: 5
  },
  grid: {
    show: false,
    padding: {
      bottom: 0
    }
  },
  labels: Date_Time,
  xaxis: {
    tooltip: {
      enabled: true
    },
    show: false,
    labels: {
      show: false
    },
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: false
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: 0
  }
}

var chartLine = new ApexCharts(document.querySelector('#line-adwords'), optionsLine);
chartLine.render();

var optionsBar = {
  chart: {
    height: 170,
    type: 'bar',
    stacked: true
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      horizontal: true,
    },
  },
  series: [{
    name: 'Database',
    data: [0.14]
  },
  {
    name: 'Database-2',
    data: [0.86]
  }
  ],
  xaxis: {
    categories: ['Data Base'],
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'right',
    horizontalAlign: 'left',
    offsetX: -20
  }

}

var chartBar = new ApexCharts(
  document.querySelector("#barchart"),
  optionsBar
);

chartBar.render();

}
  )
