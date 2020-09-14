//Globals /////////
//

const alertBar = document.querySelector('.alert-container');



// Close Button Function
alertBar.addEventListener('click', e => {
  if(e.target.tagName === 'A') {
    alertBar.style.display = 'none';
  }
});

// CHARTS
const fullSizeChart = document.getElementById('lineChart');
const dailyTrafficChart = document.getElementById('barChart');
const mobileUsersChart = document.getElementById('doughnutChart');


let lineChart = new Chart(fullSizeChart, {

  type: 'line',
  data: {
    labels: ["0","16","23","30","6","13","20","27","4","11","18","31"],
    datasets: [{
        fill: true,
        lineTension: 0,
        backgroundColor: "rgba(167, 167, 211, 0.4)",
        borderColor: "rgba(167, 167, 211, 1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        borderWidth: 1,
        pointBorderColor: "rgba(167, 167, 211, 1)",
        pointBackgroundColor: "rgba(255, 255, 255, 1)",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(255, 255, 255)",
        pointHoverBorderWidth: 1,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750],
      }
    ]
  },
  options: {
    legend: display = false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

let barChart = new Chart(dailyTrafficChart, {
  type: 'bar',
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        fill: true,
        lineTension: 0,
        backgroundColor: "rgba(167, 167, 211, 1)",
        borderColor: "rgba(167, 167, 211, 1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(167, 167, 211, 1)",
        pointBackgroundColor: "rgba(255, 255, 255, 1)",
        pointBorderWidth: 3,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgb(255, 255, 255)",
        pointHoverBorderWidth: 2,
        data: [75, 100, 175, 125, 225, 200, 100],
      }
    ]
  },
  options: {
    legend: {
          display: false,
              },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

let doughnutChart = new Chart(mobileUsersChart, {
  type: 'doughnut',
  data: {
    labels:
      ['Desktop',
      'Tablets',
      'Phones'],
    datasets: [
      {
        backgroundColor: ["#7477BF", "#81C98F", "#74B1BF"],
        borderColor: ["#7477BF", "#81C98F", "#74B1BF"],
        data: [70, 20, 10]
      }
    ]
  },
    options: {
      legend: {
            display: true,
            position: 'right',
            align: 'center',
                labels: {
                  boxWidth: 15,
                  }
                }
      }
    }
);
