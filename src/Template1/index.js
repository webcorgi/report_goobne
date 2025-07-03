import React from 'react';
import { useEffect, useState } from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section3_2 from "./components/Section3_2";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import { useRecoilState } from 'recoil';
import { themeState } from '../recoil/atom';


const Template1 = () => {
    /****************************************
     * START - 컬러 설정
     *****************************************/
    const [theme, setTheme] = useRecoilState(themeState);

    // 백엔드에서 색상 정보 가져오기
    useEffect(() => {
        // 예시: 실제로는 API 호출로 대체
        const fetchColors = async () => {
            try {
                // const response = await fetch('/api/theme-colors');
                // const colors = await response.json();
                const colors = {
                    primary: '#E84E3D',
                    primaryDarker: '#003880',
                    primaryAccent: '#56ade8',
                    darkBlue: '#0269c8',
                    darkBlueAccent: '#003880',
                    skyBlue1:'#24b6fa',
                    skyBlue2:'#56ade8',
                    black: '#22252a',
                    subtext: '#495056',
                    blackAccent: '#7f7f7f',
                    bgPrimary: 'rgb(61 128 232 / 10%)',
                    background: '#f4f4f6',
                    gray01: '#dee1e6',
                    gray02: '#626262',
                    newsTitleBg:'linear-gradient(to right, var(--bgPrimary), rgba(242, 243, 245, 0.5))',
                    tablethBg:'#FCE4E2',
                    // 차트 테마 컬러
                };
                setTheme(colors);
            } catch (error) {
                console.error('색상을 가져오는 데 실패했습니다:', error);
            }
        };

        fetchColors();
    }, []);

    // CSS 변수 적용
    useEffect(() => {
        const root = document.documentElement;
        Object.entries(theme).forEach(([key, value]) => {
            if (typeof value === 'object') {
                // 중첩된 객체의 경우 (차트 테마 등)
                Object.entries(value).forEach(([subKey, subValue]) => {
                    root.style.setProperty(`--${key}-${subKey}`, subValue);
                });
            } else {
                root.style.setProperty(`--${key}`, value);
            }
        });
    }, [theme]);
    /****************************************
     * END - 컬러 설정
     *****************************************/

    return (
        <div className="App">
            <div className="wrap">
                <div className="content">
                    <Section1/>
                    <Section2/>
                    <Section3/>
                    <Section3_2/>
                    {/* <Section4/> */}
                    <Section5/>
                    <Section6/>
                    <Section7/>
                    <Section8/>
                    <Section9/>
                    <Section10/>
                </div>
            </div>
        </div>
    );
};

export default Template1;