// ─── CHARTS ───

// Donut — allocazione tempo agenzia tradizionale
const donutCtx = document.getElementById('donutChart').getContext('2d');
new Chart(donutCtx, {
  type: 'doughnut',
  data: {
    labels: ['Burocrazia', 'Visite non qualificate', 'Ricerca mandati', 'Vendita attiva'],
    datasets: [{
      data: [32, 28, 24, 16],
      backgroundColor: ['#2a2a2a', '#3a3a3a', '#d09f79', '#e8c9a8'],
      borderWidth: 0,
      hoverOffset: 6
    }]
  },
  options: {
    cutout: '68%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#555',
          font: { family: 'Inter', size: 12 },
          padding: 16,
          usePointStyle: true
        }
      },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ${ctx.label}: ${ctx.parsed}%`
        }
      }
    }
  }
});

// Bar — confronto Zelore vs Tradizionale
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Valore medio operazione', 'Tempo in vendita attiva', 'Lead qualificati/mese', 'Supporto back office'],
    datasets: [
      {
        label: 'Agenzia Tradizionale',
        data: [30, 20, 25, 10],
        backgroundColor: 'rgba(80,80,80,0.7)',
        borderRadius: 0
      },
      {
        label: 'Zelore',
        data: [95, 75, 85, 100],
        backgroundColor: '#d09f79',
        borderRadius: 0
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        ticks: { color: '#888', font: { family: 'Inter', size: 11 } },
        grid: { color: 'rgba(255,255,255,0.04)' }
      },
      y: {
        max: 100,
        ticks: { color: '#888', font: { family: 'Inter', size: 11 } },
        grid: { color: 'rgba(255,255,255,0.04)' }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#aaa',
          font: { family: 'Inter', size: 12 },
          usePointStyle: true,
          padding: 20
        }
      },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y} (indice)`
        }
      }
    }
  }
});
