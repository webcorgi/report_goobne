import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

import '../../../css/MyChart.css';
import { themeState } from '../../../recoil/atom';
import { useRecoilState } from 'recoil';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

export default function ChartComponent() {
  const [theme, setTheme] = useRecoilState(themeState);

  const data = {
    labels: [''],
    datasets: [
      {
        label: '굽네치킨',
        data: [15.65],
        backgroundColor: theme.primary,
        stack: 'stack1',
        barThickness: 30,
      },
      {
        label: '교촌치킨',
        data: [40.09],
        backgroundColor: theme.primaryDarker,
        stack: 'stack1',
        barThickness: 30,
      },
      {
        label: 'bhc',
        data: [44.25],
        backgroundColor: theme.primaryAccent,
        stack: 'stack1',
        barThickness: 30,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: '#fff',
        anchor: 'center',
        align: 'center',
        font: {
          weight: 'bold',
          size: 14,
        },
        formatter: (value) => `${value}%`,
      },
    },
    scales: {
      x: {
        stacked: true,
        min: 0,
        max: 100,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        stacked: true,
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div className="chart-wrapper">
      <div className="chart-canvas">
        <Bar data={data} options={options} plugins={[ChartDataLabels]} />
      </div>
      <div className="chart-legend">
        <LegendItem label="굽네치킨" color={theme.primary} />
        <LegendItem label="교촌치킨" color={theme.primaryDarker} />
        <LegendItem label="bhc" color={theme.primaryAccent} />
      </div>
    </div>
  );
}

function LegendItem({ label, color }) {
  return (
    <div className="legend-item">
      <span className="color-box" style={{ backgroundColor: color }}></span>
      <span className="label-text">{label}</span>
    </div>
  );
}
