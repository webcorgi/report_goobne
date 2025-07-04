import React, { useEffect, useState } from 'react';
import PieChartGoopneOpinion from '../chart/section4/publicOpinion/PieChartGoopneOpinion';
import SentimentBarChart from '../chart/section4/publicOpinion/SentimentBarChart';
import PieChartKyochonOpinion from '../chart/section4/publicOpinion/PieChartKyochonOpinion';
import SentimentBarChartKyochon from '../chart/section4/publicOpinion/SentimentBarChartKyochon';
import PieChartBhcOpinion from '../chart/section4/publicOpinion/PieChartBhcOpinion';
import SentimentBarChartBhc from '../chart/section4/publicOpinion/SentimentBarChartBhc';

export default function Section4_4() {
    return (
        <div className="page-section">
            <h4 className="h4 page-title">
                <span className="num">II.</span>
                경쟁사 인식 분석

                <h5 class="page-sub-title">3. 여론 인사이트</h5>

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
                        <PieChartGoopneOpinion />
                        <SentimentBarChart />
                    </div>
                </div>
                <div className="issue-chart-section-inner tive">
                    <div className="issue-title">
                    긍부정어 키워드
                    </div>
                    <div className='keyword-five'>
                        <button className='neutral'>높다</button>
                        <button>다양한</button>
                        <button>편안한</button>
                        <button>좋다</button>
                        <button className='negative'>부담</button>
                    </div>
                </div>
            </div>
            <div className="table-insite">
                <table>
                    <tr>
                        <td>
                            <p className='txt-left'>굽네치킨에 대한 가장 긍정적인 댓글은 3월 13일(73.94%), 가장 부정적인 댓글은 3월 11일(19.83%)</p>
                            <p className='txt-left'>3/13 브랜드 평판 분석에서 3위 차지 및 굽네 플레이타운 성과에 대해 긍정 이미지 강화.</p>
                            <p className='txt-left'>경쟁사 비해 부정적 감정은 2024년 정치인 관련 논란 및 2018년 부적절한 광고 영향</p>
                        </td>
                    </tr>
                </table>
            </div>

            {/* 교촌 */}
            <div className="h10"></div>
            <div className="issue-chart-section othermargin2">
                <div className="issue-chart-section-inner">
                    <div className="issue-title">
                    감성 언급량 구성 비율 및 추이
                    </div>
                    <div className='insite-chart-wrap'>
                        <PieChartKyochonOpinion />
                        <SentimentBarChartKyochon />
                    </div>
                </div>
                <div className="issue-chart-section-inner tive">
                    <div className="issue-title">
                    긍부정어 키워드
                    </div>
                    <div className='keyword-five'>
                        <button className=''>다양한</button>
                        <button>맛있는</button>
                        <button>안정적</button>
                        <button>성공적</button>
                        <button className=''>적극적</button>
                    </div>
                </div>
            </div>
            <div className="table-insite">
                <table>
                    <tr>
                        <td>
                            <p className='txt-left'>가장 긍정적인 댓글은 3월 14일(86.87%), 가장 부정적인 댓글은 3월 15일(6.10%)에 기록</p>
                            <p className='txt-left'>긍정적 감성은 소비자의 다변화된 입맛과 외식 트렌드를 반영해 메뉴 라인업을 확장</p>
                            <p className='txt-left'>2021년부터 지속적으로 가격 인상</p>
                        </td>
                    </tr>
                </table>
            </div>


            {/* bhc */}
            <div className="h10"></div>
            <div className="issue-chart-section othermargin2">
                <div className="issue-chart-section-inner">
                    <div className="issue-title">
                    감성 언급량 구성 비율 및 추이
                    </div>
                    <div className='insite-chart-wrap'>
                        <PieChartBhcOpinion />
                        <SentimentBarChartBhc />
                    </div>
                </div>
                <div className="issue-chart-section-inner tive">
                    <div className="issue-title">
                    긍부정어 키워드
                    </div>
                    <div className='keyword-five'>
                        <button className=''>높다</button>
                        <button>다양한</button>
                        <button>편안한</button>
                        <button>좋다</button>
                        <button className=''>부담</button>
                    </div>
                </div>
            </div>
            <div className="table-insite">
                <table>
                    <tr>
                        <td>
                            <p className='txt-left'>가장 긍정적인 댓글은 3월 11일(84.78%), 가장 부정적인 댓글은 3월 16일(8.74%)에 기록</p>
                            <p className='txt-left'>BHC가 3월 초 '콰삭킹'이라는 극 강의 바삭함을 자랑하는 신메뉴를 출시</p>
                            <p className='txt-left'>BHC '마법클 후레이크' 제품 관련 발표로 인한 품질 이슈는 소비자 신뢰를 크게 하락</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}