import React from 'react';

export default function Section10() {
    return (
        <div className="page-section">
            <h5 className="h5">2. 상위 10개 경쟁사 (2025년 1분기)</h5>
            <div className="premium-competition-table">
                <div className="competition-header-section">
                    <div className="competition-title-row">
                        <div className="competition-column rank-column">
                            <div className="column-header">순위</div>
                        </div>
                        <div className="competition-column primary-column">
                            <div className="column-header">
                                <span className="header-icon">🏆</span>
                                <span>1차 경쟁사</span>
                            </div>
                        </div>
                        <div className="competition-column secondary-column">
                            <div className="column-header">
                                <span className="header-icon">🔍</span>
                                <span>외식업 프랜차이즈 (2차 경쟁사)</span>
                            </div>
                        </div>
                    </div>
                    <div className="competition-subtitle-row">
                        <div className="competition-column rank-column">
                            <div className="column-subheader"></div>
                        </div>
                        <div className="competition-column primary-column">
                            <div className="column-subheader revenue-header">
                                수익 순위 (Revenue)
                            </div>
                        </div>
                        <div className="competition-column secondary-column">
                            <div className="column-subheader search-header">
                                브랜드 검색 순위
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="competition-body">
                    {/* Top 3 - Gold tier */}
                    <div className="competition-row top-tier">
                        <div className="competition-column rank-column">
                            <div className="rank-badge gold">1</div>
                        </div>
                        <div className="competition-column primary-column">
                            <div className="company-name primary">
                                <div className="company-bullet primary"></div>
                                <span>Bhc</span>
                            </div>
                        </div>
                        <div className="competition-column secondary-column">
                            <div className="company-name secondary">
                                <div className="company-bullet secondary"></div>
                                <span>메가 MGC커피</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="competition-row top-tier">
                        <div className="competition-column rank-column">
                            <div className="rank-badge gold">2</div>
                        </div>
                        <div className="competition-column primary-column">
                            <div className="company-name primary">
                                <div className="company-bullet primary"></div>
                                <span>교촌 치킨</span>
                            </div>
                        </div>
                        <div className="competition-column secondary-column">
                            <div className="company-name secondary">
                                <div className="company-bullet secondary"></div>
                                <span>도미노피자</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="competition-row top-tier">
                        <div className="competition-column rank-column">
                            <div className="rank-badge gold">3</div>
                        </div>
                        <div className="competition-column primary-column">
                            <div className="company-name primary">
                                <div className="company-bullet primary"></div>
                                <span>BBQ</span>
                            </div>
                        </div>
                        <div className="competition-column secondary-column">
                            <div className="company-name secondary">
                                <div className="company-bullet secondary"></div>
                                <span>맥도날드</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* 4-6 - Silver tier */}
                    <div className="competition-row mid-tier">
                        <div className="competition-column rank-column">
                            <div className="rank-badge silver">4</div>
                        </div>
                        <div className="competition-column primary-column">
                            <div className="company-name primary">
                                <div className="company-bullet primary"></div>
                                <span>굽네</span>
                            </div>
                        </div>
                        <div className="competition-column secondary-column">
                            <div className="company-name secondary">
                                <div className="company-bullet secondary"></div>
                                <span>투썸플레이스</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="competition-row mid-tier">
                        <div className="competition-column rank-column">
                            <div className="rank-badge silver">5</div>
                        </div>
                        <div className="competition-column primary-column">
                            <div className="company-name primary">
                                <div className="company-bullet primary"></div>
                                <span>60계 치킨</span>
                            </div>
                        </div>
                        <div className="competition-column secondary-column">
                            <div className="company-name secondary">
                                <div className="company-bullet secondary"></div>
                                <span>명륜진사갈비</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="competition-row mid-tier">
                        <div className="competition-column rank-column">
                            <div className="rank-badge silver">6</div>
                        </div>
                        <div className="competition-column primary-column">
                            <div className="company-name primary">
                                <div className="company-bullet primary"></div>
                                <span>노랑통닭</span>
                            </div>
                        </div>
                        <div className="competition-column secondary-column">
                            <div className="company-name secondary">
                                <div className="company-bullet secondary"></div>
                                <span>파리바게뜨</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* 7-10 - Bronze tier */}
                    <div className="competition-row bottom-tier">
                        <div className="competition-column rank-column">
                            <div className="rank-badge bronze">7</div>
                        </div>
                        <div className="competition-column primary-column">
                            <div className="company-name primary">
                                <div className="company-bullet primary"></div>
                                <span>맘스터치</span>
                            </div>
                        </div>
                        <div className="competition-column secondary-column">
                            <div className="company-name secondary">
                                <div className="company-bullet secondary"></div>
                                <span>배스킨라빈스</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="competition-row bottom-tier">
                        <div className="competition-column rank-column">
                            <div className="rank-badge bronze">8</div>
                        </div>
                        <div className="competition-column primary-column">
                            <div className="company-name primary">
                                <div className="company-bullet primary"></div>
                                <span>푸라닭</span>
                            </div>
                        </div>
                        <div className="competition-column secondary-column">
                            <div className="company-name secondary">
                                <div className="company-bullet secondary"></div>
                                <span>BBQ 치킨</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="competition-row bottom-tier">
                        <div className="competition-column rank-column">
                            <div className="rank-badge bronze">9</div>
                        </div>
                        <div className="competition-column primary-column">
                            <div className="company-name primary">
                                <div className="company-bullet primary"></div>
                                <span>처갓집 양념치킨</span>
                            </div>
                        </div>
                        <div className="competition-column secondary-column">
                            <div className="company-name secondary">
                                <div className="company-bullet secondary"></div>
                                <span>교촌치킨</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="competition-row bottom-tier">
                        <div className="competition-column rank-column">
                            <div className="rank-badge bronze">10</div>
                        </div>
                        <div className="competition-column primary-column">
                            <div className="company-name primary">
                                <div className="company-bullet primary"></div>
                                <span>네네 치킨</span>
                            </div>
                        </div>
                        <div className="competition-column secondary-column">
                            <div className="company-name secondary">
                                <div className="company-bullet secondary"></div>
                                <span>써브웨이</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}  