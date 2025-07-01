import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../../recoil/atom';

const SentimentAnalysisChart = ({ 
  title, 
  doughnutData, 
  dailySentimentData, 
  analysisList, 
  positiveKeywords = [],
  negativeKeywords = [],
  neutralKeywords = [],
  positivePercentage,
  negativePercentage,
  neutralPercentage
}) => {
  const theme = useRecoilValue(themeState);
  
  // 테마 색상 정의
  const sentimentColors = {
    positive: {
      main: theme.positive,
      light: `${theme.positive}40`,
      text: theme.positive
    },
    negative: {
      main: theme.negative,
      light: `${theme.negative}40`,
      text: theme.negative
    },
    neutral: {
      main: theme.neutral,
      light: `${theme.neutral}40`,
      text: theme.neutral
    }
  };

  // 차트 데이터 정의 (완전히 새로 생성)
  const chartData = {
    labels: ['긍정', '부정', '중립'],
    datasets: [
    {
        data: [positivePercentage, negativePercentage, neutralPercentage],
        backgroundColor: [
            sentimentColors.positive.main,
            sentimentColors.negative.main,
            sentimentColors.neutral.main,
        ],
        borderColor: [
            sentimentColors.positive.main,
            sentimentColors.negative.main,
            sentimentColors.neutral.main,
        ],
        borderWidth: 0,
        color: '#FFFFFF',
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
      },
    ],
  };

  // 차트 옵션 정의
  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
        labels: {
          color: '#FFFFFF'
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw}%`;
          }
        },
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        titleFont: {
          size: 14,
          weight: 'bold',
        },
        bodyFont: {
          size: 13,
        },
        padding: 12,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        displayColors: true,
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
        cornerRadius: 6,
        z: 9999 // 툴팁의 z-index 높게 설정
      }
    }
  };


  return (
    <div className="sentiment-analysis-chart">
      <div className="text-label">
        {title}
      </div>
      
      <div className="sentiment-chart-row row">
        <div className="col-p35">
          <div className="category-title">감성 언급량 구성 비율</div>
          <div className="donut-chart-container" style={{height:'100px', marginTop:'5px'}}>
            <Doughnut data={chartData} options={doughnutOptions} />
            <div className="donut-chart-center">
              <div className="donut-chart-percentage" style={{ color: sentimentColors.positive.text, backgroundColor:'#ffffff'}}>
                {positivePercentage}%
              </div>
              <div className="donut-chart-label">
                긍정
              </div>
            </div>
          </div>
        </div>
        <div className="col-p65">
          <div className="category-title">감성 언급량 추이</div>
          <div>
            <div className="trend-chart-container">
              {dailySentimentData.map((day, index) => (
                <div key={index} className="trend-chart-column">
                  <div className="trend-chart-bars">
                    <div 
                      className="trend-chart-bar"
                      style={{ 
                        flex: `${day.neutral}`,
                        backgroundColor: sentimentColors.neutral.main,
                        background: `linear-gradient(to right, ${sentimentColors.neutral.main} 100%, #f8f9fa 100%)` 
                      }}
                    >
                      <span className="trend-bar-label" style={{ color: '#FFFFFF' }}>
                        {day.neutral}%
                      </span>
                    </div>
                    <div 
                      className="trend-chart-bar"
                      style={{ 
                        flex: `${day.negative}`,
                        backgroundColor: sentimentColors.negative.main,
                        background: `linear-gradient(to right, ${sentimentColors.negative.main} 100%, #f8f9fa 100%)` 
                      }}
                    >
                      <span className="trend-bar-label" style={{ color: '#FFFFFF' }}>
                        {day.negative}%
                      </span>
                    </div>
                    <div 
                      className="trend-chart-bar"
                      style={{ 
                        flex: `${day.positive}`,
                        backgroundColor: sentimentColors.positive.main,
                        background: `linear-gradient(to right, ${sentimentColors.positive.main} 100%, #f8f9fa 100%)` 
                      }}
                    >
                      <span className="trend-bar-label" style={{ color: '#FFFFFF' }}>
                        {day.positive}%
                      </span>
                    </div>
                  </div>
                  <div className="trend-date-label">{day.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Sentiment legend indicators */}
      <div className="sentiment-legend-container">
        <div className="sentiment-legend-item" style={{ 
          backgroundColor: sentimentColors.positive.light, 
          color: sentimentColors.positive.text,
          border: `1px solid ${sentimentColors.positive.main}30`
        }}>
          긍정 {positivePercentage}%
        </div>
        <div className="sentiment-legend-item" style={{ 
          backgroundColor: sentimentColors.negative.light, 
          color: sentimentColors.negative.text,
          border: `1px solid ${sentimentColors.negative.main}30`
        }}>
          부정 {negativePercentage}%
        </div>
        <div className="sentiment-legend-item" style={{ 
          backgroundColor: sentimentColors.neutral.light, 
          color: sentimentColors.neutral.text,
          border: `1px solid ${sentimentColors.neutral.main}30`
        }}>
          중립 {neutralPercentage}%
        </div>
      </div>
      
      {/* Analysis section */}
      <div className="sentiment-analysis-section">
        {/* Analysis points */}
        <ul className="sentiment-analysis-list">
          {analysisList.map((item, index) => (
            <li key={index} className="sentiment-analysis-item">
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        {/* Keywords section */}
        <div className="sentiment-keywords-section">
          <p className="sentiment-keywords-title">
            긍부정어 키워드 :
          </p>
          <div className="sentiment-keywords-container">
            {positiveKeywords.map((keyword, index) => (
              <div key={`positive-${index}`} className="sentiment-keyword" style={{ 
                backgroundColor: sentimentColors.positive.light,
                color: sentimentColors.positive.text,
                border: `1px solid ${sentimentColors.positive.main}30`
              }}>
                {keyword}
              </div>
            ))}
            {negativeKeywords.map((keyword, index) => (
              <div key={`negative-${index}`} className="sentiment-keyword" style={{ 
                backgroundColor: sentimentColors.negative.light,
                color: sentimentColors.negative.text,
                border: `1px solid ${sentimentColors.negative.main}30`
              }}>
                {keyword}
              </div>
            ))}
            {neutralKeywords.map((keyword, index) => (
              <div key={`neutral-${index}`} className="sentiment-keyword" style={{ 
                backgroundColor: sentimentColors.neutral.light,
                color: sentimentColors.neutral.text,
                border: `1px solid ${sentimentColors.neutral.main}30`
              }}>
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysisChart; 