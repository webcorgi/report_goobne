import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useRecoilState } from 'recoil';
import { themeState } from '../../../recoil/atom';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChartGoopne = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const data = {
    labels: ['커뮤니티', '블로그', '뉴스', '유튜브', 'X(트위터)'],
    datasets: [
      {
        data: [20.98, 21.41, 25.95, 21.64, 20.63],
        backgroundColor: [
          '#F26C23', // 주황색 (굽네치킨)
          '#FFB84D', // 옐로우
          '#7CB342', // 그린  
          '#42A5F5', // 블루
          '#9E9E9E'  // 회색
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
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
    { label: '커뮤니티', color: '#F26522' },
    { label: '블로그', color: '#FFB448' },
    { label: '뉴스', color: '#A7B100' },
    { label: '유튜브', color: '#4AB88D' },
    { label: 'X(트위터)', color: '#249C8F' },
  ];

  return (
    <div style={{ minWidth: '150px', textAlign: 'center', padding: '10px 0'}}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
        {/* 차트 영역 */}
        <div style={{ position: 'relative', height: '108px', width: '100px', flexShrink: 0 }}>
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
            굽네
          </div>
        </div>

        {/* 범례 영역 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start', width:'150px', padding:0 }}>
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

export default PieChartGoopne; 