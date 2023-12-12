(async function() {

  Chart.defaults.font.size = 18;
  Chart.defaults.borderColor = '#9E9E9E';
  Chart.defaults.color = '#FFF';
  Chart.defaults.plugins.legend.display = false;

    const data = {
      labels: ['Wonder', 'Money', 'War', 'Blue', 'Yellow', 'Green', 'Purple', 'Cities', 'Leaders', 'Sea War', 'Sea Cards'],
      datasets: [{
        axis: 'y',
        label: 'Avg Max Points',
        data: [16.94, 10.63, 16.44, 32.00, 11.00, 40.13, 18.38, 7.67, 13.38, 12.75, 8.25],
        fill: false,
        backgroundColor: [
          '#b28448',
          '#c4813b',
          '#a93e36',
          '#42739c',
          '#c07e32',
          '#4f6a41',
          '#5d567f',
          '#5c4c3f',
          '#a9a196',
          '#445778',
          '#5882aa'
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
      document.getElementById('ptype_avg_max_chart'),
      config
    );

  })();