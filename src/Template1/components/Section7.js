import React from 'react';
import GoopneSentimentChart from '../chart/section7/GoopneSentimentChart';
import KyochonSentimentChart from '../chart/section7/KyochonSentimentChart';
import BhcSentimentChart from '../chart/section7/BhcSentimentChart';

export default function Section7() {
    return (
        <div className="page-section">
            <div className="media-insight-section">
                <div className="media-insight-title">
                    <h5 className="h5">3. 여론 분석</h5>
                </div>
                <div className="chart-container-wrapper">
                    <GoopneSentimentChart />
                </div>
                
                <div className="chart-container-wrapper" style={{ marginTop: '10px' }}>
                    <KyochonSentimentChart />
                </div>
                
                <div className="chart-container-wrapper" style={{ marginTop: '10px' }}>
                    <BhcSentimentChart />
                </div>
            </div>
        </div>
    );
}  