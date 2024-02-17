(async function() {

  Chart.defaults.font.size = 18;
  Chart.defaults.borderColor = '#9E9E9E';
  Chart.defaults.color = '#FFF';
  Chart.defaults.plugins.legend.display = false;

    const data = {
      labels: ['\u2B06 Pascal', ' \u2B06 Alan', '\u2B07 Elena', '\u2B06 Fabio', '\u2B07 Yara', '\u2B07 Rafael', 'Leandro', 'Stanley'],
      datasets: [{
        axis: 'y',
        label: 'Avg Points per Game',
        data: [75.05, 73.33, 71.00, 68.24, 67.50, 66.86, 62.32, 59.41],
        fill: false,
        backgroundColor: [
          '#884EA0',
          '#D4AC0D',
          '#17A589',
          '#A6ACAF',
          '#2E86C1',
          '#BA4A00',
          '#229954',
          '#CB4335'
        ],
        borderWidth: 0,
        minBarLength: 8,
        // barThickness: 30,
        categoryPercentage: 0.8
      }]
    };

    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          x: {
            grace: '0%'
          }
        },
        indexAxis: 'y',
        aspectRatio: 1.0
      }
    };
  
    new Chart(
      document.getElementById('avg_points_chart'),
      config
    );

  })();