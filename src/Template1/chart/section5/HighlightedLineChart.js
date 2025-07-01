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

export default function HighlightBoxChart() {
  const [theme, setTheme] = useRecoilState(themeState);
  const labels = [
    '2025.03.10',
    '2025.03.11',
    '2025.03.12',
    '2025.03.13',
    '2025.03.14', // ✅ 여기를 강조
    '2025.03.15',
    '2025.03.16',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: '굽네치킨',
        data: [1000, 2000, 2372, 1800, 1700, 1500, 1400],
        borderColor: theme.primary,
        backgroundColor: theme.primary,
        tension: 0.4,
        pointRadius: 4,
      },
      {
        label: '교촌치킨',
        data: [4000, 4200, 6075, 5800, 6000, 4900, 4600],
        borderColor: theme.primaryDarker,
        backgroundColor: theme.primaryDarker,
        tension: 0.4,
        pointRadius: 4,
      },
      {
        label: 'bhc',
        data: [3000, 3100, 4000, 3900, 4500, 6705, 4200],
        borderColor: theme.primaryAccent,
        backgroundColor: theme.primaryAccent,
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
          }
        },
      },
      annotation: {
        annotations: {
          highlightBox: {
            type: 'box',
            xMin: '2025.03.14',
            xMax: '2025.03.14', // ✅ 한 날짜를 감싸는 사각형
            backgroundColor: 'rgba(255, 99, 132, 0.08)',
            borderColor: 'rgba(118, 161, 255, 0.1)',
            borderWidth: 50,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#555',
        },
      },
      y: {
        grid: {
          color: '#eee',
        },
        ticks: {
          color: '#555',
        },
        
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '200px' }}>
      <Line data={data} options={options} />
    </div>
  );
}
