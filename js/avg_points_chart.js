(async function() {

  Chart.defaults.font.size = 18;
  Chart.defaults.borderColor = '#9E9E9E';
  Chart.defaults.color = '#FFF';
  Chart.defaults.plugins.legend.display = false;

    const data = {
      // labels: ['Pascal', 'Rafael', 'Leandro', 'Stanley', 'Elena', 'Fabio', 'Alan', 'Yara'],
      labels: ['Elena', 'Pascal', 'Yara', 'Rafael', 'Fabio', 'Alan', 'Leandro', 'Stanley'],
      datasets: [{
        axis: 'y',
        label: 'Avg Points per Game',
        // data: [68.88, 60.63, 59.19, 57.94, 69.69, 60.07, 59.67, 67.50],
        data: [69.69, 68.88, 67.50, 60.63, 60.07, 59.67, 59.19, 57.94],
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