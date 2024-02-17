(async function() {

  Chart.defaults.font.size = 18;
  Chart.defaults.borderColor = '#9E9E9E';
  Chart.defaults.color = '#FFF';
  Chart.defaults.plugins.legend.display = false;

    const data = {
      labels: ['Wonder', 'Money', 'War', 'Blue', 'Yellow', 'Green', 'Purple', 'Cities', 'Leaders', 'Sea War', 'Sea Cards'],
      datasets: [{
        axis: 'y',
        label: 'Wins',
        //     w  m  w  b  y  g  p  c  l  s  s
        data: [2, 0, 1, 6, 1, 9, 3, 0, 0, 0, 0],
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
      document.getElementById('winner_max_ptype_chart'),
      config
    );

  })();