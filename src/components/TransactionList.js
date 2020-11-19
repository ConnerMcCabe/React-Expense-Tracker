import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const context = useContext(GlobalContext)
  console.log(context)
  return (
    <>
      <ul className="list">
        
      </ul>
    </>
  )
};
