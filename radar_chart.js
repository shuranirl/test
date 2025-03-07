const dscc = require('@google/dscc');
const Chart = require('chart.js');

function drawViz(data) {
  let ctx = document.getElementById('radarChart').getContext('2d');

  let labels = data.fields.map(field => field.name);
  let values = data.tables.DEFAULT.map(row => row.map(cell => cell.value));

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Radar Data',
        data: values[0], // First row of values
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true
        }
      }
    }
  });
}

dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
