import BarChart from "../chart/section3/BarChart";


export default function Section2() {
    return (
        <div className="page-section">
            <h4 className="h4 page-title">
                {/* <span className="num">I.</span> */}
                분석 개요</h4>
            <div className="data-analysis-section">
                <div className="overview-dl">
                    <div className="overview-dt">경쟁사</div>
                    <div className="overview-dd">
                        (1차 경쟁사) bhc, 교촌 치킨
                    </div>
                </div>
                <div className="overview-dl">
                    <div className="overview-dt">
                        분석 기간
                    </div>
                    <div className="overview-dd">
                        2025.03.10 ~ 2025.03.16
                    </div>
                </div>
                <div className="overview-dl">
                    <div className="overview-dt">
                        분석 키워드
                    </div>
                    <div className="overview-dd">
                        굽네치킨, 교촌, BHC, 프렌차이즈, 프렌차이즈치킨브랜드, 치킨, 치킨브랜드, 치킨맛집, 맛있는치킨, 추천하는 치킨, 연애인이 추천하는 치킨
                    </div>
                </div>
                <div className="overview-dl">
                    <div className="overview-dt">대상 매체</div>
                    <div className="overview-dd">
                        뉴스( 네이버,다음), 유튜브, 인스타그램, 트위터(X), 커뮤니티 (네이버, 다음 카페, 개별 온라인 커뮤니티), 블로그(네이버)
                    </div>
                </div>
                <div className="overview-dl">
                    <div className="overview-dt">데이터 출처</div>
                    <div className="overview-dd">
                        TM2 (네이버 뉴스), 방속TCI 지수, 맛집데이터, 브랜드 지수, VISS 지수, SNS 쇼핑 트렌드, 식품 도메인 트렌드, BRI 지수,
                        맛집 데이터, 국내 주요 증권사 분석 리포트, 국재 상장사 재무 데이터, 국내 상장사 잠정공시/감사 보고서 데이터, 국내 상장사 주요 지표
                        데이터
                    </div>
                </div>
            </div>

            <h4 className="h4 page-title mt-40">
                {/* <span className="num">Ⅱ.</span> */}
                주간 하이라이트</h4>
            <h5 className="h5">1. 주요 이슈</h5>

            <div className="table-layout bg-red">
                <div className="table-head">
                    <div className="table-tr">
                        <div className="table-th col-subj">내용</div>
                        <div className="table-th txt-center">기사 건수</div>
                    </div>
                </div>
                <div className="table-body">
                    <div className="table-tr">
                        <div className="table-th col-subj">1. 수입식품업체의 원료 소비기한 조작 사건: (주)푸드야식품이 소비기한을 연장
                            표시한 수입 과·채가공품을 납품해 동원홈푸드와 BHC 등 여러 식품회사의 제품이 회수 조치 진행
                        </div>
                        <div className="table-td">2건</div>
                    </div>
                    <div className="table-tr">
                        <div className="table-th col-subj">
                            2. 2025년 1분기 외식업계 체감 경기 지수는 71.52로, 전 분기 대비 4.52포인트 하락. 경기침체와 물가, 인건비, 식자재비 상승
                            등으로 매출이 줄어 업계는 정부 지원이 필요
                        </div>
                        <div className="table-td">2건</div>
                    </div>

                    <div className="table-tr">
                        <div className="table-th col-subj">
                            3. 배달 증가와 비용 부담 : 배달 수수료와 닭고기 가격 상승으로 인해 가맹점주들의 수익성이 악화됨. 굽네치킨은 계육 공급가를 인상하고 모바일
                            상품권 수수료를 가맹점주에게 전가하여 갈등이 발생
                        </div>
                        <div className="table-td">3건</div>
                    </div>

                    <div className="table-tr">
                        <div className="table-th col-subj">
                            4. 글로벌 확장 및 시장 다각화 : BBQ는 북미 시장에서 약 250개 매장을 운영하며, 글로벌 매출 성장률이 전년 대비 90% 증가. 해외
                            소비자 판매 매출은 약 3000억 원을 기록
                        </div>
                        <div className="table-td">1건</div>
                    </div>

                    <div className="table-tr">
                        <div className="table-th col-subj">
                            5. 브랜드 평판 순위 변화 : 2025년 3월 기준 브랜드 평판 순위는 BBQ(1위), 교촌치킨(2위), 굽네치킨(3위)로 나타남. BBQ는
                            긍정 비율 **89.16%**를 기록하며 소비자 평판에서 강세를 보임
                        </div>
                        <div className="table-td">1건</div>
                    </div>
                </div>
            </div>

            <div className="h20"></div>

            <h5 className="h5">2. 주요 지표</h5>

            <div className="table-layout border-red table-variance txt-center">
                <div className="table-head">
                    <div className="table-tr">
                        <div className="table-th txt-center">구분</div>
                        <div className="table-th txt-center bg-company1">굽네 치킨</div>
                        <div className="table-th txt-center bg-company2">교촌 치킨</div>
                        <div className="table-th txt-center bg-company3">BHC</div>
                    </div>
                </div>
                <div className="table-body">
                    <div className="table-tr">
                        <div className="table-td col-nowrap">
                            소셜 미디어 언급량
                        </div>
                        <div className="table-td">
                            2,372건
                            <p className="color-down">▲ 43.03% (전주대비)</p>
                        </div>
                        <div className="table-td">
                            6,075건
                            <p className="color-down">▲ 43.03% (전주대비)</p>
                        </div>
                        <div className="table-td">
                            6,705건
                            <p className="color-up">▼ 43.03% (전주대비)</p>
                        </div>
                    </div>
                    <div className="table-tr">
                        <div className="table-td col-nowrap">
                            감성 언급량
                        </div>
                        <div className="table-td">
                            긍 88.96%<br/>
                            중 9.31%<br/>
                            부 1.74%
                        </div>
                        <div className="table-td">
                            긍 83.52%<br/>
                            중 13.94%<br/>
                            부 2.53%
                        </div>
                        <div className="table-td">
                            긍 79.05%<br/>
                            중 17.50%<br/>
                            부 3.45%
                        </div>
                    </div>
                </div>
            </div>

            <div className="table-layout-chart txt-center">
                <div className="table-body">
                    <div className="table-tr">
                        <div className="table-td">
                            소셜 미디어 언급량 구성비율 (SOV)
                        </div>
                        <div className="table-td">
                            <BarChart/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}