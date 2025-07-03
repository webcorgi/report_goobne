import BarChart from "../chart/section3/BarChart";
import IssueLineChart from "../chart/section3/IssueLineChart";


export default function Section3_2() {
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
                        <li>배달 수수료</li>
                        <li>원재료,인건비</li>
                        <li>프랜차이즈 소송</li>
                        <li>포화/폐점률</li>
                        <li>브랜드 다각화</li>
                    </ul>
                </div>
                <div className="issue-chart-section-inner">
                    <div className="issue-title">
                        이슈별 언급량 추이
                    </div>
                    <div className="issue-chart-area">
                        <IssueLineChart />
                    </div>
                </div>
            </div>

            <div className="news-list">
                <h5 className="news-title">관련 산업 이슈 언급량 변화 분석</h5>
                <ul className="news-list-ul">
                    <li>6월 16~17일에는 배달앱 수수료 상한제 등 규제 논의가 집중되며 관련 이슈 언급량이 크게 증가</li>
                    <li>6월 17일 피자헛 차액가맹금 소송 보도 영향으로 프랜차이즈 유통마진 소송 이슈가 부각됨</li>
                    <li>6월 18~19일에는 원재료·인건비 상승, 외식 물가 인상 이슈가 주목받으며 언급량이 늘었고, 19일에는 BBQ 등 브랜드 다각화·글로벌 진출 뉴스로 해당 이슈 언급도 증가</li>
                    <li>6월 21~22일에는 브랜드 확장, 글로벌 진출, 치킨값 등 소비자 이슈가 다시 부각되며 관련 언급량이 주 후반까지 유지</li>
                </ul>
            </div>

            <h5 className="page-sub-title">2.  경쟁사 주요 이슈</h5>
            <ul className="issue-list2">
                <li>
                    <b>1. 소상공인 위기와 정치권 반응</b>
                    <ul>
                        <li>최근 노랑통닭, 지코바 등과 함께 굽네,교촌,bhc도 일부 가맹점에서 배달 가격 인상 또는 이중가격제 도입 검토 중</li>
                        <li>브라질산 닭고기 수급 불안 등 원재료 문제와 고정비 상승이 원인으로 지목</li>
                    </ul>
                </li>
            </ul>

        </div>
    );
}