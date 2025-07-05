import React, { useEffect, useState } from 'react';

export default function Section4_5() {
    return (
        <div className="page-section">
            <h4 className="h4 page-title">
                <span className="num">II.</span>
                경쟁사 인식 분석

                <h5 class="page-sub-title">4. 소비자 관심사 분석</h5>

                <p className="page-title-date">
                    <b>분석일자</b>
                    <span>2025.06.16 ~ 2025.06.22</span>
                </p>
            </h4>

        
            <div className="h15"></div>
            {/* 굽네 */}
            <div className="issue-chart-section othermargin2">
                <div className="issue-chart-section-inner interest">
                    <div className="issue-title">
                       굽네
                    </div>
                    <p className='text-interest'>고객 댓글에서는 굽네와 다양한 메뉴가 자주 언급되며, 이디야커피나 맘스터치 같은 인근 매장 및 경쟁 브랜드와의 연계 경험도 두드러집니다. 제품과 장소 키워드가 함께 등장하는 경우가 많아, 고객들이 메뉴의 다양성뿐만 아니라 브랜드 간의 시너지와 편의성, 그리고 맛과 경험을 비교하는 데 큰 가치를 두고 있음을 알 수 있습니다.</p>
                </div>
            </div>

            <div className="issue-chart-section othermargin2 interest">
                <div className="issue-chart-section-inner interest">
                    <div className="issue-title border-none">
                    연관어
                    </div>
                    <div className='inetrest-table-wrap'>
                        <div className='inetrest-table'>
                            <p className='inetrest-table-date'>2025.06.16</p>
                          <table>
                            <tr>
                                <th>순위</th>
                                <th>연관어</th>
                                <th>건수</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><span className="dot green"></span><span>피자</span></td>
                                <td>401</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><span className="dot primary"></span><span>처갓집양념치킨</span></td>
                                <td>393</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><span className="dot green"></span><span>커피</span></td>
                                <td>390</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><span className="dot green"></span><span>양념치킨</span></td>
                                <td>388</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td><span className="dot teal"></span><span>도미노피자</span></td>
                                <td>387</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td><span className="dot primary"></span><span>던킨</span></td>
                                <td>387</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td><span className="dot blue"></span><span>프렌차이즈</span></td>
                                <td>387</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td><span className="dot primary"></span><span>파크</span></td>
                                <td>387</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td><span className="dot green"></span><span>떡볶이</span></td>
                                <td>387</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td><span className="dot primary"></span><span>메가커피</span></td>
                                <td>387</td>
                            </tr>
                          </table>
                        </div>
                        {/* 2025.06.17 테이블 */}
                        <div className='inetrest-table'>
                        <p className='inetrest-table-date'>2025.06.17</p>
                        <table>
                            <tr>
                            <th>순위</th>
                            <th>연관어</th>
                            <th>건수</th>
                            </tr>
                            <tr><td>1</td><td><span className="dot green"></span>피자</td><td>475</td></tr>
                            <tr><td>2</td><td><span className="dot green"></span>떡볶이</td><td>459</td></tr>
                            <tr><td>3</td><td><span className="dot green"></span>롯데리아</td><td>458</td></tr>
                            <tr><td>4</td><td><span className="dot primary"></span>메가커피</td><td>457</td></tr>
                            <tr><td>5</td><td><span className="dot blue"></span>프렌차이즈</td><td>457</td></tr>
                            <tr><td>6</td><td><span className="dot primary"></span>카페</td><td>457</td></tr>
                            <tr><td>7</td><td><span className="dot green"></span>이디야</td><td>456</td></tr>
                            <tr><td>8</td><td><span className="dot green"></span>커피</td><td>456</td></tr>
                            <tr><td>9</td><td><span className="dot primary"></span>창업</td><td>455</td></tr>
                            <tr><td>10</td><td><span className="dot primary"></span>투썸</td><td>455</td></tr>
                        </table>
                        </div>
                        {/* 2025.06.18 테이블 */}
                        <div className='inetrest-table'>
                        <p className='inetrest-table-date'>2025.06.18</p>
                        <table>
                            <tr>
                            <th>순위</th>
                            <th>연관어</th>
                            <th>건수</th>
                            </tr>
                            <tr><td>1</td><td><span className="dot green"></span>롯데리아</td><td>402</td></tr>
                            <tr><td>2</td><td><span className="dot green"></span>커피</td><td>400</td></tr>
                            <tr><td>3</td><td><span className="dot green"></span>피자</td><td>400</td></tr>
                            <tr><td>4</td><td><span className="dot purple"></span>터치</td><td>398</td></tr>
                            <tr><td>5</td><td><span className="dot primary"></span>맘스터치</td><td>397</td></tr>
                            <tr><td>6</td><td><span className="dot primary"></span>투썸</td><td>397</td></tr>
                            <tr><td>7</td><td><span className="dot primary"></span>메가커피</td><td>396</td></tr>
                            <tr><td>8</td><td><span className="dot primary"></span>카페</td><td>396</td></tr>
                            <tr><td>9</td><td><span className="dot primary"></span>창업</td><td>395</td></tr>
                            <tr><td>10</td><td><span className="dot primary"></span>이디야</td><td>395</td></tr>
                        </table>
                        </div>
                        {/* 2025.06.19 테이블 */}
                        <div className='inetrest-table'>
                            <p className='inetrest-table-date'>2025.06.19</p>
                            <table>
                                <tr>
                                <th>순위</th>
                                <th>연관어</th>
                                <th>건수</th>
                                </tr>
                                <tr><td>1</td><td><span className="dot primary"></span>매장</td><td>36</td></tr>
                                <tr><td>2</td><td><span className="dot blue"></span>이벤트</td><td>36</td></tr>
                                <tr><td>3</td><td><span className="dot blue"></span>대상</td><td>33</td></tr>
                                <tr><td>4</td><td><span className="dot blue"></span>정보</td><td>31</td></tr>
                                <tr><td>5</td><td><span className="dot green"></span>떡볶이</td><td>30</td></tr>
                                <tr><td>6</td><td><span className="dot primary"></span>맘스터치</td><td>30</td></tr>
                                <tr><td>7</td><td><span className="dot primary"></span>메뉴</td><td>29</td></tr>
                                <tr><td>8</td><td><span className="dot blue"></span>프렌차이즈</td><td>28</td></tr>
                                <tr><td>9</td><td><span className="dot green"></span>피자</td><td>28</td></tr>
                                <tr><td>10</td><td><span className="dot blue"></span>지역</td><td>27</td></tr>
                            </table>
                        </div>
                        <div>
                            {/* 키워드 */}
                            <div className="keyword-legend-list">
                              <div className="keyword-legend-item"><span className="keyword-legend-dot dot-time"></span>시간</div>
                              <div className="keyword-legend-item"><span className="keyword-legend-dot dot-place"></span>장소</div>
                              <div className="keyword-legend-item"><span className="keyword-legend-dot dot-situation"></span>상황</div>
                              <div className="keyword-legend-item"><span className="keyword-legend-dot dot-person"></span>인물</div>
                              <div className="keyword-legend-item"><span className="keyword-legend-dot dot-group"></span>단체</div>
                              <div className="keyword-legend-item"><span className="keyword-legend-dot dot-product"></span>상품</div>
                              <div className="keyword-legend-item"><span className="keyword-legend-dot dot-brand"></span>브랜드</div>
                              <div className="keyword-legend-item"><span className="keyword-legend-dot dot-issue"></span>시사/경제</div>
                              <div className="keyword-legend-item"><span className="keyword-legend-dot dot-culture"></span>문화/여가</div>
                              <div className="keyword-legend-item"><span className="keyword-legend-dot dot-nature"></span>자연/환경</div>
                              <div className="keyword-legend-item"><span className="keyword-legend-dot dot-daily"></span>일상/생활</div>
                              <div className="keyword-legend-item"><span className="keyword-legend-dot dot-attribute"></span>속성</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 교촌 */}
            <div className="issue-chart-section othermargin2 ">
              <div className="issue-chart-section-inner interest">
                <div className="issue-title">
                  교촌
                </div>
                <p className='text-interest'>교촌치킨 관련 댓글에서는 치킨을 중심으로 떡볶이, 피자, 커피 등 다양한 메뉴와 브랜드가 함께 언급되며, 복합적인 외식 경험과 브랜드 간 비교, 그리고 창업에 대한 관심이 두드러집니다. 이는 교촌치킨이 단순 치킨 브랜드를 넘어 다양한 메뉴와 외식 트렌드, 창업 시장에서 강한 영향력을 갖고 있음을 보여줍니다.</p>
              </div>
            </div>
            <div className="issue-chart-section othermargin2 interest">
              <div className="issue-chart-section-inner interest">
                <div className="issue-title  border-none">
                  연관어
                </div>
                <div className='inetrest-table-wrap'>
                  {/* 2025.06.16 */}
                  <div className='inetrest-table'>
                    <p className='inetrest-table-date'>2025.06.16</p>
                    <table>
                      <tr><th>순위</th><th>연관어</th><th>건수</th></tr>
                      <tr><td>1</td><td><span className="dot green"></span>커피</td><td>658</td></tr>
                      <tr><td>2</td><td><span className="dot green"></span>떡볶이</td><td>650</td></tr>
                      <tr><td>3</td><td><span className="dot primary"></span>카페</td><td>645</td></tr>
                      <tr><td>4</td><td><span className="dot green"></span>스타벅스</td><td>641</td></tr>
                      <tr><td>5</td><td><span className="dot primary"></span>창업</td><td>638</td></tr>
                      <tr><td>6</td><td><span className="dot green"></span>bhc</td><td>631</td></tr>
                      <tr><td>7</td><td><span className="dot green"></span>디저트</td><td>630</td></tr>
                      <tr><td>8</td><td><span className="dot green"></span>피자</td><td>630</td></tr>
                      <tr><td>9</td><td><span className="dot blue"></span>프렌차이즈</td><td>629</td></tr>
                      <tr><td>10</td><td><span className="dot green"></span>롯데리아</td><td>627</td></tr>
                    </table>
                  </div>
                  {/* 2025.06.17 */}
                  <div className='inetrest-table'>
                    <p className='inetrest-table-date'>2025.06.17</p>
                    <table>
                      <tr><th>순위</th><th>연관어</th><th>건수</th></tr>
                      <tr><td>1</td><td><span className="dot primary"></span>카페</td><td>788</td></tr>
                      <tr><td>2</td><td><span className="dot green"></span>떡볶이</td><td>785</td></tr>
                      <tr><td>3</td><td><span className="dot primary"></span>맘스터치</td><td>783</td></tr>
                      <tr><td>4</td><td><span className="dot primary"></span>메가커피</td><td>780</td></tr>
                      <tr><td>5</td><td><span className="dot blue"></span>프랜차이즈</td><td>780</td></tr>
                      <tr><td>6</td><td><span className="dot primary"></span>창업</td><td>779</td></tr>
                      <tr><td>7</td><td><span className="dot primary"></span>투썸</td><td>778</td></tr>
                      <tr><td>8</td><td><span className="dot primary"></span>터치</td><td>777</td></tr>
                      <tr><td>9</td><td><span className="dot primary"></span>투썸플레이스</td><td>776</td></tr>
                      <tr><td>10</td><td><span className="dot green"></span>bhc</td><td>776</td></tr>
                    </table>
                  </div>
                  {/* 2025.06.18 */}
                  <div className='inetrest-table'>
                    <p className='inetrest-table-date'>2025.06.18</p>
                    <table>
                      <tr><th>순위</th><th>연관어</th><th>건수</th></tr>
                      <tr><td>1</td><td><span className="dot blue"></span>프랜차이즈</td><td>866</td></tr>
                      <tr><td>2</td><td><span className="dot purple"></span>터치</td><td>854</td></tr>
                      <tr><td>3</td><td><span className="dot green"></span>커피</td><td>848</td></tr>
                      <tr><td>4</td><td><span className="dot primary"></span>창업</td><td>840</td></tr>
                      <tr><td>5</td><td><span className="dot primary"></span>카페</td><td>839</td></tr>
                      <tr><td>6</td><td><span className="dot green"></span>떡볶이</td><td>837</td></tr>
                      <tr><td>7</td><td><span className="dot green"></span>파리바게트</td><td>834</td></tr>
                      <tr><td>8</td><td><span className="dot green"></span>롯데리아</td><td>831</td></tr>
                      <tr><td>9</td><td><span className="dot primary"></span>메가커피</td><td>830</td></tr>
                      <tr><td>10</td><td><span className="dot green"></span>서브웨이</td><td>829</td></tr>
                    </table>
                  </div>
                  {/* 2025.06.19 */}
                  <div className='inetrest-table'>
                    <p className='inetrest-table-date'>2025.06.19</p>
                    <table>
                      <tr><th>순위</th><th>연관어</th><th>건수</th></tr>
                      <tr><td>1</td><td><span className="dot blue"></span>프랜차이즈</td><td>666</td></tr>
                      <tr><td>2</td><td><span className="dot primary"></span>창업</td><td>618</td></tr>
                      <tr><td>3</td><td><span className="dot green"></span>떡볶이</td><td>612</td></tr>
                      <tr><td>4</td><td><span className="dot green"></span>커피</td><td>606</td></tr>
                      <tr><td>5</td><td><span className="dot green"></span>피자</td><td>602</td></tr>
                      <tr><td>6</td><td><span className="dot primary"></span>맘스터치</td><td>601</td></tr>
                      <tr><td>7</td><td><span className="dot green"></span>롯데리아</td><td>600</td></tr>
                      <tr><td>8</td><td><span className="dot primary"></span>투썸</td><td>600</td></tr>
                      <tr><td>9</td><td><span className="dot primary"></span>터치</td><td>600</td></tr>
                      <tr><td>10</td><td><span className="dot primary"></span>투썸플레이스</td><td>599</td></tr>
                    </table>
                  </div>
                  {/* 키워드 범례 */}
                  <div>
                    <div className="keyword-legend-list">
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-time"></span>시간</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-place"></span>장소</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-situation"></span>상황</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-person"></span>인물</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-group"></span>단체</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-product"></span>상품</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-brand"></span>브랜드</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-issue"></span>시사/경제</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-culture"></span>문화/여가</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-nature"></span>자연/환경</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-daily"></span>일상/생활</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-attribute"></span>속성</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* bhc */}
            <div className="issue-chart-section othermargin2 ">
              <div className="issue-chart-section-inner interest">
                <div className="issue-title">
                  bhc
                </div>
                <p className='text-interest'>BHC치킨 관련 댓글에서는 치킨을 중심으로 피자, 떡볶이, 커피 등 다양한 메뉴와 브랜드가 함께 언급되며, 복합적인 외식 경험과 브랜드 간 비교, 창업에 대한 관심이 두드러집니다. 이는 BHC가 메뉴 다변화와 프랜차이즈 확장, 소비자 경험 혁신을 통해 치킨 시장에서 강한 경쟁력을 유지하고 있음을 보여줍니다.</p>
              </div>
            </div>
            <div className="issue-chart-section othermargin2 interest interest-last-table">
              <div className="issue-chart-section-inner interest">
                <div className="issue-title border-none">
                  연관어
                </div>
                <div className='inetrest-table-wrap'>
                  {/* 2025.06.16 */}
                  <div className='inetrest-table'>
                    <p className='inetrest-table-date'>2025.06.16</p>
                    <table>
                      <tr><th>순위</th><th>연관어</th><th>건수</th></tr>
                      <tr><td>1</td><td><span className="dot green"></span>교촌</td><td>651</td></tr>
                      <tr><td>2</td><td><span className="dot primary"></span>스타벅스</td><td>647</td></tr>
                      <tr><td>3</td><td><span className="dot purple"></span>터치</td><td>646</td></tr>
                      <tr><td>4</td><td><span className="dot green"></span>피자</td><td>644</td></tr>
                      <tr><td>5</td><td><span className="dot primary"></span>맘스터치</td><td>642</td></tr>
                      <tr><td>6</td><td><span className="dot primary"></span>카페</td><td>641</td></tr>
                      <tr><td>7</td><td><span className="dot green"></span>떡볶이</td><td>635</td></tr>
                      <tr><td>8</td><td><span className="dot green"></span>롯데리아</td><td>632</td></tr>
                      <tr><td>9</td><td><span className="dot green"></span>교촌치킨</td><td>631</td></tr>
                      <tr><td>10</td><td><span className="dot primary"></span>투썸</td><td>629</td></tr>
                    </table>
                  </div>
                  {/* 2025.06.17 */}
                  <div className='inetrest-table'>
                    <p className='inetrest-table-date'>2025.06.17</p>
                    <table>
                      <tr><th>순위</th><th>연관어</th><th>건수</th></tr>
                      <tr><td>1</td><td><span className="dot green"></span>교촌</td><td>794</td></tr>
                      <tr><td>2</td><td><span className="dot green"></span>피자</td><td>791</td></tr>
                      <tr><td>3</td><td><span className="dot primary"></span>카페</td><td>785</td></tr>
                      <tr><td>4</td><td><span className="dot primary"></span>투썸</td><td>782</td></tr>
                      <tr><td>5</td><td><span className="dot primary"></span>투썸플레이스</td><td>779</td></tr>
                      <tr><td>6</td><td><span className="dot green"></span>롯데리아</td><td>778</td></tr>
                      <tr><td>7</td><td><span className="dot green"></span>떡볶이</td><td>778</td></tr>
                      <tr><td>8</td><td><span className="dot green"></span>커피</td><td>777</td></tr>
                      <tr><td>9</td><td><span className="dot primary"></span>메가커피</td><td>776</td></tr>
                      <tr><td>10</td><td><span className="dot green"></span>교촌치킨</td><td>776</td></tr>
                    </table>
                  </div>
                  {/* 2025.06.18 */}
                  <div className='inetrest-table'>
                    <p className='inetrest-table-date'>2025.06.18</p>
                    <table>
                      <tr><th>순위</th><th>연관어</th><th>건수</th></tr>
                      <tr><td>1</td><td><span className="dot green"></span>피자</td><td>768</td></tr>
                      <tr><td>2</td><td><span className="dot blue"></span>프랜차이즈</td><td>746</td></tr>
                      <tr><td>3</td><td><span className="dot purple"></span>배스킨라빈스</td><td>741</td></tr>
                      <tr><td>4</td><td><span className="dot primary"></span>스타벅스</td><td>717</td></tr>
                      <tr><td>5</td><td><span className="dot primary"></span>식당</td><td>711</td></tr>
                      <tr><td>6</td><td><span className="dot green"></span>교촌</td><td>697</td></tr>
                      <tr><td>7</td><td><span className="dot green"></span>상권</td><td>687</td></tr>
                      <tr><td>8</td><td><span className="dot primary"></span>카페</td><td>684</td></tr>
                      <tr><td>9</td><td><span className="dot green"></span>떡볶이</td><td>678</td></tr>
                      <tr><td>10</td><td><span className="dot green"></span>롯데리아</td><td>677</td></tr>
                    </table>
                  </div>
                  {/* 2025.06.19 */}
                  <div className='inetrest-table'>
                    <p className='inetrest-table-date'>2025.06.19</p>
                    <table>
                      <tr><th>순위</th><th>연관어</th><th>건수</th></tr>
                      <tr><td>1</td><td><span className="dot green"></span>교촌</td><td>452</td></tr>
                      <tr><td>2</td><td><span className="dot green"></span>피자</td><td>445</td></tr>
                      <tr><td>3</td><td><span className="dot purple"></span>터치</td><td>443</td></tr>
                      <tr><td>4</td><td><span className="dot primary"></span>맘스터치</td><td>441</td></tr>
                      <tr><td>5</td><td><span className="dot primary"></span>스타벅스</td><td>440</td></tr>
                      <tr><td>6</td><td><span className="dot green"></span>교촌치킨</td><td>435</td></tr>
                      <tr><td>7</td><td><span className="dot primary"></span>카페</td><td>435</td></tr>
                      <tr><td>8</td><td><span className="dot green"></span>떡볶이</td><td>435</td></tr>
                      <tr><td>9</td><td><span className="dot primary"></span>투썸</td><td>432</td></tr>
                      <tr><td>10</td><td><span className="dot primary"></span>투썸플레이스</td><td>431</td></tr>
                    </table>
                  </div>
                  {/* 키워드 범례 */}
                  <div>
                    <div className="keyword-legend-list">
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-time"></span>시간</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-place"></span>장소</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-situation"></span>상황</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-person"></span>인물</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-group"></span>단체</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-product"></span>상품</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-brand"></span>브랜드</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-issue"></span>시사/경제</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-culture"></span>문화/여가</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-nature"></span>자연/환경</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-daily"></span>일상/생활</div>
                      <div className="keyword-legend-item"><span className="keyword-legend-dot dot-attribute"></span>속성</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
    );
}