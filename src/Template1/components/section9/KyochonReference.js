import React from 'react';
import CompanyReference from './CompanyReference';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../../recoil/atom';

const KyochonReference = () => {
  const theme = useRecoilValue(themeState);
  const kyochonData = {
    name: '교촌',
    color: theme.primary,
    rankInfo: [
      '약 4,200억 원으로 3위'
    ],
    marketTrends: [
      '교촌치킨은 간장치킨으로 차별화된 경쟁력을 유지',
    ],
    keyProducts: [
      '치킨 5종류: 교촌시리즈, 정보윙, 후라이드, 순살, 옥수수 시리즈',
      '사이드 5종류: 웨지감자, 교촌무, 칩카사바, 쫀득한꽈배기, 옥수수볼',
      '세트: 시그니처세트, 점보윙+옥수수세트'
    ],
    salesData: {
      items: [
        {
          department: '국내 프랜차이즈',
          products: '원/부자재 (육계, 소스, 전용유, 치킨무 등)',
          usage: '가맹점 원/부자재 국내 직영 매장 조리 등',
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
          department: '신사업 (유통사업 및 기타)',
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
        '업계 최고 점포당 매출:6억 2,000만원(2018년 기준), 폐점률 0.5%로 안정적 운영',
        '브랜드 파워: 30년 역사의 업계 1위 이미지',
        '코로나19 대응력: 배달 비중 높아 타격 최소화',
      ],
      weaknesses: [
        '고가격 정책: 경쟁사 대비 가격 경쟁력 부족',
        'SLOW-FOOD 시스템: 주문 대기 시간 증가 가능성',
      ],
      opportunities: [
        '글로벌 시장 진출: 전통 간장소스 활용해 해외 진출 모색',
        '중대형 매장 확대: 점포당 매출 증대를 위한 전략'
      ],
      threats: [
        'BBQ, BHC 등 경쟁사: 시장 점유율 경쟁 심화',
        '조류독감 등 외부 위협: 닭고기 소비 감소 리스크',
      ]
    }
  };

  return <CompanyReference companyData={kyochonData} />;
};

export default KyochonReference; 