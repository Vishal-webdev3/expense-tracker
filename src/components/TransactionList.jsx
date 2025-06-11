import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function TransactionList() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>
            {tx.title} - ₹{tx.amount} ({tx.date})
            <button onClick={() => deleteTransaction(tx.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
