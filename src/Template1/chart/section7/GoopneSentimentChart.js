import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import SentimentAnalysisChart from './SentimentAnalysisChart';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const GoopneSentimentChart = () => {
  // 도넛 차트 데이터 정의
  const doughnutData = {
    datasets: [
      {
        data: [78.46, 3.62, 17.92]
      },
    ],
  };

  // 일별 감성 언급량 추이 데이터
  const dailySentimentData = [
    { date: '03월 10일', positive: 60.66, negative: 18.86, neutral: 20.48 },
    { date: '03월 11일', positive: 51.83, negative: 19.83, neutral: 28.33 },
    { date: '03월 12일', positive: 50.81, negative: 19.51, neutral: 29.68 },
    { date: '03월 13일', positive: 73.94, negative: 3.66, neutral: 22.40 },
    { date: '03월 14일', positive: 55.00, negative: 18.84, neutral: 26.16 },
    { date: '03월 15일', positive: 57.14, negative: 19.00, neutral: 23.86 },
    { date: '03월 16일', positive: 55.87, negative: 19.05, neutral: 25.09 },
  ];
  
  // 분석 항목
  const analysisList = [
    "굽네치킨에 대한 가장 긍정적인 댓글은 3월 13일(73.94%), 가장 부정적인 댓글은 3월 11일(19.83%)",
    "3/13 브랜드 평판 분석에서 3위 차지 및 굽네 플레이타운 성과에 대해 긍정 이미지 강화",
    "경쟁사 비해 부정적 감정은 2024년 정치인 관련 논란 및 2018년 부적절한 광고 영향"
  ];
  
  // 키워드 정의
  const positiveKeywords = ["높다", "다양한", "편안한", "좋다"];
  const negativeKeywords = ["부담"];
  const neutralKeywords = ["평범한"];

  return (
    <SentimentAnalysisChart 
      title="굽네"
      doughnutData={doughnutData}
      dailySentimentData={dailySentimentData}
      analysisList={analysisList}
      positiveKeywords={positiveKeywords}
      negativeKeywords={negativeKeywords}
      neutralKeywords={neutralKeywords}
      positivePercentage={78.46}
      negativePercentage={3.62}
      neutralPercentage={17.92}
    />
  );
};

export default GoopneSentimentChart; 