import React, { useState, useContext } from 'react';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import AddTransactionForm from './components/AddTransactionForm';
import TransactionList from './components/TransactionList';
import { GlobalContext } from './context/GlobalContext';

function App() {
  const [showHelp, setShowHelp] = useState(false);
  const { clearAllTransactions } = useContext(GlobalContext);

  return (
    <div className="container">
      <Header />
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <button
          onClick={() => setShowHelp(!showHelp)}
          style={{ padding: '6px 10px' }}
        >
          {showHelp ? 'Hide How to Use' : 'Show How to Use'}
        </button>

        <button
          onClick={clearAllTransactions}
          style={{ padding: '6px 10px', backgroundColor: '#f55', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Delete All Transactions
        </button>
      </div>

      {showHelp && (
        <div style={{ background: '#eef', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
          <h4>How to Use</h4>
          <ul>
            <li>➕ Enter a title (e.g., "Salary", "Rent")</li>
            <li>💵 Use positive numbers for income</li>
            <li>💸 Use negative numbers for expenses</li>
            <li>🧾 Entries will appear in the history list</li>
            <li>🔁 Your data stays even after reload (saved in browser)</li>
            <li>❌ You can delete entries or clear all anytime</li>
          </ul>
        </div>
      )}

      <BalanceCard />
      <AddTransactionForm />
      <TransactionList />
    </div>
  );
}

export default App;
