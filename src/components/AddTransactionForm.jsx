import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function AddTransactionForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = e => {
    e.preventDefault();

    if (!title || !amount) return;

    const newTransaction = {
      id: Date.now(),
      title,
      amount: +amount,
      date: new Date().toLocaleDateString()
    };

    addTransaction(newTransaction);
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Transaction</h3>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransactionForm;
