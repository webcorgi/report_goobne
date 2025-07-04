import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useRecoilState } from 'recoil';
import { themeState } from '../../../../recoil/atom';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChartBhcOpinion = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const data = {
    labels: ['긍정', '부정', '중립'],
    datasets: [
      {
        data: [62.85, 8.47, 28.68],
        backgroundColor: [
          '#4AB88D', // 긍정 (초록색)
          '#E84E3D', // 부정 (빨간색)
          '#FFB448'  // 중립 (주황색)
        ],
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
        anchor: 'start',
        offset: 10,
        formatter: (value) => `${value.toFixed(2)}%`,
        display: true,
        clamp: true,
      }
    },
  };

  // Custom legend below chart
  const legendItems = [
    { label: '긍정', color: '#4AB88D' },
    { label: '부정', color: '#E84E3D' },
    { label: '중립', color: '#FFB448' },
  ];

  return (
    <div style={{ minWidth: '195px',textAlign: 'center', padding: '10px 0'}}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
        {/* 차트 영역 */}
        <div style={{ position: 'relative', height: '120px', width: '110px', flexShrink: 0 }}>
          <Pie data={data} options={options} plugins={[ChartDataLabels]} />
          {/* 중앙 텍스트 */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#495056',
            pointerEvents: 'none',
            zIndex: 10
          }}>
            BHC
          </div>
        </div>

        {/* 범례 영역 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start', width:'195px', padding:0 }}>
          {legendItems.map((item, idx) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', fontSize: 8, color: '#495056', fontWeight: 400 }}>
              <span style={{ display: 'inline-block', width: 8, height: 8, background: item.color, marginRight: 6 }}></span>
              <span style={{fontSize:8}}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChartBhcOpinion; 