import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useRecoilState } from 'recoil';
import { themeState } from '../../../recoil/atom';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const data = {
    labels: ['굽네치킨', '교촌치킨', 'bhc'],
    datasets: [
      {
        data: [26.1, 23.5, 44.25],
        backgroundColor: ['#F26C23', '#FFB84D', '#4CBBA3'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw.toFixed(2)}%`;
          }
        }
      },
      datalabels: {
        color: '#000',
        font: {
          size: 10,
        },
        align: 'center',
        anchor: 'end',
        offset: 10,
        formatter: (value) => `${value.toFixed(1)}%`,
        display: true,
        clamp: true,
      }
    },
  };

  // Custom legend below chart
  const legendItems = [
    { label: '굽네치킨', color: '#F26C23' },
    { label: '교촌치킨', color: '#FFB84D' },
    { label: 'bhc', color: '#4CBBA3' },
  ];

  return (
    <div style={{ width: '100%', textAlign: 'center', paddingTop: 0 }}>
      <div style={{ position: 'relative', height: '108px', width: '100%', margin: '20px auto' }}>
        <Pie data={data} options={options} plugins={[ChartDataLabels]} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 4 }}>
        {legendItems.map((item, idx) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', fontSize: 10, color: '#495056', fontWeight: 400 }}>
            <span style={{ display: 'inline-block', width: 9, height: 9, borderRadius: '50%', background: item.color, marginRight: 6 }}></span>
            <span style={{fontSize:12}}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart; 