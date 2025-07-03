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
                label: '배달앱 수수료',
                data: [55, 51, 49, 48, 53, 45, 43, 37, 44, 42, 39, 37, 36],
                borderColor: '#6DD0C6',
                backgroundColor: '#6DD0C6',
                tension: 0,
                pointRadius: 2,
                pointBackgroundColor: '#6DD0C6',
                pointBorderColor: '#6DD0C6',
                borderWidth: 1,
            },
            {
                label: '원재료·인건비',
                data: [44, 41, 39, 38, 42, 37, 33, 39, 37, 42, 37, 33, 39],
                borderColor: '#FFB448',
                backgroundColor: '#FFB448',
                tension: 0,
                pointRadius: 2,
                pointBackgroundColor: '#FFB448',
                pointBorderColor: '#FFB448',
                borderWidth: 1,
            },
            {
                label: '프랜차이즈 소송',
                data: [30, 36, 32, 30, 26, 22, 18, 18, 20, 22, 24, 22, 18],
                borderColor: '#80CEFE',
                backgroundColor: '#80CEFE',
                tension: 0,
                pointRadius: 2,
                pointBackgroundColor: '#80CEFE',
                pointBorderColor: '#80CEFE',
                borderWidth: 1,
            },
            {
                label: '포화/폐점률',
                data: [32, 29, 30, 38, 27, 26, 33, 28, 25, 28, 24, 26, 33],
                borderColor: '#A7B100',
                backgroundColor: '#A7B100',
                tension: 0,
                pointRadius: 2,
                pointBackgroundColor: '#A7B100',
                pointBorderColor: '#A7B100',
                borderWidth: 1,
            },
            {
                label: '브랜드 다각화',
                data: [22, 19, 19, 22, 19, 17, 18, 20, 23, 20, 19, 17, 18],
                borderColor: '#98B5FF',
                backgroundColor: '#98B5FF',
                tension: 0,
                pointRadius: 2,
                pointBackgroundColor: '#98B5FF',
                pointBorderColor: '#98B5FF',
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
        <div style={{ width: '100%', height: '250px' }}>
            <Line data={data} options={options} />
        </div>
    );
}