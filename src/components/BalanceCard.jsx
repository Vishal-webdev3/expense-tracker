import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function BalanceCard() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, num) => acc + num, 0).toFixed(2);
  const income = amounts.filter(a => a > 0).reduce((a, b) => a + b, 0).toFixed(2);
  const expense = (amounts.filter(a => a < 0).reduce((a, b) => a + b, 0) * -1).toFixed(2);

  return (
    <div>
      <h3>Your Balance: ₹{total}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>Income: <span style={{ color: 'green' }}>₹{income}</span></p>
        <p>Expense: <span style={{ color: 'red' }}>₹{expense}</span></p>
      </div>
    </div>
  );
}

export default BalanceCard;
