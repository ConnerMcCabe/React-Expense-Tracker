import React from 'react';
import { Balance, IncomeExpense, TransactionList, AddTransaction } from '../components'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

import { GlobalProvider } from '../context/GlobalState';

function App() {
  return(
    <GlobalProvider>
      <h2>Expense Tracker</h2>
        <div className="container">
          <div className="calendarBox">
            <Calendar />
          </div>
          <div className="trackerBox">
            <Balance />
            <IncomeExpense />
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
        
    </GlobalProvider>
  )
}

export default App;