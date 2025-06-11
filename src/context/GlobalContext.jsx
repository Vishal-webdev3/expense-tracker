import React, { createContext, useReducer, useEffect } from 'react';
import { getFromStorage, saveToStorage } from '../utils/localStorage';

export const GlobalContext = createContext();

const initialState = {
  transactions: getFromStorage() || []
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return { transactions: [action.payload, ...state.transactions] };
    case 'DELETE_TRANSACTION':
      return {
        transactions: state.transactions.filter(tx => tx.id !== action.payload)
      };
    case 'CLEAR_ALL':
      return { transactions: [] };
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    saveToStorage(state.transactions);
  }, [state.transactions]);

  function addTransaction(tx) {
    dispatch({ type: 'ADD_TRANSACTION', payload: tx });
  }

  function deleteTransaction(id) {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  }

  function clearAllTransactions() {
    dispatch({ type: 'CLEAR_ALL' });
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      addTransaction,
      deleteTransaction,
      clearAllTransactions
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
