import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

const SentimentBarChartBhc = () => {
  const chartRef = useRef(null);
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        setIsReady(true);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      if (chartRef.current) {
        try {
          chartRef.current.destroy();
        } catch (error) {
          console.warn('Chart destruction error:', error);
        }
      }
    };
  }, []);

  // 100% 스택 막대차트 - 모든 막대가 동일한 높이
  // 원본 데이터 비율을 유지하면서 각 막대를 100%로 정규화
  const originalData = [
    { positive: 12, negative: 18, neutral: 25 },
    { positive: 12, negative: 8.47, neutral: 28 },
    { positive: 12, negative: 18, neutral: 25 },
    { positive: 12, negative: 18, neutral: 25 },
    { positive: 12, negative: 18, neutral: 25 },
    { positive: 12, negative: 18, neutral: 25 },
    { positive: 12, negative: 18, neutral: 25 },
  ];

  // 각 막대를 100%로 정규화
  const normalizedData = originalData.map(item => {
    const total = item.positive + item.negative + item.neutral;
    return {
      positive: (item.positive / total) * 100,
      negative: (item.negative / total) * 100,
      neutral: (item.neutral / total) * 100,
    };
  });

  const data = {
    labels: ['3월10일', '3월11일', '3월12일', '3월13일', '3월14일', '3월15일', '3월16일'],
    datasets: [
      {
        label: '긍정',
        data: normalizedData.map(item => item.positive),
        backgroundColor: '#E4F4EE',
        stack: 'stack1',
        borderWidth: 0,
      },
      {
        label: '부정',
        data: normalizedData.map(item => item.negative),
        backgroundColor: '#FCE4E2',
        stack: 'stack1',
        borderWidth: 0,
      },
      {
        label: '중립',
        data: normalizedData.map(item => item.neutral),
        backgroundColor: '#FFF4E4',
        stack: 'stack1',
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: false,
    maintainAspectRatio: false,
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: function(context) {
          // 긍정:#4AB88D, 중립:#FFB448, 부정:#E84E3D
          if (context.datasetIndex === 0) return '#4AB88D'; // 긍정
          if (context.datasetIndex === 1) return '#E84E3D'; // 부정
          if (context.datasetIndex === 2) return '#FFB448'; // 중립
          return '#000';
        },
        font: {
          size: 8,
          weight: 'bold',
        },
        align: 'center',
        anchor: 'center',
        formatter: (value, context) => {
          // 원본 값들을 표시 (정규화된 값이 아닌)
          const dataIndex = context.dataIndex;
          const datasetIndex = context.datasetIndex;
          
          if (datasetIndex === 0) return '12%'; // 긍정
          if (datasetIndex === 1) {
            // 부정
            if (dataIndex === 1) return '8.47%';
            return '18%';
          }
          if (datasetIndex === 2) {
            // 중립
            if (dataIndex === 1) return '28%';
            return '25%';
          }
          return '';
        },
        display: function(context) {
          return true;
        },
      }
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 8,
            color: '#666',
          },
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        stacked: true,
        display: false,
        min: 0,
        max: 100, // 100%로 설정
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 0,
        borderSkipped: false,
      },
    },
    layout: {
      padding: {
        top: 30,
        bottom: 10,
        left: 10,
        right: 10,
      },
    },
  };

  return (
    <div ref={containerRef} style={{ width: '100%', height: '156px', position: 'relative' }}>
      {/* 범례 - 상단 우측에 배치 */}
      <div style={{
        position: 'absolute',
        top: 5,
        right: 5,
        display: 'flex',
        gap: 10,
        fontSize: 8,
        fontWeight: '500',
        zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <div style={{ width: 8, height: 8, backgroundColor: '#E4F4EE' }}></div>
          <span style={{ color: '#4AB88D' }}>긍정</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <div style={{ width: 8, height: 8, backgroundColor: '#FFF4E4' }}></div>
          <span style={{ color: '#FFB448' }}>중립</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <div style={{ width: 8, height: 8, backgroundColor: '#FCE4E2' }}></div>
          <span style={{ color: '#E84E3D' }}>부정</span>
        </div>
      </div>

      {/* 차트 */}
      {isReady && (
        <div style={{ width: '100%', height: '156px', paddingTop: '0' }}>
          <canvas
            ref={(canvas) => {
              if (canvas && !chartRef.current) {
                try {
                  chartRef.current = new ChartJS(canvas, {
                    type: 'bar',
                    data: data,
                    options: options,
                    plugins: [ChartDataLabels]
                  });
                } catch (error) {
                  console.warn('Chart creation error:', error);
                }
              }
            }}
            height={156}
            style={{ maxWidth: '100%', maxHeight: '100%', width: '100%' }}
          />
        </div>
      )}
    </div>
  );
};

export default SentimentBarChartBhc; 