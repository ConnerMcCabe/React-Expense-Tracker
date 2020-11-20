import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: generateKey,
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }

  const generateKey = () => {
    return `$i_${new Date().getTime()}`;
  }

  return (
    <>
      <h3>Add New transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="submit-btn">Add</button>
      </form>
    </>
  )
};
