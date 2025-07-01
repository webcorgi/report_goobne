import React, { useEffect, useState } from 'react';
import newsLogo from '../../img/placeholder.svg';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../recoil/atom';

export default function Section4() {
    const theme = useRecoilValue(themeState);
    const [sentimentColors, setSentimentColors] = useState({
        positive: '#0269c8',
        negative: '#7f7f7f',
        neutral: '#24b6fa'
    });

    // 테마 변경시 색상 업데이트 - atom에서 값 직접 가져오기
    useEffect(() => {
        if (theme) {
            setSentimentColors({
                positive: theme.positive,
                negative: theme.negative,
                neutral: theme.neutral
            });
        }
    }, [theme]);

    const newsCategories = [
        {
            id: 1,
            title: "1. 수입식품업체의 원료 소비기한 조작 사건",
            items: [
                {
                    source: "생활법",
                    title: "수입식품업체서 '원료 소비기한' 조작 납품...유명 식품업체 식품...",
                    link: "https://www.foodnews.co.kr/news/articleView.html?idxno=112347",
                    date: "2025.03.15",
                    comments: 1,
                    sentiment: "negative"
                },
                {
                    source: "조세일보",
                    title: "소비기한 지난 원료 납품...'유명 치킨 브랜드도 당했다'",
                    link: "https://www.joseilbo.com/news/htmls/2025/03/20250315538846.html",
                    date: "2025.03.15",
                    comments: 3,
                    sentiment: "negative"
                }
            ]
        },
        {
            id: 2,
            title: "2. 매출 감소",
            items: [
                {
                    source: "네이트",
                    title: "\"비싸도 사 먹는데\"...외식업계 매출은 5개월째 '뒷걸음'",
                    link: "https://news.nate.com/view/20250315n11824",
                    date: "2025.03.15",
                    comments: 4,
                    sentiment: "neutral"
                },
                {
                    source: "다음뉴스",
                    title: "식당·주점 등 업종불문 외식업 다 악화...\"올해가 더 걱정\"",
                    link: "https://v.daum.net/v/20250310060200427",
                    date: "2025.03.10",
                    comments: 2,
                    sentiment: "negative"
                }
            ]
        },
        {
            id: 3,
            title: "3. 배달의민족 포장 주문 수수료 부과 발표",
            items: [
                {
                    source: "국제신문",
                    title: "\"배민 '포장주문 수수료', 음식가격 인상으로 이어질 것\"",
                    link: "https://www.kookje.co.kr/news2011/asp/newsbody.asp?",
                    date: "2025.03.14",
                    comments: 2,
                    sentiment: "neutral"
                },
                {
                    source: "시사저널",
                    title: "소비자단체 \"포장 주문에도 배달 앱 수수료...음식값 상승 우려\"",
                    link: "https://www.sisajournal.com/news/articleView.html?idxno=327015",
                    date: "2025.03.14",
                    comments: 0,
                    sentiment: "negative"
                },
                {
                    source: "연합뉴스",
                    title: "소비자단체 \"배달앱, 포장주문에도 수수료...물가상승 촉발 우려\"",
                    link: "https://www.yna.co.kr/view/AKR20250314058000030?input=1195m",
                    date: "2025.03.14",
                    comments: 0,
                    sentiment: "positive"
                }
            ]
        },
        {
            id: 4,
            title: "4. 글로벌 확장 및 시장 다각화",
            items: [
                {
                    source: "SR타임스",
                    title: "사업다각화·신메뉴 출시로 외연확장하는 K치킨 3사",
                    link: "https://www.srtimes.kr/news/articleView.html?idxno=173713",
                    date: "2025.03.14",
                    comments: 0,
                    sentiment: "negative"
                }
            ]
        },
        {
            id: 5,
            title: "5. 치킨 전문점 브랜드평판 순위 발표",
            items: [
                {
                    source: "ZUM",
                    title: "[브랜드평판] 치킨 전문점 2025년 3월 빅데이터 1위 BBQ, 2위 교촌치킨, 3위 굽네치킨",
                    link: "https://news.zum.com/articles/96863538?utm_source=chatgpt.com",
                    date: "2025.03.14",
                    comments: 0,
                    sentiment: "neutral"
                }
            ]
        }
    ];

    const getSentimentText = (sentiment) => {
        switch(sentiment) {
            case 'positive':
                return '긍정';
            case 'negative':
                return '부정';
            case 'neutral':
                return '중립';
            default:
                return '';
        }
    };

    return (
        <>
        <div className="page-section">
            <h4 className="h4 page-title">
                {/* <span className="num">Ⅲ.</span> */}
                뉴스 분석
            </h4>
            <h5 className="h5">1. 상세 기사 목록</h5>
            {/* This section is visible both on screen and in print */}
            <div className="news-section">
                {newsCategories.map(category => (
                    <div className="news-category" key={category.id}>
                        <div className="category-title">{category.title}</div>
                        {category.items.map((item, index) => (
                            <div className="news-item" key={index}>
                                <div className="news-source">
                                    <div className="news-logo">
                                        <img src={newsLogo} alt={item.source} />
                                    </div>
                                </div>
                                <div className="news-content">
                                    <div className="news-title">{item.title}</div>
                                    <div className="news-link-wrapper">
                                        <a className="news-link" href={item.link}>{item.link}</a>
                                        <span className="news-date">|  {item.date}</span>
                                    </div>
                                </div>
                                <div className="news-meta">
                                    <span className="view-count">댓글 {item.comments}건</span>
                                    <div className="sentiment-icons">
                                        <span className={`sentiment-dot ${item.sentiment}`}></span>
                                        <span className={`sentiment-text ${item.sentiment}`}>
                                            {getSentimentText(item.sentiment)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        {/* 뉴스 분석 끝 */}
        </>
    );
}  