import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { useRecoilState } from 'recoil';
import { themeState } from '../../../recoil/atom';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  annotationPlugin
);

export default function HighlightedLineChart() {
  // theme는 사용하지 않음(색상 직접 지정)
  const labels = [
    '2025.03.10',
    '2025.03.11',
    '2025.03.12',
    '2025.03.13',
    '2025.03.14',
    '2025.03.15',
    '2025.03.16',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: '굽네치킨',
        data: [500, 600, 550, 200, 400, 150, 180],
        borderColor: '#FF7043',
        backgroundColor: '#FF7043',
        tension: 0,
        borderWidth: 2,
        pointRadius: 4,
        pointBorderWidth: 0,
        pointBackgroundColor: '#FF7043',
        pointBorderColor: '#FF7043',
        pointHoverRadius: 4,
        pointHoverBorderWidth: 0,
        pointHoverBackgroundColor: '#FF7043',
        pointHoverBorderColor: '#FF7043',
        fill: false,
      },
      {
        label: '교촌치킨',
        data: [900, 1200, 1250, 900, 1100, 500, 600],
        borderColor: '#26A69A',
        backgroundColor: '#26A69A',
        tension: 0,
        borderWidth: 2,
        pointRadius: 4,
        pointBorderWidth: 0,
        pointBackgroundColor: '#26A69A',
        pointBorderColor: '#26A69A',
        pointHoverRadius: 4,
        pointHoverBorderWidth: 0,
        pointHoverBackgroundColor: '#26A69A',
        pointHoverBorderColor: '#26A69A',
        fill: false,
      },
      {
        label: 'bhc',
        data: [1200, 1300, 1280, 900, 850, 400, 500],
        borderColor: '#FFCA28',
        backgroundColor: '#FFCA28',
        tension: 0,
        borderWidth: 2,
        pointRadius: 4,
        pointBorderWidth: 0,
        pointBackgroundColor: '#FFCA28',
        pointBorderColor: '#FFCA28',
        pointHoverRadius: 4,
        pointHoverBorderWidth: 0,
        pointHoverBackgroundColor: '#FFCA28',
        pointHoverBorderColor: '#FFCA28',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleFont: { size: 12 },
        bodyFont: { size: 12 },
        borderWidth: 0,
      },
      datalabels: {
        display: false,
      },
      annotation: {
        annotations: {
          highlightBox1: {
            type: 'box',
            xMin: 0.5,
            xMax: 1.5,
            backgroundColor: 'rgba(255, 160, 122, 0.18)',
            borderWidth: 0,
            drawTime: 'beforeDatasetsDraw',
          },
          highlightBox2: {
            type: 'box',
            xMin: 3.5,
            xMax: 4.5,
            backgroundColor: 'rgba(255, 160, 122, 0.18)',
            borderWidth: 0,
            drawTime: 'beforeDatasetsDraw',
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: '#E0E0E0',
          borderDash: [4, 4],
          borderDashOffset: 0,
          drawBorder: false,
        },
        ticks: {
          color: '#858E95',
          font: {
            size: 8,
          },
        },
      },
      y: {
        beginAtZero: false,
        min: 0,
        max: 1400,
        grid: {
          color: '#E0E0E0',
          borderDash: [4, 4],
          borderDashOffset: 0,
          drawBorder: false,
        },
        ticks: {
          color: '#858E95',
          font: {
            size: 8,
          },
          stepSize: 200,
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    hover: {
      mode: null,
    },
    elements: {
      point: {
        hoverRadius: 4,
        radius: 4,
        borderWidth: 0, 
      },
      line: {
        borderWidth: 2,
        tension: 0.4,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '178px', background: 'white' }}>
      <Line data={data} options={options} />
    </div>
  );
}
