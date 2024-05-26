import { fetchAndParseJSON } from "./util.js";

(async function() {

  const stats = await fetchAndParseJSON("./stats.json");
  const stat = stats["playersPointsDistributions"];
  for (const player of Object.entries(stat)) {
    const name = player[0];
    const distribution = player[1]

    let thisStat = distribution;
    thisStat = Object.entries(thisStat);
    const names = []
    const scores = []
    for (const entry of thisStat) {
      names.push(entry[0]);
      scores.push(entry[1]);
    }

    Chart.defaults.font.size = 18;
    Chart.defaults.borderColor = '#9E9E9E';
    Chart.defaults.color = '#FFF';
    Chart.defaults.plugins.legend.display = false;

      const data = {
        labels: names,
        datasets: [{
          axis: 'y',
          label: 'Avg %',
          data: scores,
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
              grace: '0%',
              min: -5,
              max: 35,
              ticks: {
                stepSize: 5.0,
              }
            },
          },
          indexAxis: 'y',
          aspectRatio: 1.0
        }
      };
    
      new Chart(
        document.getElementById(`playersPointsDistributions_chart_${name}`),
        config
      );

    }
  })();