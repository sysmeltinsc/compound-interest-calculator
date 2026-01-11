import React from 'react';

const InputForm = ({ values, handleChange }) => {
    return (
        <div className="input-form-container">
            <div className="input-group">
                <label htmlFor="initialAmount">初期金額 (円)</label>
                <input
                    type="number"
                    id="initialAmount"
                    name="initialAmount"
                    value={values.initialAmount}
                    onChange={handleChange}
                    min="0"
                    className="premium-input"
                />
            </div>

            <div className="input-group">
                <label htmlFor="annualContribution">積立金額 (円/年)</label>
                <input
                    type="number"
                    id="annualContribution"
                    name="annualContribution"
                    value={values.annualContribution}
                    onChange={handleChange}
                    min="0"
                    className="premium-input"
                />
            </div>

            <div className="input-group">
                <label htmlFor="interestRate">想定年利 (%)</label>
                <input
                    type="number"
                    id="interestRate"
                    name="interestRate"
                    value={values.interestRate}
                    onChange={handleChange}
                    step="0.1"
                    min="0"
                    className="premium-input"
                />
            </div>

            <div className="input-group">
                <label htmlFor="years">運用期間 (年)</label>
                <input
                    type="number"
                    id="years"
                    name="years"
                    value={values.years}
                    onChange={handleChange}
                    min="1"
                    max="100"
                    className="premium-input"
                />
            </div>
        </div>
    );
};

export default InputForm;
