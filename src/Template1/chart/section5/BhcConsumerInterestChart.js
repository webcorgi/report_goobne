import React from 'react';
import ConsumerInterestChart from '../common/ConsumerInterestChart';

const BhcConsumerInterestChart = () => {
  const labels = ['치킨', 'bhc치킨', '피자', '교촌', '스타벅스', '커피', '맥도날드', '프랜차이즈', '투썸', '닭가슴살'];
  const data = [5036, 3983, 3770, 3712, 3666, 3653, 3607, 3594, 3582, 3580];
  const analysisText = 'BHC치킨 관련 댓글에서는 치킨을 중심으로 피자, 떡볶이, 커피 등 다양한 메뉴와 브랜드가 함께 언급되며, 복합적인 외식 경험과 브랜드 간 비교, 창업에 대한 관심이 두드러집니다. 이는 BHC가 메뉴 다변화와 프랜차이즈 확장, 소비자 경험 혁신을 통해 치킨 시장에서 강한 경쟁력을 유지하고 있음을 보여줍니다.';

  return (
    <ConsumerInterestChart
      brandName="BHC"
      labels={labels}
      data={data}
      analysisText={analysisText}
    />
  );
};

export default BhcConsumerInterestChart; 