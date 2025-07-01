import React from 'react';
import MediaMentionChart from './MediaMentionChart';

const GoopneMediaMentionChart = () => {
  // 도넛 차트 데이터 값
  const doughnutValues = [70.36, 21.41, 5.95, 1.64, 0.63];

  // 미디어 테이블 데이터
  const mediaTableData = [
    {
      channel: '커뮤니티',
      count: '3,560',
      content: '굽네는 배달 및 포장시 치킨 한마리 주문시 콜라 1.25L 또는 사이다 1.5L를 무료로 제공하는 특별 프로모션 진행'
    },
    {
      channel: '블로그',
      count: '1,083',
      content: '간편가정식 시장의 확대에 따라 굽네의 냉동 신제품 갈비천왕 갈비밥이 관심을 받음'
    },
    {
      channel: '뉴스',
      count: '301',
      content: '굽네 공식 유튜브 채널에서 못참아 시리즈 영상은 유튜브 조회수 천만뷰를 돌파하는 마케팅 성공을 이룸'
    },
    {
      channel: '유튜브',
      count: '83',
      content: '굽네는 유튜브를 통해 굽네 나를 위한 선물이라는 콘셉트의 다양한 컨텐츠 소비자들의 참여를 유도'
    },
    {
      channel: 'X(트위터)',
      count: '32',
      content: '굽네 로제떡볶이의 실제 떡볶이보다 닭고기가 많다는 긍정적인 평가와 로제소스의 맛에 대한 호평'
    }
  ];

  return <MediaMentionChart brandName="굽네" doughnutValues={doughnutValues} mediaTableData={mediaTableData} />;
};

export default GoopneMediaMentionChart; 