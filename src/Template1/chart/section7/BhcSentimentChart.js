import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import SentimentAnalysisChart from './SentimentAnalysisChart';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const BhcSentimentChart = () => {
  // 도넛 차트 데이터 정의
  const doughnutData = {
    datasets: [
      {
        data: [79.57, 3.50, 16.93]
      },
    ],
  };

  // 일별 감성 언급량 추이 데이터
  const dailySentimentData = [
    { date: '03월 10일', positive: 80.68, negative: 3.04, neutral: 16.28 },
    { date: '03월 11일', positive: 84.78, negative: 2.51, neutral: 12.70 },
    { date: '03월 12일', positive: 77.48, negative: 2.53, neutral: 19.98 },
    { date: '03월 13일', positive: 73.94, negative: 3.66, neutral: 22.40 },
    { date: '03월 14일', positive: 80.18, negative: 4.13, neutral: 15.69 },
    { date: '03월 15일', positive: 73.23, negative: 4.91, neutral: 21.86 },
    { date: '03월 16일', positive: 68.28, negative: 8.74, neutral: 22.98 },
  ];
  
  // 분석 항목
  const analysisList = [
    "가장 긍정적인 댓글은 3월 11일(84.78%), 가장 부정적인 댓글은 3월 16일(8.74%)에 기록",
    "BHC가 3월 초 '과잉장'이라는 큰 장의 바삭함을 자랑하는 신메뉴를 출시",
    "BHC '마법블 후라이크' 제품 관련 발표로 인한 품질 이슈는 소비자 신뢰를 크게 하락"
  ];
  
  // 키워드 정의
  const positiveKeywords = ["다양한", "맛있는", "안정적", "성공적"];
  const negativeKeywords = ["바삭하다"];

  return (
    <SentimentAnalysisChart 
      title="BHC"
      doughnutData={doughnutData}
      dailySentimentData={dailySentimentData}
      analysisList={analysisList}
      positiveKeywords={positiveKeywords}
      negativeKeywords={negativeKeywords}
      positivePercentage={79.57}
      negativePercentage={3.50}
      neutralPercentage={16.93}
    />
  );
};

export default BhcSentimentChart; 