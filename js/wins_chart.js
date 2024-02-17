(async function() {

  Chart.defaults.font.size = 18;
  Chart.defaults.borderColor = '#9E9E9E';
  Chart.defaults.color = '#FFF';
  Chart.defaults.plugins.legend.display = false;

    const data = {
      labels: [' \u2B06 Pascal', '\u2B07 Elena', 'Fabio', 'Rafael', 'Stanley', 'Leandro', 'Alan', 'Yara'],
      datasets: [{
        axis: 'y',
        label: 'Wins',
        data: [8, 5, 4, 3, 1, 1, 0, 0],
        fill: false,
        backgroundColor: [
          '#884EA0',
          '#D4AC0D',
          '#2E86C1',
          '#A6ACAF',
          '#CB4335',
          '#229954',
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
      document.getElementById('wins_chart'),
      config
    );

  })();