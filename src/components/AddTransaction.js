import React from 'react';

export const AddTransaction = () => {
  return (
    <>
      <h3>Add New transaction</h3>
      <form>
        <div>
          <label>Text</label>
          <input type="text" placeholder="Enter text..."></input>
        </div>
        <div>
          <label>Amount</label>
          <input type="number" placeholder="Enter amount..."></input>
        </div>
        <button class="newTransactionbtn">Add</button>
      </form>
    </>
  )
};
