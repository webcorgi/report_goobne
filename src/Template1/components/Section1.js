import logo from "../../img/logo.svg";
import logoVaivFooter from "../../img/logo_vaiv_footer.png";
import cover from "../../img/cover.png";
import coverOuter from "../../img/cover_outer.png";

export default function Section1() {
    return (
        <div className="page-section cover section1-print">
           
            {/* Enterprise Content Layout */}
            <div className="enterprise-container">
                <header className="corporate-header">
                    <div className="logo-section">
                        <img src={logo} alt="굽네치킨" className="enterprise-logo" />
                    </div>
                </header>
                
                <main className="content-area">
                    <div className="report-info">
                        <h1 className="corporate-title">
                            AI보고서 경쟁사 분석
                        </h1>
                        
                        <div className="report-subject">
                            <span className="subject-text">치킨 프랜차이즈</span><br />
                            <span className="subject-text2">(2024.11.04~2024.11.10)</span>
                        </div>

                        <div className="report-details-wrap">
                            <div className="report-details">
                                <p className="details-label">분석범위</p>
                                <p className="details-text">전라남도 12개 전략 산업</p>
                            </div>
                            <div className="report-details">
                                <p className="details-label">제공주기</p>
                                <p className="details-text">매주 금요일 생성</p>
                            </div>
                            <div className="report-details">
                                <p className="details-label">대상 매체 및<br />데이터 출처</p>
                                <p className="details-text">
                                뉴스 (네이버,다음,기타 언론사),<br />
                                소셜미디어 (유투브,인스타그램, 트위터(X),커뮤니티,네이버 카페,다음 카페,
                                네이버블로그)<br />
                                댓글 (모든 매체)
                                <br /><br />
                                방송TCI 지수, 맛집데이터, 브랜드 지수, VISS 지수, SNS 쇼핑 트렌드,  식품 도메인 트렌드, BRI 지수, 맛집 데이터, 국내 주요 증권사 분석 리포트, 국재 상장사 재무 데이터, 국내 상장사 잠정공시/감사
                                보고서 데이터,  국내 상장사 주요 지표 데이터
                                </p>
                            </div>
                            <div className="report-details">
                                <p className="details-label">분석 목표</p>
                                <p className="details-text">
                                    키워드에 대한 대상매체별 1주일간의 뉴스 및 소셜미디어를 분석하여
                                    경쟁사의 활동과 시장 변화에 대한 정보 도출
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
                
                <footer className="enterprise-footer">
                    <div className="footer-content">
                        <div className="vaiv-section">
                            <div className="vaiv-logo-container">
                                <img src={logoVaivFooter} alt="VAIV" className="vaiv-enterprise" />
                            </div>
                            <div className="vaiv-print hidden-print">
                                <span className="vaiv-text">VAIV</span>
                            </div>
                        </div>
                        <div className="footer-info">
                            <p className="footer-note">
                            * 본 AI 리포트는 (주)바이브컴퍼니의 VAIVGeM과 chatgpt를 활용하여 작성 되었습니다.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
            <img src={cover} alt="cover" className="cover-image" />
            <img src={coverOuter} alt="cover-outer" className="cover-outer" />
        </div>
    );
}