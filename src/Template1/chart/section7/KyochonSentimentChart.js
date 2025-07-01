import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import SentimentAnalysisChart from './SentimentAnalysisChart';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const KyochonSentimentChart = () => {
  // 도넛 차트 데이터 정의
  const doughnutData = {
    datasets: [
      {
        data: [82.99, 2.67, 14.34]
      },
    ],
  };

  // 일별 감성 언급량 추이 데이터
  const dailySentimentData = [
    { date: '03월 10일', positive: 83.17, negative: 2.54, neutral: 14.29 },
    { date: '03월 11일', positive: 86.71, negative: 1.86, neutral: 11.43 },
    { date: '03월 12일', positive: 84.32, negative: 2.70, neutral: 12.98 },
    { date: '03월 13일', positive: 78.06, negative: 3.20, neutral: 18.74 },
    { date: '03월 14일', positive: 86.87, negative: 1.27, neutral: 11.86 },
    { date: '03월 15일', positive: 74.67, negative: 6.10, neutral: 19.22 },
    { date: '03월 16일', positive: 77.12, negative: 4.51, neutral: 18.36 },
  ];
  
  // 분석 항목
  const analysisList = [
    "가장 긍정적인 댓글은 3월 14일(86.87%), 가장 부정적인 댓글은 3월 15일(6.10%)에 기록",
    "긍정적 감성은 소비자의 다변화된 입맛과 외식 트렌드를 반영해 메뉴 라인업을 확장",
    "2021년부터 지속적으로 가격 인상"
  ];
  
  // 키워드 정의
  const positiveKeywords = ["다양하다", "맛있는", "안정적", "성공적", "적극적"];

  return (
    <SentimentAnalysisChart 
      title="교촌치킨"
      doughnutData={doughnutData}
      dailySentimentData={dailySentimentData}
      analysisList={analysisList}
      positiveKeywords={positiveKeywords}
      positivePercentage={82.99}
      negativePercentage={2.67}
      neutralPercentage={14.34}
    />
  );
};

export default KyochonSentimentChart; 