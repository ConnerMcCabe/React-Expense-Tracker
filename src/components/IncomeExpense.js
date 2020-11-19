import React from 'react'

export const IncomeExpense = () => {
  return (
    <div className="containerIncExp">
      <div>
        <h4>Income</h4>
        <p id="plus">+$0.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="minus">-$0.00</p>
      </div>
    </div>
  )
}
