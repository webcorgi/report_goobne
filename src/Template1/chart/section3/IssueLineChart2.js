import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';
import { useRecoilState } from 'recoil';
import { themeState } from '../../../recoil/atom';

ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

export default function IssueLineChart() {
    const [theme, setTheme] = useRecoilState(themeState);
    const labels = [
        '6월10일',
        '6월11일',
        '6월12일',
        '6월13일',
        '6월14일',
        '6월15일',
        '6월16일',
        '6월17일',
        '6월18일',
        '6월19일',
        '6월20일',
        '6월21일',
        '6월22일'
    ];

    const data = {
        labels,
        datasets: [
            {
                label: '가격인상',
                data: [45, 38, 50, 42, 47, 39, 41, 44, 48, 46, 43, 40, 49],
                borderColor: '#6DD0C6',
                backgroundColor: '#6DD0C6',
                tension: 0,
                pointRadius: 2,
                pointBackgroundColor: '#6DD0C6',
                pointBorderColor: '#6DD0C6',
                borderWidth: 1,
            },
            {
                label: '자사앱',
                data: [32, 35, 37, 33, 36, 34, 38, 31, 39, 37, 35, 36, 32],
                borderColor: '#FFB448',
                backgroundColor: '#FFB448',
                tension: 0,
                pointRadius: 2,
                pointBackgroundColor: '#FFB448',
                pointBorderColor: '#FFB448',
                borderWidth: 1,
            },
            {
                label: '신메뉴',
                data: [28, 30, 29, 31, 27, 32, 30, 29, 28, 33, 31, 30, 32],
                borderColor: '#80CEFE',
                backgroundColor: '#80CEFE',
                tension: 0,
                pointRadius: 2,
                pointBackgroundColor: '#80CEFE',
                pointBorderColor: '#80CEFE',
                borderWidth: 1,
            },
            {
                label: '제휴',
                data: [22, 25, 23, 24, 26, 21, 27, 23, 25, 22, 24, 26, 23],
                borderColor: '#A7B100',
                backgroundColor: '#A7B100',
                tension: 0,
                pointRadius: 2,
                pointBackgroundColor: '#A7B100',
                pointBorderColor: '#A7B100',
                borderWidth: 1,
            },
            {
                label: '사회공헌',
                data: [18, 20, 19, 21, 17, 22, 20, 19, 18, 23, 21, 20, 22],
                borderColor: '#98B5FF',
                backgroundColor: '#98B5FF',
                tension: 0,
                pointRadius: 2,
                pointBackgroundColor: '#98B5FF',
                pointBorderColor: '#98B5FF',
                borderWidth: 1,
            },
            {
                label: '상생경영',
                data: [15, 17, 16, 18, 14, 19, 17, 16, 15, 20, 18, 17, 19],
                borderColor: '#C7A1D4',
                backgroundColor: '#C7A1D4',
                tension: 0,
                pointRadius: 2,
                pointBackgroundColor: '#C7A1D4',
                pointBorderColor: '#C7A1D4',
                borderWidth: 1,
            },
            {
                label: '프렌차이즈',
                data: [12, 14, 13, 15, 11, 16, 14, 13, 12, 17, 15, 14, 16],
                borderColor: '#D3DE18',
                backgroundColor: '#D3DE18',
                tension: 0,
                pointRadius: 2,
                pointBackgroundColor: '#D3DE18',
                pointBorderColor: '#D3DE18',
                borderWidth: 1,
            },
            {
                label: '체험형',
                data: [10, 12, 11, 13, 9, 14, 12, 11, 10, 15, 13, 12, 14],
                borderColor: '#F3A69E',
                backgroundColor: '#F3A69E',
                tension: 0,
                pointRadius: 2,
                pointBackgroundColor: '#F3A69E',
                pointBorderColor: '#F3A69E',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
        legend: {
            position: 'bottom',
            labels: {
            font: {
                size: 8,
                color:"#000000",
            },
            usePointStyle: true,
            pointStyle: 'circle',
            padding: 12,
            },
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
        datalabels: {
            display: false,
        },
        },
        scales: {
        x: {
            grid: {
            display: true,
            color: '#f0f0f0',
            },
            ticks: {
            color: '#858E95',
            font: {
                size: 8,
            },
            },
        },
        y: {
            beginAtZero: false,
            min: 15,
            max: 55,
            grid: {
            color: '#f0f0f0',
            },
            ticks: {
            color: '#858E95',
            font: {
                size: 8,
            },
            stepSize: 5,
            },
        },
        },
        interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false,
        },
    };

    return (
        <div style={{ width: '100%', height: '280px' }}>
            <Line data={data} options={options} />
        </div>
    );
}