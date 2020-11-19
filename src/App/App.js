import React from 'react';
import { Balance, IncomeExpense, TransactionList, AddTransaction } from '../components'
import './App.css';

import { GlobalProvider } from '../context/GlobalState';

function App() {
  return(
    <GlobalProvider>
      <h2>Expense Tracker</h2>
        <div className="mainBody">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
    </GlobalProvider>
  )
}

export default App;