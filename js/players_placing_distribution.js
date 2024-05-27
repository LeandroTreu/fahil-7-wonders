import { fetchAndParseJSON, color_map } from "./util.js";

(async function() {

  const stats = await fetchAndParseJSON("./stats.json");
  const stat = stats["playersPlacingDistribution"];
  for (const player of Object.entries(stat)) {
    const name = player[0];
    const distribution = player[1]

    let thisStat = distribution;
    thisStat = Object.entries(thisStat);
    const names = []
    const scores = []
    for (const entry of thisStat) {
      names.push(entry[0]+".");
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
          label: '# times',
          data: scores,
          fill: false,
          backgroundColor: [
            color_map[name],
          ],
          borderWidth: 0,
          minBarLength: 0,
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
              min: 0,
              max: 15,
              ticks: {
                stepSize: 1,
              }
            },
          },
          indexAxis: 'y',
          aspectRatio: 1.0
        }
      };
    
      new Chart(
        document.getElementById(`playersPlacingDistributions_chart_${name}`),
        config
      );

    }
  })();