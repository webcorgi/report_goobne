import React from 'react';
import CompanyReference from './CompanyReference';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../../recoil/atom';
const BHCReference = () => {
  const theme = useRecoilValue(themeState);

  const bhcData = {
    name: 'BHC',
    color: theme.primary,
    rankInfo: [
      '약 5,356억 원으로 1위'
    ],
    marketTrends: [
      '프리미엄/저가 전략으로 시장 다각화 중',
    ],
    keyProducts: [
      '후라이드 시리즈: 윙, 콤보, 스틱, HOT후라이드',
      '특색메뉴 7종류: 뿌링클, 맛초킹, 골드킹, 레드킹, 양념치킨, 더블팝 순살 후라이드, 바삭클순살',
      '사이드&소스 7종류: 치즈볼, 뿌링클 치즈볼, 말린 오징어, 모차렐라스틱, 떡볶이, 카준 감자, 소스',
      '세트&기타: 콜팝 치민, 콤보 세트, 퀘사디아스',
    ],
    salesData: {
      items: [
        {
          department: '국내 프랜차이즈',
          products: '원/부자재 (육계, 소스, 전용유, 치킨무 등)',
          usage: '가맹점 원/부자재 국내 직영 매장 조리 등',
          sales: '447.071',
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
        '대형 프랜차이즈 브랜드: 시장 인지도와 네트워크 기반',
        '점포 운영 경험: 장기간 축적된 프랜차이즈 운영 노하우',
      ],
      weaknesses: [
        '폐점률 높음: 교촌치킨 대비 10배 이상 높은 폐점률(5.1 2018년 기준)',
        '점포당 매출 저조: 교촌치킨 대비 낮은 매출 효율성',
      ],
      opportunities: [
        '신제품 개발: 기존 메뉴 개선 또는 신규 트렌드 반영',
        '온라인 주문 시스템 강화:배달 시장 확대',
      ],
      threats: [
        '교촌치킨의 시장 지배력: 업계 1위의 교촌치킨과의 경쟁 압력',
        '원자재 가격 변동: 닭고기 가격 상승 등 외부 요인 영향',
      ]
    }
  };

  return <CompanyReference companyData={bhcData} />;
};

export default BHCReference; 