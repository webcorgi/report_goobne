import React from 'react';
import GoobneReference from '../components/section9/GoobneReference';
import BHCReference from '../components/section9/BHCReference';
import KyochonReference from '../components/section9/KyochonReference';

export default function Section9() {
    return (
        <>
        <div className="page-section">
            <h4 className="h4 page-title">
                {/* <span className="num">Ⅴ.</span> */}
                참고자료
            </h4>
            <h5 className="h5">1. 회사개요 (2025년 1분기)</h5>
            <GoobneReference />
        </div>
        <div className="page-section">
            <KyochonReference />
        </div>
        <div className="page-section">
            <BHCReference />
        </div>
        </>
    );
}