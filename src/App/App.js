import React from 'react';
import { Header, Balance, IncomeExpense, TransactionList, AddTransaction } from '../components'
import './App.css';

function App() {
  return(
    <div className="container">
      <Header />
        <div className="mainBody">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
    </div>
  )
}

export default App;