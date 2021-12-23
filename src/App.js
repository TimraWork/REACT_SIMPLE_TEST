import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import logoKapitalBank from "./assets/img/logoKapitalBank.png";
import iconFifty from "./assets/img/icon__fifty.png";
import iconHall from "./assets/img/icon__hall_help.png";
import logo from "./assets/img/logo.png";
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { IconButton } from '@mui/material';
// import questions from './questions.json';
// import UpdateIcon from '@mui/icons-material/Update';

export const formatBalance = (balance) =>  balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const MUSIC_URL = 'https://timra.ru/portfolio/audio/music.mp3';
const STORAGE = 'react-game/playMusic';

const App = () => {
  const [questions, setQuestions] = useState([]);

  const [isMusicPlayed, setIsMusicPlayed] = useState(true);
  const refMusic = useRef(null);

  useEffect(() => {
    if (!refMusic.current) {
      return;
    }

    if (isMusicPlayed) {
      refMusic.current.defaultMuted = false;
      refMusic.current.muted = false;
    } else {
      refMusic.current.defaultMuted = true;
      refMusic.current.muted = true;
    }
  }, [isMusicPlayed]);

  useEffect(() => {
    const getStorage = localStorage.getItem(STORAGE);
    if (getStorage) setIsMusicPlayed(JSON.parse(getStorage || ''));
  }, []);

  const handleMusicToggleClick = () => {
    setIsMusicPlayed(!isMusicPlayed);
    localStorage.setItem(STORAGE, JSON.stringify(!isMusicPlayed));
  };

  return (
    <div className="App">
      <div className="millionaire">
        <header className="App-header">
          <img src={logoKapitalBank} alt="KapitalBank" className="logoKapitalBank" />
          
          <div className="volume">
            <IconButton size="large" onClick={handleMusicToggleClick}>
              {isMusicPlayed ? <VolumeOffIcon /> : <VolumeUpIcon />}
              {isMusicPlayed && <audio autoPlay loop ref={refMusic} src={MUSIC_URL} />}
            </IconButton>
          </div>
          
          {/* <div className="volume">
            <IconButton >
              <UpdateIcon/>
            </IconButton>
          </div> */}
          
          <img src={iconFifty} alt="" className="icon_right icon_right--fifty" />
          <Tooltip title={
            <div className="tooltip_text">
              <div className="tooltip_text__title">Подсказочка</div>
              <div className="tooltip_text__text">Текст подсказочки. Xороший текст!!!</div>
            </div>
          }>
            <img src={iconHall} alt="" className="icon_right icon_right--hall" />
          </Tooltip>
        </header>
        <img src={logo} alt="KapitalBank" className="millionaire__logo" />
        <div className={`question`} onClick={()=>{}}> Центр автомобилестроения США ? </div>
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
