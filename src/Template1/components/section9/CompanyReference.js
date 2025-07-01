import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../../recoil/atom';

const CompanyReference = ({ companyData }) => {
  // Extract data from props
  const { 
    name, 
    color, 
    rankInfo, 
    marketTrends, 
    keyProducts, 
    salesData, 
    swotAnalysis 
  } = companyData;

  const theme = useRecoilValue(themeState);
  
  // Use theme colors for all components
  const mainColor = theme.primary;
  const lightColor = theme.bgPrimary;
  const borderStyle = `3px solid ${mainColor}`;

  // Keeping the helper function for reference, but using theme colors
  const getColorStyles = (color) => {
    // Check if it's a CSS variable (starts with var)
    if (color.startsWith('var(')) {
      return {
        main: color,
        light: `${color.replace(')', ', 0.15)')}`,
        border: `3px solid ${color}`
      };
    } 
    // It's a hex color
    else {
      // Default light version for hex colors
      return {
        main: color,
        light: theme.bgPrimary,
        border: `3px solid ${color}`
      };
    }
  };

  // Get company-specific styles for any non-fixed elements
  const companyStyles = getColorStyles(color);

  return (
    <div className="company-reference-component">
      <div className="goobne-brand-table">
        <div className="goobne-table-head">
          <div className="goobne-table-tr">
            <div className="goobne-table-th goobne-table-th-label">구분</div>
            <div className="goobne-table-th goobne-table-th-content" style={{ borderLeft: borderStyle }}>
              <div className="goobne-table-brand-name" style={{ color: mainColor }}>
                {name}
              </div>
            </div>
          </div>
        </div>
        
        <div className="goobne-table-body">
          {/* 매출 순위 행 */}
          <div className="goobne-table-tr">
            <div className="goobne-table-td goobne-table-td-label">매출 순위<br/>(2024년 기준)</div>
            <div className="goobne-table-td goobne-table-td-content" style={{ borderLeft: borderStyle }}>
              <ul>
                {rankInfo.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* 시장 동향 행 */}
          <div className="goobne-table-tr">
            <div className="goobne-table-td goobne-table-td-label">시장 동향</div>
            <div className="goobne-table-td goobne-table-td-content" style={{ borderLeft: borderStyle }}>
              <ul>
                {marketTrends.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* 주요 제품 행 */}
          <div className="goobne-table-tr">
            <div className="goobne-table-td goobne-table-td-label">주요 제품</div>
            <div className="goobne-table-td goobne-table-td-content" style={{ borderLeft: borderStyle }}>
              <ul>
                {keyProducts.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* 매체별 언급량 */}
          {salesData && (
            <div className="goobne-table-tr">
              <div className="goobne-table-td goobne-table-td-label">주요 제품<br/>매출</div>
              <div className="goobne-table-td goobne-table-td-nested" style={{ borderLeft: borderStyle }}>
                <table className="goobne-nested-table">
                  <tbody>
                    <tr>
                      <td className="goobne-nested-table-label" rowSpan={2}>사업부문</td>
                      <td className="goobne-nested-table-label" rowSpan={2}>주요 품목</td>
                      <td className="goobne-nested-table-label" rowSpan={2}>구체적 용도</td>
                      <td className="goobne-nested-table-label" colSpan="4">2024년 (제26기)</td>
                    </tr>
                    <tr>
                      <td className="goobne-nested-table-sublabel">매출액</td>
                      <td className="goobne-nested-table-sublabel">비율</td>
                    </tr>
                    
                    {salesData.items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.department}</td>
                        <td>{item.products}</td>
                        <td>{item.usage}</td>
                        <td className="goobne-nested-table-value">{item.sales}</td>
                        <td className="goobne-nested-table-percentage" style={{ color: mainColor }}>{item.percentage}</td>
                      </tr>
                    ))}
                    
                    <tr>
                      <td className="goobne-nested-table-footer" colSpan="3">합 계</td>
                      <td className="goobne-nested-table-total">{salesData.total.sales}</td>
                      <td className="goobne-nested-table-total-percentage" style={{ color: mainColor }}>
                        {salesData.total.percentage}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* SWOT 분석 */}
      {swotAnalysis && (
        <div className="goobne-swot-analysis">
          {/* Strengths - Using consistent 경기푸드 colors */}
          <div className="goobne-swot-item">
            <div className="goobne-swot-letter goobne-swot-s" style={{ backgroundColor: mainColor }}>
              S
            </div>
            <div className="goobne-swot-content goobne-swot-s-content">
              <strong>강점</strong>
              <ul>
                {swotAnalysis.strengths.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Weaknesses - Using primaryDarker color */}
          <div className="goobne-swot-item">
            <div className="goobne-swot-letter goobne-swot-w" style={{ backgroundColor: theme.primaryDarker }}>
              W
            </div>
            <div className="goobne-swot-content goobne-swot-w-content" style={{ backgroundColor: theme.bgPrimary }}>
              <strong>약점</strong>
              <ul>
                {swotAnalysis.weaknesses.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Opportunities - Using skyBlue1 color */}
          <div className="goobne-swot-item">
            <div className="goobne-swot-letter goobne-swot-o" style={{ backgroundColor: theme.skyBlue1 }}>
              O
            </div>
            <div className="goobne-swot-content goobne-swot-o-content" style={{ backgroundColor: theme.bgPrimary }}>
              <strong>기회</strong>
              <ul>
                {swotAnalysis.opportunities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Threats - Using negative color */}
          <div className="goobne-swot-item">
            <div className="goobne-swot-letter goobne-swot-t" style={{ backgroundColor: theme.negative }}>
              T
            </div>
            <div className="goobne-swot-content goobne-swot-t-content" style={{ backgroundColor: theme.bgPrimary }}>
              <strong>위협</strong>
              <ul>
                {swotAnalysis.threats.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyReference; 