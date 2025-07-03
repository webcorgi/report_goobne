import BarChart from "../chart/section3/BarChart";
import IssueLineChart2 from "../chart/section3/IssueLineChart2";

export default function Section3_4() {
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

            {/* 주요키워드, 이슈별 언급량 추이 */}
            <div className="issue-chart-section">
                <div className="issue-chart-section-inner keyword">
                    <div className="issue-title">
                        주요키워드
                    </div>
                    <ul className="issue-keyword-content">
                        <li>가격인상</li>
                        <li>자사앱</li>
                        <li>신메뉴</li>
                        <li>제휴</li>
                        <li>사회공헌</li>
                        <li>상생경영</li>
                        <li>프렌차이즈 시장 동향</li>
                        <li>체험형 마케팅</li>
                    </ul>
                </div>
                <div className="issue-chart-section-inner">
                    <div className="issue-title">
                        이슈별 언급량 추이
                    </div>
                    <div className="issue-chart-area">
                        <IssueLineChart2 />
                    </div>
                </div>
            </div>

            <div className="news-list">
                <h5 className="news-title">경쟁사 관련 이슈 언급량 변화 분석</h5>
                <ul className="news-list-ul">
                    <li>6월 16~18일에는 치킨 프랜차이즈 업계에서 가맹점주와 본사 간 소송, 배달앱 수수료 부담 등 배경 이슈가 산발적으로 언급됐으며, 이와 함께 야구장 주변 패스트푸드 매출 166% 증가(경기 없는 날 대비) 소식이 병행 보도됨.</li>
                    <li>6월 19일에는 BBQ가 물가 안정 동참 및 배달 수수료 부담 완화 필요성을 강조하는 기자간담회 개최로 언론 보도량 증가, 또한 bhc의 ‘자율가격제’ 도입 검토와 공공 배달앱 활성화 논의도 집중(얼만큼?) 언급.</li>
                    <li>6월 20일에는 bhc가 자사앱 누적 가입자 100만 명 돌파(월간 이용자 116만 명) 공식 발표로 언론 보도량 급증, 이와 함께 신메뉴 ‘콰삭킹’ 인기와 교촌치킨 기프티콘 증권사 이벤트도 다수(얼만큼?) 언급.</li>
                    <li>6월 21일에는 교촌치킨 ‘교촌 1991로’ 문화거리 준공 및 사회공헌 활동 관련 보도(몇건?), 또한 공무원 시험 등 이벤트에서 bhc·교촌치킨 기프티콘 경품 소식도 연이어 (몇건?)언론에 등장.</li>
                    <li>6월 22일에는 노랑통닭·지코바 등 경쟁 브랜드의 치킨 가격 인상 소식과 함께 굽네·교촌치킨·bhc 등도 일부 가맹점에서 배달 가격 인상 또는 이중가격제 도입을 검토 중이라는 보도로 언론 보도량(얼만큼?) 급증, 이와 함께 브라질산 닭고기 수급 불안 등 원인 언급.</li>
                </ul>
            </div>
        </div>
    );
}