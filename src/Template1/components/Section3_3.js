import BarChart from "../chart/section3/BarChart";
import IssueLineChart from "../chart/section3/IssueLineChart";


export default function Section3_3() {
    return (
        <div className="page-section">
            <h4 className="h4 page-title">
                <span className="num">I.</span>
                주간 주요 이슈

                <p className="page-title-date">
                    <b>분석일자</b>
                    <span>2025.06.16 ~ 2025.06.22</span>
                </p>
            </h4>

            <ul className="issue-list2">
                <li>
                    <b>4. 외부 플랫폼 및 제휴 마케팅</b>
                    <ul>
                        <li>- bhc는 토스와 ‘뿌링클 치킨 받기’ 캠페인을 통해 앱 가입자 및 이용자 수 급증</li>
                        <li>- 교촌치킨 기프티콘이 증권사(IBK투자증권) 등 다양한 이벤트 경품으로 활용됨</li>
                    </ul>
                </li>
                <li>
                    <b>5. 브랜드 사회적 가치 및 지역 연계</b>
                    <ul>
                        <li>- 교촌치킨, 1호점 인근 구미시와 협업해 ‘교촌1991로’ 문화거리 조성, 브랜드 유산 기념 및 지역 활성화</li>
                        <li>- 교촌치킨, 아동 건강 지원사업 등 사회공헌 활동 강화</li>
                    </ul>
                </li>
                <li>
                    <b>6. 가맹점주 지원 및 상생 경영</b>
                    <ul>
                        <li>- bhc, 가맹점주가 직접 가격을 결정하는 ‘자율가격제’ 도입(다만, BBQ 등 일부 브랜드는 도입하지 않음)</li>
                        <li>- 자사앱 주문 증가로 가맹점 수수료 부담 완화, 운영비 절감 및 매출 안정화 강조</li>
                    </ul>
                </li>
                <li>
                    <b>7. 프랜차이즈 간 경쟁 및 시장 동향</b>
                    <ul>
                        <li>- 치킨 프랜차이즈 업계 전반에서 자사앱 활성화, 충성고객 확보, 가맹점주 지원 등 경쟁 심화</li>
                        <li>- 배달앱 수수료 부담, 물가 인상, 가맹점 운영 환경 변화 등 공통 이슈</li>
                    </ul>
                </li>
                <li>
                    <b>오프라인 및 체험형 마케팅</b>
                    <ul>
                        <li>- 굽네, ‘굽네 오븐런’ 등 러닝 이벤트 개최, 브랜드 체험 강화</li>
                        <li>- bhc, 직영점 중심으로 QR 테이블 오더 자동 연동, 사전예약 서비스 ‘뿌리오더’ 전국 확대 예정</li>
                    </ul>
                </li>
            </ul>

            <div className="news-list">
                <h5 className="news-title">연관 뉴스</h5>
                <ul className="news-list-ul">
                    <li>
                        <a href="#" className="news-item-title">노랑통닭도 치킨값 올려..닭 수급 불안에 치킨업계 가격 인상 우려 확산</a>
                        <span>한국정경신문 ｜ 2025-06-22</span>
                    </li>
                    <li>
                        <a href="#" className="news-item-title">'버티던 '이곳'마저 치킨값 올렸네'…놀란 농식품부 직접 알아봤더니</a>
                        <span>서울경제신문 ｜ 2025-06-22</span>
                    </li>
                    <li>
                        <a href="#" className="news-item-title">bhc 자사앱, 4개월 만에 누적 가입자 100만명 돌파</a>
                        <span>더퍼블릭 ｜ 2025-06-22</span>
                    </li>
                    <li>
                        <a href="#" className="news-item-title">앱으로 묶고 혜택으로 잡는다…프랜차이즈, 자사앱 혁신 경쟁</a>
                        <span>포인트데일리 ｜ 2025-06-22</span>
                    </li>
                    <li>
                        <a href="#" className="news-item-title">교촌치킨·bhc·BBQ, 자사앱 강화···충성고객 확보·가맹점 상생경영</a>
                        <span>여성소비자신문 ｜ 2025-06-20</span>
                    </li>
                    <li>
                        <a href="#" className="news-item-title">비에이치앤바이오, 국제 식품안전경영 인증 ‘FSSC 22000’ 획득</a>
                        <span>신아일보 ｜ 2025-06-22</span>
                    </li>
                    <li>
                        <a href="#" className="news-item-title">BK투자증권, 휴면 계좌 활성화 이벤트 진행</a>
                        <span>라이센스뉴스  |  2025-06-22</span>
                    </li>
                    <li>
                        <a href="#" className="news-item-title">‘펀러닝’에 동참한 식품업계, 달리면서 먹는 즐거움 더한다</a>
                        <span>데일리안  |  2025-06-21</span>
                    </li>
                </ul>
            </div>

        </div>
    );
}