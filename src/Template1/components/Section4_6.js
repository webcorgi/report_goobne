import React, { useEffect, useState } from 'react';
import PieChartGoopneOpinion from '../chart/section4/publicOpinion/PieChartGoopneOpinion';
import SentimentBarChart from '../chart/section4/publicOpinion/SentimentBarChart';
import PieChartKyochonOpinion from '../chart/section4/publicOpinion/PieChartKyochonOpinion';
import SentimentBarChartKyochon from '../chart/section4/publicOpinion/SentimentBarChartKyochon';
import PieChartBhcOpinion from '../chart/section4/publicOpinion/PieChartBhcOpinion';
import SentimentBarChartBhc from '../chart/section4/publicOpinion/SentimentBarChartBhc';

export default function Section4_6() {
    return (
        <div className="page-section">
            <h4 className="h4 page-title">
                <span className="num">II.</span>
                경쟁사 인식 분석

                <h5 class="page-sub-title">4. 소비자 관심사 분석</h5>

                <p className="page-title-date">
                    <b>분석일자</b>
                    <span>2025.06.16 ~ 2025.06.22</span>
                </p>
            </h4>

        
            <div className="h15"></div>
            <div className="issue-chart-section othermargin2">
                <div className="issue-chart-section-inner interest">
                    <div className="issue-title">
                       굽네
                    </div>
                    <p className='text-interest'>고객 댓글에서는 굽네와 다양한 메뉴가 자주 언급되며, 이디야커피나 맘스터치 같은 인근 매장 및 경쟁 브랜드와의 연계 경험도 두드러집니다. 제품과 장소 키워드가 함께 등장하는 경우가 많아, 고객들이 메뉴의 다양성뿐만 아니라 브랜드 간의 시너지와 편의성, 그리고 맛과 경험을 비교하는 데 큰 가치를 두고 있음을 알 수 있습니다.</p>
                </div>
            </div>

            <div className="issue-chart-section othermargin2 interest">
                <div className="issue-chart-section-inner interest">
                    <div className="issue-title">
                    연관어
                    </div>
                    <div className='inetrest-table-wrap'>
                        <div className='inetrest-table'>
                            <p className='inetrest-table-date'>2025.06.16</p>
                          <table>
                            <tr>
                                <th>순위</th>
                                <th>연관어</th>
                                <th>건수</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><span className="dot green"></span><span>피자</span></td>
                                <td>401</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><span className="dot primary"></span><span>처갓집양념치킨</span></td>
                                <td>393</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><span className="dot green"></span><span>커피</span></td>
                                <td>390</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><span className="dot green"></span><span>양념치킨</span></td>
                                <td>388</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td><span className="dot teal"></span><span>도미노피자</span></td>
                                <td>387</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td><span className="dot primary"></span><span>던킨</span></td>
                                <td>387</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td><span className="dot blue"></span><span>프렌차이즈</span></td>
                                <td>387</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td><span className="dot primary"></span><span>파크</span></td>
                                <td>387</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td><span className="dot green"></span><span>떡볶이</span></td>
                                <td>387</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td><span className="dot primary"></span><span>메가커피</span></td>
                                <td>387</td>
                            </tr>
                          </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}