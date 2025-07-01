import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../../recoil/atom';

// Register the datalabels plugin
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ConsumerInterestChart = ({ brandName, labels, data, analysisText }) => {
  const theme = useRecoilValue(themeState);

  // 데이터 정의
  const chartData = {
    labels,
    datasets: [
      {
        label: '언급량',
        data,
        backgroundColor: `${theme.primary}D9`,
        borderColor: theme.primary,
        borderWidth: 1,
        borderRadius: 4,
        barThickness: 20,
      }
    ]
  };

  // 차트 옵션 정의
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y', // Switch to horizontal bar chart for better readability
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(0,0,0,0.05)',
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
            weight: 'bold',
          },
          color: theme.black,
        },
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        titleColor: theme.black,
        bodyColor: theme.blackAccent,
        borderColor: theme.gray01,
        borderWidth: 1,
        padding: 10,
        boxWidth: 8,
        boxHeight: 8,
        boxPadding: 3,
        usePointStyle: true,
        callbacks: {
          label: function(context) {
            return `언급량: ${context.formattedValue}`;
          }
        }
      },
      // Add data labels to display values on bars
      datalabels: {
        display: true,
        align: 'end',
        anchor: 'end',
        color: theme.black,
        font: {
          weight: 'bold',
        },
        formatter: function(value) {
          return value.toLocaleString();
        }
      }
    }
  };

  return (
    <div className="consumer-interest-chart">
      <div className="chart-section">
        <div className="chart-row">
          <h3 className="chart-title brand-title">
            {brandName}
            <div className="table-caption" style={{ color: theme.primary }}>
                <em>연관어</em>
            </div>
          </h3>
          
          <div className='chart-column-line-chart'>
            <Bar data={chartData} options={chartOptions} />
          </div>
          
          <div className="data-analysis-section">
            <p>{analysisText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerInterestChart; 