import React from 'react';
import { Header, Balance, IncomeExpense, TransactionList } from '../components'
import './App.css';

function App() {
  return(
    <div className="container">
      <Header />
        <div className="mainBody">
          <Balance />
          <IncomeExpense />
          <TransactionList />
        </div>
    </div>
  )
}

export default App;