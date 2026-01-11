import { useState, useEffect } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import ResultTable from './components/ResultTable';
import { calculateCompoundInterest } from './utils/finance';

function App() {
  const [values, setValues] = useState({
    initialAmount: 1000000,
    annualContribution: 120000,
    interestRate: 5,
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
        <InputForm values={values} handleChange={handleChange} />
        <ResultTable data={results} />
      </main>
    </div>
  );
}

export default App;
