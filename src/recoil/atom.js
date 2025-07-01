import { atom } from 'recoil';

export const themeState = atom({
    key: 'themeState',
    default: {
        primary: '#0269c8',
        primaryDarker: '#003880',
        primaryAccent: '#56ade8',
        darkBlue: '#0269c8',
        darkBlueAccent: '#003880',
        skyBlue1: '#24b6fa',
        skyBlue2: '#56ade8',
        black: '#22252a',
        blackAccent: '#7f7f7f',
        bgPrimary: 'rgb(61 128 232 / 10%)',
        background: '#f4f4f6',
        gray01: '#dee1e6',
        gray02: '#626262',
        newsTitleBg: 'linear-gradient(to right, var(--bgPrimary), rgba(242, 243, 245, 0.5))',
        // Sentiment colors
        positive: '#0269c8',
        negative: '#7f7f7f',
        neutral: '#24b6fa'
    }
});
