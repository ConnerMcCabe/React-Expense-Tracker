import React from 'react';
import { Header, Balance } from '../components'
import './App.css';

function App() {
  return(
    <div className="container">
      <Header />
        <div className="mainBody">
          <Balance />
        </div>
    </div>
  )
}

export default App;