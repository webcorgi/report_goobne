import React from 'react';
import MediaMentionChart from './MediaMentionChart';

const KyochonMediaMentionChart = () => {
  // 도넛 차트 데이터 값
  const doughnutValues = [93.71, 5.68, 0.54, 0.07, 0.0];

  // 미디어 테이블 데이터
  const mediaTableData = [
    {
      channel: '커뮤니티',
      count: '4,446',
      content: '배달비 인상에 대한 불만, 제품 맛에 대한 평가, 새로운 포장 디자인 그리고 광고 모델 (변우석)에 대한 긍정적 반응, 홍보'
    },
    {
      channel: '블로그',
      count: '1,278',
      content: '변우석의 교촌치킨 광고 모델 활동이 주목. 혜화의 도리안 그레이, 동대구역의 서른네, 삼성역의 플래튜드 등의 한 경험을 제공하는 음식점에 대한 관심 집중'
    },
    {
      channel: '뉴스',
      count: '249',
      content: '교촌치킨과 코카콜라는 전략적 업무협약을 체결하고, 교촌치킨 신메뉴와 코카콜라 세트 구매 시 3,000원 할인 혜택을 제공하는 프로모션을 시작'
    },
    {
      channel: '유튜브',
      count: '25',
      content: '교촌치킨은 2025년 1월 중순 1인 가구와 혼술족을 겨냥한 싱글 시리즈를 출시 홍보'
    },
    {
      channel: 'X(트위터)',
      count: '77',
      content: '교촌치킨은 9년 만에 배우 변우석을 브랜드 모델로 발탁하여 교촌옥수수 신메뉴 홍보'
    }
  ];

  return <MediaMentionChart brandName="교촌" doughnutValues={doughnutValues} mediaTableData={mediaTableData} />;
};

export default KyochonMediaMentionChart; 