import React, { useState } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LineElement, PointElement, LinearScale, Tooltip, Legend } from 'chart.js';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../../recoil/atom';

ChartJS.register(ArcElement, CategoryScale, LineElement, PointElement, LinearScale, Tooltip, Legend);

const MediaMentionChart = ({ brandName, doughnutValues, mediaTableData }) => {
  const theme = useRecoilValue(themeState);
  
  // 각 채널의 가시성 상태를 관리하는 state
  const [channelVisibility, setChannelVisibility] = useState({
    '커뮤니티': true,
    '블로그': true,
    '뉴스': true,
    '유튜브': true,
    'X(트위터)': true,
    '네이버 카페': true,
    '다음 카페': true,
    '인스타그램': true,
    '네이버 뉴스': true,
    '다음 뉴스': true,
    '언론사 뉴스': true
  });

  // 채널 가시성 토글 함수
  const toggleChannel = (channel) => {
    setChannelVisibility(prev => ({
      ...prev,
      [channel]: !prev[channel]
    }));
  };

  // 도넛 차트 데이터 - 채널 가시성에 따라 필터링
  const doughnutData = {
    labels: ['커뮤니티', '블로그', '뉴스', '유튜브', 'X(트위터)'].filter(label => channelVisibility[label]),
    datasets: [
      {
        data: doughnutValues.filter((_, idx) => 
          channelVisibility[['커뮤니티', '블로그', '뉴스', '유튜브', 'X(트위터)'][idx]]
        ),
        backgroundColor: [
          theme.primary, // 커뮤니티
          theme.skyBlue1, // 블로그
          theme.skyBlue2, // 뉴스
          theme.primaryAccent, // 유튜브
          theme.darkBlueAccent // X(트위터)
        ].filter((_, idx) => 
          channelVisibility[['커뮤니티', '블로그', '뉴스', '유튜브', 'X(트위터)'][idx]]
        ),
        borderWidth: 0,
        cutout: '0%',
        datalabels: {
          color: '#FFFFFF',
          font: {
            size: 12,
            weight: 'bold'
          },
          formatter: (value) => {
            return `${value}%`;
          }
        },
      }
    ]
  };

  // 도넛 차트 옵션
  const doughnutOptions = {
    cutout: '20%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    }
  };

  // 채널별 데이터 정의
  const channelData = {
    'X(트위터)': {
      data: [10, 9, 8, 7, 6, 9, 11],
      color: theme.darkBlueAccent
    },
    '커뮤니티': {
      data: [35, 39, 37, 32, 36, 40, 41],
      color: theme.primary
    },
    '네이버 카페': {
      data: [65, 68, 67, 60, 65, 75, 78],
      color: theme.skyBlue1
    },
    '다음 카페': {
      data: [25, 27, 30, 29, 35, 33, 31],
      color: theme.skyBlue2
    },
    '인스타그램': {
      data: [15, 16, 15, 14, 17, 18, 19],
      color: theme.primaryAccent
    },
    '유튜브': {
      data: [8, 7, 9, 8, 10, 11, 12],
      color: theme.darkBlue
    },
    '블로그': {
      data: [45, 43, 42, 40, 45, 47, 49],
      color: theme.skyBlue1
    },
    '네이버 뉴스': {
      data: [20, 18, 19, 17, 19, 21, 22],
      color: theme.primary
    },
    '다음 뉴스': {
      data: [12, 13, 12, 11, 14, 15, 16],
      color: theme.skyBlue2
    },
    '언론사 뉴스': {
      data: [18, 19, 20, 19, 22, 24, 25],
      color: theme.primaryAccent
    }
  };

  // 라인 차트 데이터 - 채널 가시성에 따라 필터링
  const lineData = {
    labels: ['2025.03.10', '2025.03.11', '2025.03.12', '2025.03.13', '2025.03.14', '2025.03.15', '2025.03.16'],
    datasets: Object.entries(channelData)
      .filter(([channel]) => channelVisibility[channel])
      .map(([channel, config]) => ({
        label: channel,
        data: config.data,
        borderColor: config.color,
        backgroundColor: config.color,
        tension: 0.4,
        pointRadius: 4,
      }))
  };

  // 라인 차트 옵션
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        display: false
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  // 채널 색상 및 데이터 정의
  const channelColors = {
    '커뮤니티': {
      main: theme.primary,
      pastel: `${theme.primary}26`,
      text: theme.primaryDarker
    },
    '블로그': {
      main: theme.skyBlue1,
      pastel: `${theme.skyBlue1}26`,
      text: theme.darkBlue
    },
    '뉴스': {
      main: theme.skyBlue2,
      pastel: `${theme.skyBlue2}26`,
      text: theme.darkBlueAccent
    },
    '유튜브': {
      main: theme.primaryAccent,
      pastel: `${theme.primaryAccent}26`,
      text: theme.primaryDarker
    },
    'X(트위터)': {
      main: theme.darkBlueAccent,
      pastel: `${theme.darkBlueAccent}26`,
      text: theme.darkBlue
    }
  };

  return (
    <div className="media-mention-chart">
      <div className="chart-row">
        <div className="chart-column chart-column-doughnut">
          <div className="donut-chart-container">
            <h3 className="chart-title">{brandName}</h3>
            <div style={{ height: '120px', width: '150px', margin: '0 auto' }}>
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </div>
        </div>
        <div className="chart-column chart-column-line">
          <div style={{ height: '120px', marginBottom: '10px' }}>
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>
      </div>

      {/* 채널 토글을 위한 범례 */}
      <div className="chart-legend-container">
        <div className="chart-legend interactive">
          <div className="legend-row">
            {Object.entries(channelData).slice(0, 5).map(([channel, config]) => (
              <div 
                key={channel} 
                className={`legend-item ${channelVisibility[channel] ? 'active' : 'inactive'}`}
                onClick={() => toggleChannel(channel)}
              >
                <span 
                  className="legend-color" 
                  style={{backgroundColor: config.color}}
                ></span>
                <span className="legend-label">{channel}</span>
              </div>
            ))}
          </div>
          <div className="legend-row">
            {Object.entries(channelData).slice(5).map(([channel, config]) => (
              <div 
                key={channel} 
                className={`legend-item ${channelVisibility[channel] ? 'active' : 'inactive'}`}
                onClick={() => toggleChannel(channel)}
              >
                <span 
                  className="legend-color" 
                  style={{backgroundColor: config.color}}
                ></span>
                <span className="legend-label">{channel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {mediaTableData && (
        <div className="media-table">
          <div className="media-table-row header">
            {Object.keys(channelColors).map(channel => (
              <div 
                key={channel} 
                className="media-cell" 
                style={{ 
                  backgroundColor: channelColors[channel].pastel,
                  color: channelColors[channel].text,
                  fontWeight: '600'
                }}
              >
                {channel}
              </div>
            ))}
          </div>
          <div className="media-table-row data">
            {mediaTableData.map((item, index) => (
              <div 
                key={index}
                className="media-cell" 
                style={{ 
                  backgroundColor: channelColors[item.channel].pastel,
                  borderLeft: `1px solid ${channelColors[item.channel].main}`
                }}
              >
                <div className="mention-count" style={{ color: channelColors[item.channel].text }}>
                  언급량: {item.count}
                </div>
                <div className="mention-content">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaMentionChart; 