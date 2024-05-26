import { fetchAndParseJSON, color_map } from "./util.js";

(async function() {

  const stats = await fetchAndParseJSON("./stats.json");
  let thisStat = stats["playersAvgPointsPercentage"];
  thisStat = Object.entries(thisStat);
  thisStat.sort((a, b) => b[1] - a[1]);
  const names = []
  const scores = []
  const plot_colors = []
  for (const entry of thisStat) {
    names.push(entry[0]);
    scores.push(entry[1]);
    plot_colors.push(color_map[entry[0]]);
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
        backgroundColor: plot_colors,
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
      document.getElementById('avgPointsPercentage_chart'),
      config
    );

  })();