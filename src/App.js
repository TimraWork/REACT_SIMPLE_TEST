import React, {useEffect, useState} from 'react';
import './App.css';
import questions from './questions.json';
import logoKapitalBank from "./assets/img/logoKapitalBank.png";
import iconFifty from "./assets/img/icon__fifty.png";
import iconHall from "./assets/img/icon__hall_help.png";
import logo from "./assets/img/logo.png";

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
        <img src={logoKapitalBank} alt="KapitalBank" className="logoKapitalBank" />
        <img src={iconFifty} alt="" className="icon_right icon_right--fifty" />
        <img src={iconHall} alt="" className="icon_right icon_right--hall" />
        <div className="millionaire">
          <img src={logo} alt="KapitalBank" className="millionaire__logo" />
          <div className={`question`} onClick={onSelectChange}>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
