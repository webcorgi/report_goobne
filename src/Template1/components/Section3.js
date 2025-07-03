import BarChart from "../chart/section3/BarChart";


export default function Section3() {
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
            <h5 className="page-sub-title">1. 산업 주요 이슈</h5>
            <ul className="issue-list">
                <li>
                    <span>1. </span>
                    <p>배달앱 수수료 부담 및 규제 논의:   치킨 프랜차이즈는 매출의 30~40%가 배달앱 수수료, 광고비 등으로 소모돼 "팔수록 적자"라는 점주 불만이 커지고, 수수료 상한제 등 제도 개선 요구가 확산.</p>
                </li>
                <li><span>2. </span>
                    <p>원재료·인건비 상승과 외식 물가 인상 압박 : 닭고기 등 원재료와 인건비 상승으로 치킨 가격 인상 압력이 커지며, 외식 물가가 전체 물가보다 빠르게 올라 소비 위축과 자영업자 경영난이 심화.</p>
                </li>
                <li><span>3. </span>
                    <p>프랜차이즈 유통마진(차액가맹금) 소송 확산 :  피자헛 점주 승소 이후 치킨 프랜차이즈 등에서도 유통마진 반환 소송이 확산, 최대 1조원대 손해배상 가능성이 제기되며 본사-점주 간 신뢰와 투명성 요구가 커짐</p>
                </li>
                <li><span>4. </span>
                    <p>포화상태와 폐점률 증가, 경쟁 심화 :  국내 치킨집 수는 약 3만 개로 포화 상태이며, 폐점률이 10%를 넘고 30%가 연매출 1억 미만으로 수익성 악화와 브랜드 간 경쟁이 더욱 치열해지고 있음</p>
                </li>
                <li><span>5. </span>
                    <p>브랜드 다각화·글로벌 진출 및 트렌드 변화 : BBQ, 굽네 등 대형 프랜차이즈는 다양한 외식 카테고리와 해외 시장으로 사업을 확장하며, 현지화 전략과 트렌드 변화에 적극 대응하고 있음</p>
                </li>
            </ul>

            <div className="news-list">
                <h5 className="news-title">연관 뉴스</h5>
                <ul className="news-list-ul">
                    <li>
                        <a href="#" className="news-item-title">배달앱 '배달의민족' 운영사, 1만원 이하 소액주문 중개수수료 면제 추진</a>
                        <span>한겨레 ｜ 2025-06-19</span>
                    </li>
                    <li>
                        <a href="#" className="news-item-title">‘플랫폼 수수료 상한제’는 상생 위한 브레이크</a>
                        <span>중기이코노미 ｜ 2025-06-19</span>
                    </li>
                    <li>
                        <a href="#" className="news-item-title">BBQ, 물가 안정 동참 선언···“배달 수수료 부담 완화 시급”  </a>
                        <span>여성경제신문 ｜ 2025-06-19</span>
                    </li>
                    <li>
                        <a href="#" className="news-item-title">‘태풍의 눈’ 프랜차이즈 유통마진, 1조원대 소송으로 번지나</a>
                        <span>파이낸셜뉴스 ｜ 2025-06-17</span>
                    </li>
                    <li>
                        <a href="#" className="news-item-title">소송·수익악화·플랫폼 부담까지…사면초가 빠진 프랜차이즈</a>
                        <span>더벨 ｜ 2025-06-19</span>
                    </li>
                    <li>
                        <a href="#" className="news-item-title">브랜드 다각화 나선 BBQ, '베테랑' 백승혁 CSO 영입</a>
                        <span>파이낸셜뉴스 ｜ 2025-06-17</span>
                    </li>
                    <li>
                        <a href="#" className="news-item-title">윤홍근 KIVA 서울외교자원봉사회 총회장 취임, 113개 대사관과 협력</a>
                        <span>전북도민일보 ｜ 2025-06-22</span>
                    </li>

                </ul>
              
            </div>
        </div>
    );
}