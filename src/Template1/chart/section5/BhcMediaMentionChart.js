import React from 'react';
import MediaMentionChart from './MediaMentionChart';

const BhcMediaMentionChart = () => {
  // 도넛 차트 데이터 값
  const doughnutValues = [63.14, 23.69, 4.69, 8.08, 0.42];

  // 미디어 테이블 데이터
  const mediaTableData = [
    {
      channel: '커뮤니티',
      count: '4,233',
      content: '불광NC백화점과 인천 홈플러스 특수상권에 디저트 카페를 입점시키는 것을 주천, 다양한 프랜차이즈 창업 및 양도양수 정보를 공유'
    },
    {
      channel: '블로그',
      count: '1,588',
      content: '충주 탁구한우공장과 BHC 치킨의 신메뉴 과삭킹에 대한 긍정적으로 평가, 과삭킹은 바삭한 식감 좋지만 뿌링클라이스는 부정적 평가'
    },
    {
      channel: '뉴스',
      count: '314',
      content: '소비기한이 지난 원료를 사용한 제품들이 판매 중단 및 회수 조치. BHC의 마법클 후레이크도 포함'
    },
    {
      channel: '유튜브',
      count: '28',
      content: 'BHC의 신메뉴 과삭킹 홍보, 쌀, 옥수수, 감자로 만든 크리스피 크럼블과 독보적인 튀김 기술을 사용'
    },
    {
      channel: 'X(트위터)',
      count: '542',
      content: 'BHC는 2025년 첫 신메뉴 과삭킹, 골드킹 콤보는 숙성 간장과 꿀로 만든 치킨 출시 홍보'
    }
  ];

  return <MediaMentionChart brandName="bhc" doughnutValues={doughnutValues} mediaTableData={mediaTableData} />;
};

export default BhcMediaMentionChart; 