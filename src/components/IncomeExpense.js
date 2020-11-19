import React from 'react'

export const IncomeExpense = () => {
  return (
    <div className="container">
      <div className="incomeContainer">
        <h4>Income</h4>
        <p id="money+">+$0.00</p>
      </div>
      <div className="expenseContainer">
        <h4>Expense</h4>
        <p id="money-">-$0.00</p>
      </div>
    </div>
  )
}
