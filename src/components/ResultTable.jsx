import React from 'react';

const ResultTable = ({ data }) => {
    if (!data || data.length === 0) return null;

    return (
        <div className="table-container">
            <table className="premium-table">
                <thead>
                    <tr>
                        <th>年</th>
                        <th>元本</th>
                        <th>評価額</th>
                        <th>利益</th>
                        <th>利率 (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.year}>
                            <td>{row.year}年目</td>
                            <td>¥{row.principal.toLocaleString()}</td>
                            <td className="highlight-value">¥{row.totalValue.toLocaleString()}</td>
                            <td className={row.profit >= 0 ? 'profit-positive' : 'profit-negative'}>
                                {row.profit >= 0 ? '+' : ''}¥{row.profit.toLocaleString()}
                            </td>
                            <td>{row.rate.toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultTable;
