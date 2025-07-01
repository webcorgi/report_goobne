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
    labels: ['군대차원', '교촌치킨', 'bhc'],
    datasets: [
      {
        data: [15.65, 40.09, 44.25],
        backgroundColor: [theme.primary, theme.primaryDarker, theme.primaryAccent],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '50%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 14,
          }
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw.toFixed(2)}%`;
          }
        }
      },
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold',
          size: 14
        },
        formatter: (value) => {
          return value > 15 ? `${value.toFixed(1)}%` : '';
        }
      }
    },
  };

  return (
    <div className="chart-container" style={{ position: 'relative', height: '200px', paddingTop:'10px'}}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart; 