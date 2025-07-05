import React, { useEffect, useState } from 'react';
import newsLogo from '../../img/placeholder.svg';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../recoil/atom';
import PieChart from '../chart/section4/PieChart';
import HighlightedLineChart from "../chart/section4/HighlightedLineChart";

export default function Section4() {
    return (
        <div className="page-section">
            <h4 className="h4 page-title">
                <span className="num">II.</span>
                경쟁사 인식 분석

                <h5 class="page-sub-title">1. 경쟁사 언급 개요</h5>

                <p className="page-title-date">
                    <b>분석일자</b>
                    <span>2025.06.16 ~ 2025.06.22</span>
                </p>
            </h4>

            <div className="issue-chart-section othermargin">
                <div className="issue-chart-section-inner first">
                    <div className="issue-title txt-center">
                        구분
                    </div>
                    <div className="issue-box-top">
                       소셜 미디어 언급량
                    </div>
                    <div className="issue-box-btm">
                       감성 언급량
                    </div>
                </div>
                <div className="issue-chart-section-inner txt-center">
                    <div className="issue-title">
                    굽네치킨
                    </div>
                    <div className="issue-box-top">
                        <span className="view_mobile">소셜 미디어 언급량</span>
                        <p>2,372건</p>
                        <p className="issue-box-top-text">
                            <span style={{color:'#3686e7'}}>&#9650;</span>
                            <span>43.03% (전주대비)</span>
                        </p>
                    </div>
                    <div className="issue-box-btm">
                       <span className="view_mobile">감성 언급량</span>
                       <div><span>긍</span> <b>88.96%</b></div>
                       <div><span>중</span> <b>9.31%</b></div>
                       <div><span>부</span> <b>1.74%</b></div>
                    </div>
                </div>
                <div className="issue-chart-section-inner txt-center">
                    <div className="issue-title">
                    교촌치킨
                    </div>
                    <div className="issue-box-top">
                        <span className="view_mobile">소셜 미디어 언급량</span>
                        <p>2,372건</p>
                        <p className="issue-box-top-text">
                            <span style={{color:'#3686e7'}}>&#9650;</span>
                            <span>43.03% (전주대비)</span>
                        </p>
                    </div>
                    <div className="issue-box-btm">
                    <span className="view_mobile">감성 언급량</span>
                       <div><span>긍</span> <b>83.52%</b></div>
                       <div><span>중</span> <b>13.94%</b></div>
                       <div><span>부</span> <b>2.53%</b></div>
                    </div>
                </div>
                <div className="issue-chart-section-inner txt-center">
                    <div className="issue-title">
                        bhc
                    </div>
                    <div className="issue-box-top">
                        <span className="view_mobile">소셜 미디어 언급량</span>
                        <p>2,372건</p>
                        <p className="issue-box-top-text">
                            <span style={{color:'#e74c3c'}}>&#9660;</span>
                            <span>43.03% (전주대비)</span>
                        </p>
                    </div>
                    <div className="issue-box-btm">
                    <span className="view_mobile">감성 언급량</span>
                        <div><span>긍</span> <b>79.05%</b></div>
                        <div><span>중</span> <b>17.50%</b></div>
                        <div><span>부</span> <b>3.45%</b></div>
                    </div>
                </div>
            </div>

            <div className="issue-chart-section othermargin2">
                <div className="issue-chart-section-inner" style={{width:"100%"}}>
                    <div className="issue-title">
                    총언급량
                    </div>
                    <div>
                        <HighlightedLineChart />
                    </div>
                </div>
                <div className="issue-chart-section-inner" style={{width:"230px"}}>
                    <div className="issue-title">
                    총언급량 구성 비율
                    </div>
                    <div >
                        <PieChart />
                    </div>
                </div>
            </div>

            <div className="news-list">
                <h5 className="news-title">언급량 데이터 분석 결과</h5>
                <ul className="news-list-ul">
                    <li>
                        최근 치킨 프랜차이즈 시장은 다각적인 변화를 겪고 있으며 특히 외식업계는 배달앱 수수료 인상과 수입식품업체의 원료 소비기한 조작 사건 같은 도전에 직면해 있지만 이러한 변화에 대응하기 위해 차별화된 전략을 구사하고 있습니다.
                    </li>
                    <li>
                        <div className="news-date-group-title">3월 11일</div>
                        <ul className="news-date-group-list">
                        <li>굽네치킨 운영사인 GN푸드가 2025년까지 해외 시장에 100개 매장을 오픈한다는 글로벌 확장 계획 발표 및 다양한 이벤트 진행. 그러나 경쟁 브랜드 대비 낮은 언급량 여전</li>
                        <li>BHC는 푸드아식품의 유통기한 조작 사건에 연루되어 대규모 제품 회수 조치를 시행했으나, 여전히 시장인지도에서 강세 유지. 특히, 커뮤니티를 통한 집중적인 광고의 영향 존재</li>
                        </ul>
                    </li>
                    <li>
                        <div className="news-date-group-title">3월 11일</div>
                        <ul className="news-date-group-list">
                        <li>구미시에서 시작하는 '이야기가 있는 산업문화투어'는 교촌치킨의 브랜드 역사와 치킨 제조 과정을 직접 체험할 수 있는 기회를 제공한다고 보도됨</li>
                        </ul>
                    </li>
                    <li>
                        <div className="news-date-group-title">3월 11일</div>
                        <ul className="news-date-group-list">
                        <li>굽네치킨의 소셜 미디어(인스타, 블로그, 티스토리) 언급량 상승은 사람들이 고추바사삭 메뉴의 맛과 타 브랜드에 비해 낮은 칼로리를 칭찬하며, 다양한 할인 및 행사 정보 공유</li>
                        <li>Bhc 소비기한 경과 원료 납품 이슈</li>
                        <li>교촌치킨은 브랜드 평판 1위를 차지한 스타 모델(변우석)을 활용한 마케팅 효과 덕에 언급량 상승</li>
                        </ul>
                    </li>
                    </ul>
            </div>
        </div>
    );
}  