import React from 'react';
import { Balance, IncomeExpense, TransactionList, AddTransaction } from '../components'
// import Calendar from 'react-calendar';
import './App.css';

import { GlobalProvider } from '../context/GlobalState';

function App() {
  return(
    <GlobalProvider>
      <h2>Expense Tracker</h2>
        <div className="trackerContainer">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
        {/* <div className="calendarContainer">
          <Calendar />
        </div> */}
    </GlobalProvider>
  )
}

export default App;