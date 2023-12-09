(async function() {

  Chart.defaults.font.size = 18;
  Chart.defaults.borderColor = '#9E9E9E';
  Chart.defaults.color = '#FFF';
  Chart.defaults.plugins.legend.display = false;

    const data = {
      labels: ['Pascal', 'Rafael', 'Leandro', 'Stanley', 'Elena', 'Fabio', 'Alan', 'Yara'],
      datasets: [{
        axis: 'y',
        label: 'Career Points',
        data: [1102, 970, 947, 927, 906, 901, 179, 135],
        fill: false,
        backgroundColor: [
          '#D4AC0D',
          '#A6ACAF',
          '#229954',
          '#CB4335',
          '#884EA0',
          '#2E86C1',
          '#BA4A00',
          '#17A589'
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
      document.getElementById('career_points_chart'),
      config
    );

  })();