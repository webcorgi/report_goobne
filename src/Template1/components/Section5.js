export default function Section5() {
    return (
        <div className="page-section">
            <h4 className="h4 page-title">
                <span className="num">Ⅲ.</span>
                참고자료
                <p className="page-title-date">
                    <b>분석일자</b>
                    <span>2025.06.16 ~ 2025.06.22</span>
                </p>
            </h4>

            <div className="h30"></div>
            <h5 className="sub-title-black">1.  회사 개요 (2025년 1분기)</h5>
            <h6 className="page-sub-title">굽네</h6>

            <div className="h15"></div>

            {/* 여기 */}

            <div className="company-section">
                <div className="company-info-table">
                    <div className="company-info-row">
                        <div className="company-info-label">매출 순위<br/>(2024년 기준)</div>
                        <div className="company-info-value">약 3,500억 원으로 5위</div>
                    </div>
                    <div className="company-info-row">
                        <div className="company-info-label">시장동향</div>
                        <div className="company-info-value add-dot">굽네치킨은 건강 메뉴 확대로 소비층 확장 중</div>
                    </div>
                    <div className="company-info-row">
                        <div className="company-info-label">주요제품</div>
                        <div className="company-info-value">
                            <ul className="company-info-list">
                                <li className="add-dot">치킨 8종류: 오리지널, 고추바사삭, 볼케이노, 갈비천왕, 양념허니로, 남해마늘바사삭, 반반옵션</li>
                                <li className="add-dot">피자 4종류: 바질&토마토, 스윗콘치즈, 페퍼로니시카고, 시카고딥디쉬</li>
                                <li className="add-dot">사이드 3종류: 웨지감자, 에그타르트, 매콤치즈 소떡소떡</li>
                                <li className="add-dot">기타: 소스 추가, 치트킹</li>
                            </ul>
                        </div>
                    </div>
                    <div className="company-info-row">
                        <div className="company-info-label">주요제품<br />매출</div>
                        <div className="company-info-value">
                            <table className="company-sales-table">
                                <thead>
                                    <tr>
                                        <th rowSpan="2">사업부문</th>
                                        <th rowSpan="2">주요품목</th>
                                        <th rowSpan="2">구체적 용도</th>
                                        <th colSpan="2">2024년(제26기)</th>
                                    </tr>
                                    <tr>
                                        <th>매출액</th>
                                        <th>비율</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>국내 프랜차이즈</td>
                                        <td>원/부자재<br/>(육계,소스,전용유,치킨무 등)</td>
                                        <td>가맹점 원/부자재 국내 직영 매장 조리 등</td>
                                        <td>447,071</td>
                                        <td>93.0%</td>
                                    </tr>
                                    <tr>
                                        <td>글로벌 사업</td>
                                        <td>치킨메뉴,부자재,로열티 등</td>
                                        <td>해외 파트너사 부자재 수출<br/>해외 직영 매장 조리 등</td>
                                        <td>19,407</td>
                                        <td>4.0%</td>
                                    </tr>
                                    <tr>
                                        <td>신사업<br/>(유통사업 및 기타)</td>
                                        <td>가공소스, 수제맥주 등</td>
                                        <td>사업부문</td>
                                        <td>14,332</td>
                                        <td>3.0%</td>
                                    </tr>
                                    <tr className="company-sales-total">
                                        <td colSpan="3">합계</td>
                                        <td>480,810</td>
                                        <td>100.0%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* SWOT */}
                <div className="company-swot-wrap">
                    <div className="company-swot-item swot-s">
                        <div className="swot-label swot-s-label">강점<br/><span>S</span></div>
                        <ul>
                            <li className="add-dot">차별화된 제품: 국내 최초 오븐구이 치킨으로 기름 튀김 대비 건강한 이미지 강조</li>
                            <li className="add-dot">혁신적 메뉴 개발: 고추바사삭 등 독특한 시즈닝 활용으로 소비자 선호도 확보</li>
                            <li className="add-dot">마케팅 전략: SWOT, STP, 4P 분석을 통한 체계적 전략 수립</li>
                        </ul>
                    </div>
                    <div className="company-swot-item swot-w">
                        <div className="swot-label swot-w-label">약점<br/><span>W</span></div>
                        <ul>
                            <li className="add-dot">경쟁사 대비 낮은 점포 수: 교촌치킨, BHC 등 대형 프랜차이즈에 비해 시장 점유율 제한적</li>
                            <li className="add-dot">고객 접근성: 오븐구이 방식으로 인한 조리 시간 증가 가능성</li>
                        </ul>
                    </div>
                    <div className="company-swot-item swot-o">
                        <div className="swot-label swot-o-label">기회<br/><span>O</span></div>
                        <ul>
                            <li className="add-dot">건강 트렌드 활용: 웰빙 소비자층 대상 제품 확대</li>
                            <li className="add-dot">신제품 출시: 고추바사삭 돈가스볼 등 기존 인기 메뉴 활용한 파생 상품 개발</li>
                        </ul>
                    </div>
                    <div className="company-swot-item swot-t">
                        <div className="swot-label swot-t-label">위협<br/><span>T</span></div>
                        <ul>
                            <li className="add-dot">경쟁사 공격적 확장: BBQ, 교촌치킨 등과의 치열한 시장 경쟁</li>
                            <li className="add-dot">원자재 가격 변동: 닭고기 가격 상승 등 외부 요인 영향</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}  