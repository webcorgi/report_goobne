import React from 'react';
import ConsumerInterestChart from '../common/ConsumerInterestChart';

const GoopneConsumerChart = () => {
  const labels = ['굽네', '치킨', '피자', '카페', '프랜차이즈', '영업점', '음식점', '이디야', '맛집', '맥도날드'];
  const data = [2358, 2333, 1677, 1609, 1565, 1546, 1545, 1541, 1532, 1531];
  const analysisText = '고객 댓글에서는 굽네와 다양한 메뉴가 자주 언급되며, 이디야커피나 맘스터치 같은 인근 매장 및 경쟁 브랜드와의 연계 경험도 두드러집니다. 제품과 장소 키워드가 함께 등장하는 경우가 많아, 고객들이 메뉴의 다양성뿐만 아니라 브랜드 간의 시너지와 편의성, 그리고 맛과 경험을 비교하는 데 큰 가치를 두고 있음을 알 수 있습니다.';

  return (
    <ConsumerInterestChart
      brandName="굽네"
      labels={labels}
      data={data}
      analysisText={analysisText}
    />
  );
};

export default GoopneConsumerChart; 