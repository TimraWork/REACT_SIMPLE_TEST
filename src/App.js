import React, {useEffect, useState} from 'react';
import './App.css';
import questions from './questions.json';
import logoKapitalBank from "./assets/img/logoKapitalBank.png";
import iconFifty from "./assets/img/icon__fifty.png";
import iconHall from "./assets/img/icon__hall_help.png";
import logo from "./assets/img/logo.png";
import Grid from '@mui/material/Grid';

export const formatBalance = (balance) =>  balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

function App() {
  const [questions, setQuestions] = useState([]);

  const onSelectChange = (e) => {
    setQuestions(questions);
  }

  // useEffect(() => {
  //   console.log('data = ', data);
  // }, [data]); //eslint-disable-line

  return (
    <div className="App">
      <div className="millionaire">
        <header className="App-header">
          <img src={logoKapitalBank} alt="KapitalBank" className="logoKapitalBank" />
          <img src={iconFifty} alt="" className="icon_right icon_right--fifty" />
          <img src={iconHall} alt="" className="icon_right icon_right--hall" />
        </header>
        <img src={logo} alt="KapitalBank" className="millionaire__logo" />
        <div className={`question`} onClick={onSelectChange}> Центр автомобилестроения США ? </div>
        <Grid container spacing={0}>
          <Grid item xs={6}> <div className="answer answer--wrong"> <span className="letter">A:&emsp;</span> Нью-Йорк </div> </Grid>
          <Grid item xs={6}> <div className="answer  answer--right"> <span className="letter">B:&emsp;</span> Портсмут </div> </Grid>
          <Grid item xs={6}> <div className="answer"> <span className="letter">C:&emsp;</span> Детройт </div> </Grid>
          <Grid item xs={6}> <div className="answer"> <span className="letter">D:&emsp;</span> Чикаго </div> </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
