import React from 'react';
import CompanyReference from './CompanyReference';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../../recoil/atom';

const GoobneReference = () => {
  const theme = useRecoilValue(themeState);

  const goobneData = {
    name: '굽네',
    color: theme.primary,
    rankInfo: [
      '약 3,500억 원으로 5위'
    ],
    marketTrends: [
      '굽네치킨은 건강 메뉴 확대로 소비층 확장 중'
    ],
    keyProducts: [
      '치킨 8종류: 오리지널, 고추바사삭, 볼케이노, 갈비천왕, 양념히어로, 남해마늘바사삭, 반반옵션',
      '피자 4종류: 바질&토마토, 스윗콘치즈, 페퍼로니시카고, 시카고딥디쉬',
      '사이드 3종류: 웨지감자, 에그타르트, 매콤치즈 소떡소떡',
      '기타: 소스 추가, 치트킹'
    ],
    salesData: {
      items: [
        {
          department: '국내 프랜차이즈',
          products: '원/부자재\n(육계, 소스, 전용유, 치킨무 등)',
          usage: '가공점 원/부자재\n국내 직영매장 조리 등',
          sales: '447,071',
          percentage: '93.0%'
        },
        {
          department: '글로벌 사업',
          products: '치킨메뉴, 부자재, 로열티 등',
          usage: '해외 파트너사 부자재 수출 해외 직영 매장 조리 등',
          sales: '19,407',
          percentage: '4.0%'
        },
        {
          department: '신사업\n(유통사업 및 기타)',
          products: '가공소스, 수제맥주 등',
          usage: '가공식품, 주류 등',
          sales: '14,332',
          percentage: '3.0%'
        }
      ],
      total: {
        sales: '480,810',
        percentage: '100.0%'
      }
    },
    swotAnalysis: {
      strengths: [
        '차별화된 제품: 국내 최초 오븐구이 치킨으로 기름 튀김 대비 건강한 이미지 강조',
        '혁신적 메뉴 개발: 고추바사삭 등 독특한 시즈닝 활용으로 소비자 선호도 확보',
        '마케팅 전략: SWOT, STP, 4P 분석을 통한 체계적 전략 수립'
      ],
      weaknesses: [
        '경쟁사 대비 낮은 점포 수: 교촌치킨, BHC 등 대형 프랜차이즈에 비해 시장 점유율 제한적',
        '고객 접근성: 오븐구이 방식으로 인한 조리 시간 증가 가능성'
      ],
      opportunities: [
        '건강 트렌드 활용: 웰빙 소비자층 대상 제품 확대',
        '신제품 출시: 고추바사삭 돈카츠볼 등 기존 인기 메뉴 활용한 파생 상품 개발'
      ],
      threats: [
        '경쟁사 공격적 확장: BBQ, 교촌치킨 등과의 치열한 시장 경쟁',
        '원자재 가격 변동: 닭고기 가격 상승 등 외부 요인 영향'
      ]
    }
  };

  return <CompanyReference companyData={goobneData} />;
};

export default GoobneReference; 