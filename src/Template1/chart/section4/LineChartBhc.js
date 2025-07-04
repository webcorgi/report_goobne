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

export default function LineChartBhc() {
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
        label: '커뮤니티',
        data: [45, 60, 55, 30, 40, 25, 35],
        borderColor: '#F26522',
        backgroundColor: '#F26522',
        tension: 0,
        borderWidth: 2,
        pointRadius: 4,
        pointBorderWidth: 0,
        pointBackgroundColor: '#F26522',
        pointBorderColor: '#F26522',
        pointHoverRadius: 4,
        pointHoverBorderWidth: 0,
        pointHoverBackgroundColor: '#F26522',
        pointHoverBorderColor: '#F26522',
        fill: false,
      },
      {
        label: '블로그',
        data: [50, 65, 70, 35, 45, 30, 40],
        borderColor: '#FFB448',
        backgroundColor: '#FFB448',
        tension: 0,
        borderWidth: 2,
        pointRadius: 4,
        pointBorderWidth: 0,
        pointBackgroundColor: '#FFB448',
        pointBorderColor: '#FFB448',
        pointHoverRadius: 4,
        pointHoverBorderWidth: 0,
        pointHoverBackgroundColor: '#FFB448',
        pointHoverBorderColor: '#FFB448',
        fill: false,
      },
      {
        label: '뉴스',
        data: [55, 70, 75, 40, 50, 35, 45],
        borderColor: '#A7B100',
        backgroundColor: '#A7B100',
        tension: 0,
        borderWidth: 2,
        pointRadius: 4,
        pointBorderWidth: 0,
        pointBackgroundColor: '#A7B100',
        pointBorderColor: '#A7B100',
        pointHoverRadius: 4,
        pointHoverBorderWidth: 0,
        pointHoverBackgroundColor: '#A7B100',
        pointHoverBorderColor: '#A7B100',
        fill: false,
      },
      {
        label: '유튜브',
        data: [48, 62, 58, 32, 42, 28, 38],
        borderColor: '#4AB88D',
        backgroundColor: '#4AB88D',
        tension: 0,
        borderWidth: 2,
        pointRadius: 4,
        pointBorderWidth: 0,
        pointBackgroundColor: '#4AB88D',
        pointBorderColor: '#4AB88D',
        pointHoverRadius: 4,
        pointHoverBorderWidth: 0,
        pointHoverBackgroundColor: '#4AB88D',
        pointHoverBorderColor: '#4AB88D',
        fill: false,
      },
      {
        label: 'X(트위터)',
        data: [42, 55, 52, 28, 38, 22, 32],
        borderColor: '#249C8F',
        backgroundColor: '#249C8F',
        tension: 0,
        borderWidth: 2,
        pointRadius: 4,
        pointBorderWidth: 0,
        pointBackgroundColor: '#249C8F',
        pointBorderColor: '#249C8F',
        pointHoverRadius: 4,
        pointHoverBorderWidth: 0,
        pointHoverBackgroundColor: '#249C8F',
        pointHoverBorderColor: '#249C8F',
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
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: '#E8ECEF',
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
        max: 80,
        grid: {
          color: '#E8ECEF',
          borderDash: [4, 4],
          borderDashOffset: 0,
          drawBorder: false,
        },
        ticks: {
          color: '#858E95',
          font: {
            size: 0,
          },
          stepSize: 20,
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
    <div style={{ width: '100%', height: '123px', background: 'white' }}>
      <Line data={data} options={options} />
    </div>
  );
}
