import React from 'react';

export default function Section6() {
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
            <h5 className="sub-title-black">2. 상위 10개 경쟁사 (2025년 1분기)</h5>

            <div className="premium-competition-table">
                <div className="competition-table-flex">
                    {/* 1차 경쟁사 */}
                    <div className="competition-table-block">
                        <div className="competition-table-title first-title">1차 경쟁사</div>
                        <table className="competition-table">
                            <colgroup>
                                <col width="20%"/>
                                <col width="80%"/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th className="col-no orange-bg">no</th>
                                    <th className="col-title orange-bg">브랜드 검색 순위</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="col-no">1</td><td>bhc</td></tr>
                                <tr><td className="col-no">2</td><td>교촌치킨</td></tr>
                                <tr><td className="col-no">3</td><td>BBQ</td></tr>
                                <tr><td className="col-no">4</td><td>굽네</td></tr>
                                <tr><td className="col-no">5</td><td>60계 치킨</td></tr>
                                <tr><td className="col-no">6</td><td>노랑통닭</td></tr>
                                <tr><td className="col-no">7</td><td>맘스터치</td></tr>
                                <tr><td className="col-no">8</td><td>푸라닭</td></tr>
                                <tr><td className="col-no">9</td><td>처갓집 양념치킨</td></tr>
                                <tr><td className="col-no">10</td><td>네네 치킨</td></tr>
                            </tbody>
                        </table>
                    </div>
                    {/* 2차 경쟁사 */}
                    <div className="competition-table-block">
                        <div className="competition-table-title second-title">외식업 프랜차이즈 (2차 경쟁사)</div>
                        <table className="competition-table">
                            <colgroup>
                                <col width="20%"/>
                                <col width="80%"/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th className="col-no green-bg">no</th>
                                    <th className="col-title green-bg">순익 순위 (Revenue)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="col-no">1</td><td>메가 MGC커피</td></tr>
                                <tr><td className="col-no">2</td><td>도미노피자</td></tr>
                                <tr><td className="col-no">3</td><td>맥도날드</td></tr>
                                <tr><td className="col-no">4</td><td>투썸플레이스</td></tr>
                                <tr><td className="col-no">5</td><td>명륜진사갈비</td></tr>
                                <tr><td className="col-no">6</td><td>파리바게뜨</td></tr>
                                <tr><td className="col-no">7</td><td>베스킨라빈스</td></tr>
                                <tr><td className="col-no">8</td><td>BBQ치킨</td></tr>
                                <tr><td className="col-no">9</td><td>교촌치킨</td></tr>
                                <tr><td className="col-no">10</td><td>써브웨이</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}  