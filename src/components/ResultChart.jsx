import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip" style={{
                backgroundColor: '#1e293b',
                padding: '10px',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
            }}>
                <p className="year-label" style={{ color: '#94a3b8', margin: '0 0 5px' }}>{label}年目</p>
                <p style={{ color: '#fbbf24', margin: '3px 0' }}>
                    評価額: ¥{payload[0].value.toLocaleString()}
                </p>
                <p style={{ color: '#94a3b8', margin: '3px 0' }}>
                    元本: ¥{payload[1].value.toLocaleString()}
                </p>
            </div>
        );
    }
    return null;
};

const ResultChart = ({ data }) => {
    if (!data || data.length === 0) return null;

    return (
        <div className="chart-container" style={{ width: '100%', height: 400, marginTop: '2rem' }}>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis
                        dataKey="year"
                        stroke="#94a3b8"
                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                        tickLine={{ stroke: '#94a3b8' }}
                    />
                    <YAxis
                        stroke="#94a3b8"
                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                        tickLine={{ stroke: '#94a3b8' }}
                        tickFormatter={(value) => `¥${(value / 10000).toLocaleString()}万`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="totalValue"
                        name="評価額"
                        stroke="#fbbf24"
                        strokeWidth={3}
                        dot={{ r: 0 }}
                        activeDot={{ r: 6, fill: '#fbbf24', stroke: '#1e293b', strokeWidth: 2 }}
                        animationDuration={1500}
                    />
                    <Line
                        type="monotone"
                        dataKey="principal"
                        name="元本"
                        stroke="#94a3b8"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={false}
                        animationDuration={1500}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ResultChart;
