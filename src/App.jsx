import { useState, useEffect } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import ResultTable from './components/ResultTable';
import ResultChart from './components/ResultChart';
import { calculateCompoundInterest } from './utils/finance';

function App() {
  const [values, setValues] = useState({
    initialAmount: 30000000,
    annualContribution: 1200000,
    interestRate: 4,
    years: 20
  });

  const [results, setResults] = useState([]);

  useEffect(() => {
    const data = calculateCompoundInterest({
      initialAmount: Number(values.initialAmount),
      annualContribution: Number(values.annualContribution),
      interestRate: Number(values.interestRate),
      years: Number(values.years)
    });
    setResults(data);
  }, [values]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>複利計算器</h1>
        <p>Premium Wealth Simulator</p>
      </header>

      <main className="main-content">
        <section className="left-column" aria-label="計算設定">
          <InputForm values={values} handleChange={handleChange} />
        </section>
        <section className="right-column" aria-label="シミュレーション結果">
          <div className="card-container">
            <h2 className="section-title">資産推移シミュレーション</h2>
            <ResultChart data={results} />
          </div>
          <div className="card-container" style={{ marginTop: '2rem' }}>
            <h2 className="section-title">詳細データ</h2>
            <ResultTable data={results} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
