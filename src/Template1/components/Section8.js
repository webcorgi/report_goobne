import GoopneConsumerChart from "../chart/section5/GoopneConsumerChart";
import KyochonConsumerInterestChart from "../chart/section5/KyochonConsumerInterestChart";
import BhcConsumerInterestChart from "../chart/section5/BhcConsumerInterestChart";
export default function Section8() {
    return (
        <div className="page-section">
            <div className="media-insight-section">
                <div className="media-insight-title">
                    <h5 className="h5">4. 소비자 관심사 분석</h5>
                </div>
                <div className="category-title">연관어 분석</div>
                <div className="chart-container-wrapper">
                    <GoopneConsumerChart />
                    <div className="h50"></div>
                    <KyochonConsumerInterestChart />
                    <div className="h50"></div>
                    <BhcConsumerInterestChart />
                </div>
            </div>
        </div>
    );
}