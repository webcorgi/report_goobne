import React from 'react';
import ConsumerInterestChart from '../common/ConsumerInterestChart';

const KyochonConsumerInterestChart = () => {
  const labels = ['교촌', '치킨', '프랜차이즈', '맥주', '카페', '커피', '정답', '피자', '롯데리아', '맥도날드'];
  const data = [6051, 6013, 4304, 4239, 4239, 4219, 4214, 4165, 4165, 4163];
  const analysisText = '교촌치킨 관련 댓글에서는 치킨을 중심으로 떡볶이, 피자, 커피 등 다양한 메뉴와 브랜드가 함께 언급되며, 복합적인 외식 경험과 브랜드 간 비교, 그리고 창업에 대한 관심이 두드러집니다. 이는 교촌치킨이 단순 치킨 브랜드를 넘어 다양한 메뉴와 외식 트렌드, 창업 시장에서 강한 영향력을 갖고 있음을 보여줍니다.';

  return (
    <ConsumerInterestChart
      brandName="교촌치킨"
      labels={labels}
      data={data}
      analysisText={analysisText}
    />
  );
};

export default KyochonConsumerInterestChart; 