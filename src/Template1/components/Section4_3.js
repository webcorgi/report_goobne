import React, { useEffect, useState } from 'react';
import newsLogo from '../../img/placeholder.svg';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../recoil/atom';
import PieChartBhc from '../chart/section4/PieChartBhc';
import LineChartBhc from '../chart/section4/LineChartBhc';

export default function Section4_3() {
    return (
        <div className="page-section">
            <h4 className="h4 page-title">
                <span className="num">II.</span>
                경쟁사 인식 분석

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
                        <PieChartBhc />
                        <LineChartBhc />
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
                        <td><p>불광NC백화점과 인천 홈플러스  특수«권에 디저트 카페를 입점시키는 것을 추천, 다양한 프랜차이즈 창업 및 양도양수 정보를 공유</p></td>
                    </tr>
                    <tr>
                        <td>블로그</td>
                        <td>509</td>
                        <td><p>충주 탄금한우곱창과 BHC 치킨의 신메뉴 콰삭킹 에 대한 긍정적으로 평가,  콰삭킹 은 바삭한 식감 좋지만 뿌링클라이스는 정적 평가</p></td>
                    </tr>
                    <tr>
                        <td>뉴스</td>
                        <td>141</td>
                        <td><p>소비기한이 지난 원료를 사용한 제품들이 판매 중단 및 회수 조치. BHC의 마법클 후레이크 도 포함</p></td>
                    </tr>
                    <tr>
                        <td>유튜브</td>
                        <td>39</td>
                        <td><p>BHC의 신메뉴 콰삭킹홍보, 쌀, 옥수수, 감자로 만든 크리스피 크럼블과  독보적인 튀김 기술을 사용</p></td>
                    </tr>
                    <tr>
                        <td>트위터</td>
                        <td>890</td>
                        <td><p>BHC는 2025년 첫 신메뉴 콰삭킹, 골드킹 콤보 는 숙성 간장과 꿀로 만든 치킨 출시 홍보</p></td>
                    </tr>
                </table>
            </div>

        </div>
    );
}