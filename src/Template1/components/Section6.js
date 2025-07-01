import GoopneMediaMentionChart from "../chart/section5/GoopneMediaMentionChart";
import KyochonMediaMentionChart from "../chart/section5/KyochonMediaMentionChart";
import BhcMediaMentionChart from "../chart/section5/BhcMediaMentionChart";
export default function Section6() {
    return (
        <div className="page-section">
            <div className="media-insight-section">
                <div className="media-insight-title">
                    <h5 className="h5">2. 매체별 인사이트</h5>
                </div>
                <div className="category-title">
                분석 개요
                </div>
                <div className="data-analysis-section">
                    굽네치킨, 교촌치킨, BHC의 언급량은 주로 커뮤니티에서 광고 및 마케팅과 관련되었으며, 교촌과 BHC는 굽네처럼 유튜브 활동이 적습니다. 특히 이번 주 BHC는 (주)푸드야식품의 유통기한 조작 사건으로 '마법클 후레이크' 제품이 회수되며 언급량이 증가했습니다.
                </div>

                <div className="category-title">
                매체별 언급량 및 주요 담론
                </div>
                {/* 매체별 언급량 및 주요 담론 차트 */}
                <div className="chart-container-wrapper">
                    <GoopneMediaMentionChart />
                    <KyochonMediaMentionChart />
                    <BhcMediaMentionChart />
                </div>
            </div>
        </div>
    );
}  