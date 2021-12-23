import React, {useEffect, useState} from 'react';
import './App.css';
import questions from './questions.json';
import logo from "./assets/img/logo.svg";

export const formatBalance = (balance) =>  balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

function App() {
  const [data, setData] = useState([]);

  const onSelectChange = (e) => {
    setData(questions);
  }

  useEffect(() => {
    console.log('data = ', data);
  }, [data]); //eslint-disable-line

  return (
    <div className="App">
      <header className="App-header">
        <div className="exchange_rates">
          <img src={logo} alt="logo" className="exchange_rates__logo" />
          <div className={`question`} onClick={onSelectChange}>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
