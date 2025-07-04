import React, { useEffect, useState } from 'react';
import newsLogo from '../../img/placeholder.svg';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../recoil/atom';
import HighlightedLineChart from "../chart/section4/HighlightedLineChart";
import PieChartGoopne from '../chart/section4/PieChartGoopne';
import LineChartGoopne from '../chart/section4/LineChartGoopne';
import PieChartKyochon from '../chart/section4/PieChartKyochon';
import LineChartKyochon from '../chart/section4/LineChartKyochon';

export default function Section4_2() {
    return (
        <div className="page-section">
            <h4 className="h4 page-title">
                <span className="num">II.</span>
                경쟁사 인식 분석

                <h5 class="page-sub-title">2. 매체별 인사이트</h5>

                <p className="page-title-date">
                    <b>분석일자</b>
                    <span>2025.06.16 ~ 2025.06.22</span>
                </p>
            </h4>

            <div className="h15"></div>
            <div className="issue-chart-section othermargin2">
                <div className="issue-chart-section-inner">
                    <div className="issue-title">
                    감성 언급량 구성 비율 및 추이
                    </div>
                    <div className='insite-chart-wrap'>
                        <PieChartGoopne />
                        <LineChartGoopne />
                    </div>
                </div>
            </div>
            <div className="table-insite">
                <table>
                    <colgroup>
                        <col width="15%"/>
                        <col width="15%"/>
                        <col width="70%"/>
                    </colgroup>
                    <tr>
                        <th>기간</th>
                        <th>언급량</th>
                        <th>주요 내용</th>
                    </tr>
                    <tr>
                        <td>커뮤니티</td>
                        <td>1,669</td>
                        <td><p>주로 굽네치킨의 오븐바사삭 할인 정보,고푸바사삭 메뉴 선호</p></td>
                    </tr>
                    <tr>
                        <td>블로그</td>
                        <td>509</td>
                        <td><p>오븐에서 구워 담백한 제품 특징, 소비자들의 긍정적인 경험 및 건강한 치킨 섭취 방법이 구운치킨 선택과 소스로 조절 관련 내용</p></td>
                    </tr>
                    <tr>
                        <td>뉴스</td>
                        <td>141</td>
                        <td><p>로드FC 정문홍 회장의 아시안게임 MMA 금메달 포상금 계획 발표, 그리고 굽네치킨의 장기 근속 및 출산 장려 중심 직원 복지 정책</p></td>
                    </tr>
                    <tr>
                        <td>유튜브</td>
                        <td>39</td>
                        <td><p>한국농어촌공사의 백설기데이 이벤트에 굽네치킨을 경품 제공, ROAD FC와의 협업 및 홍보 활동 소개,  여행 중 굽네치킨의 고추바사삭 순살 음식과 여행 소개</p></td>
                    </tr>
                    <tr>
                        <td>트위터</td>
                        <td>890</td>
                        <td><p>굽네치킨 창업주 홍철호의 위증 논란과 관련된 정치적 이슈, 굽네치킨의 신메뉴 '남해마늘 바사삭'에 대한 소비자의 관심</p></td>
                    </tr>
                </table>
            </div>


            {/* 2 */}
            <div className="h10"></div>
            <div className="issue-chart-section othermargin2">
                <div className="issue-chart-section-inner">
                    <div className="issue-title">
                    감성 언급량 구성 비율 및 추이
                    </div>
                    <div className='insite-chart-wrap'>
                        <PieChartKyochon />
                        <LineChartKyochon />
                    </div>
                </div>
            </div>
            <div className="table-insite">
                <table>
                    <colgroup>
                        <col width="15%"/>
                        <col width="15%"/>
                        <col width="70%"/>
                    </colgroup>
                    <tr>
                        <th>기간</th>
                        <th>언급량</th>
                        <th>주요 내용</th>
                    </tr>
                    <tr>
                        <td>커뮤니티</td>
                        <td>1,669</td>
                        <td><p>배달비 인상에 대한 불만, 제품 맛에 대한 평가, 새로운 포장 디자인 그리고 광고 모델 (변우석)에 대한 긍정적 반응, 홍보</p></td>
                    </tr>
                    <tr>
                        <td>블로그</td>
                        <td>509</td>
                        <td><p>변우석의교촌치킨 광고 모델 활동이 주목 .혜화의 도리안 그레이, 동대문역 의 서르네, 삼성역의 플랜튜드 독특한 경험을 제공하는 음식점에 대한 관심 집중</p></td>
                    </tr>
                    <tr>
                        <td>뉴스</td>
                        <td>141</td>
                        <td><p>교촌치킨과 코카콜라는 전략적 업무협약을 체결하고, 교촌치킨 신메뉴와 코카콜라 세트 구매 시 3,000원 할인 혜택을 제공하는 프로모션을 시작</p></td>
                    </tr>
                    <tr>
                        <td>유튜브</td>
                        <td>39</td>
                        <td><p>교촌치킨은2025년 1월 중순 1인 가구와 밥 혼술족을 겨냥한 싱글시리즈 를 출시 홍보</p></td>
                    </tr>
                    <tr>
                        <td>트위터</td>
                        <td>890</td>
                        <td><p>굽네치킨 창업주 홍철호의 위증 논란과 관련된 정치적 이슈, 굽네치킨의 신메뉴 남해마늘 바사삭 에대한 소비자의 관심</p></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}