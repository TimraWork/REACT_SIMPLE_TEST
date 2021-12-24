import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import logoKapitalBank from "./assets/img/logoKapitalBank.png";
import iconFifty from "./assets/img/icon__fifty.png";
import iconHall from "./assets/img/icon__hall_help.png";
import hallImg from "./assets/img/chart.svg";
import logo from "./assets/img/logo.png";
import Grid from '@mui/material/Grid';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Fade, IconButton } from '@mui/material';
import MUSIC_URL from './assets/audio/start.mp3';
import MUSIC_URL_QUESTION from './assets/audio/question.mp3';
import MUSIC_URL_RIGHT_ANSWER from './assets/audio/correctAnswer.mp3';
import { ChartPopup } from './components/ChartPopup/ChartPopup';
import { Answer } from './components/Answer/Answer';
import questionsJson from './questions.json';
import CheckIcon from '@mui/icons-material/Check';

export const formatBalance = (balance) =>  balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const STORAGE = 'react-game/playMusic';
export const ANSWERS_LETTERS = ["A", "B", "C", "D"]

const App = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [hideTwoElements, setHideTwoElements] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showRightAnswer, setShowRightAnswer] = useState(false);

  const [isMusicPlayed, setIsMusicPlayed] = useState(true);
  const refMusic = useRef(null);

  useEffect(() => {
    if (!refMusic.current) { return; }

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

  const handleShowRightClick = () => {
    setShowRightAnswer(!showRightAnswer);
  };

  const onPopupClose = () => setOpenPopup(false);
  const onOpenPopupClick = () => setOpenPopup(true);
  const onShowQuestion = () => setShowQuestion(!showQuestion);

  const onFiftyClick = () => {
   console.log('onFiftyCLick');
   setHideTwoElements(!hideTwoElements);
  };

  return (
    <div className="App">
      <Fade in={true} timeout={4000}>
        <div className={`millionaire ${hideTwoElements ? 'hideTwo' : ''} ${showRightAnswer ? 'rightAnswer' : ''} `}>
          <header className="App-header">
            <img src={logoKapitalBank} alt="KapitalBank" className="logoKapitalBank" />
            <img src={iconFifty} alt="" className="icon_right icon_right--fifty" onClick={onFiftyClick} />
            <img src={iconHall} onClick={onOpenPopupClick} alt="" className="icon_right icon_right--hall" />

            <ChartPopup open={openPopup} color="white" onPopupClose={onPopupClose}>
              <img src={hallImg} alt="" className="hallImg" />
            </ChartPopup>
          </header>

          <img src={logo} alt="KapitalBank" className="millionaire__logo" />

          {/* QUESTION zone */}
          <div className={`question ${showQuestion ? '' : 'question--hide'}`} onClick={onShowQuestion}> {questionsJson[0].question} </div>
          { (showQuestion && !showRightAnswer) && <audio autoPlay src={MUSIC_URL_QUESTION} />}

          <Grid container spacing={0}>
            { [0, 1, 2, 3].map( (idx) => <Answer idx={idx} key={idx} /> ) }
          </Grid>
          {/* QUESTION zone */}

          <div className="volume">
            <IconButton size="large" onClick={handleMusicToggleClick}>
              {isMusicPlayed ? <VolumeOffIcon /> : <VolumeUpIcon />}
              {isMusicPlayed && <audio autoPlay src={MUSIC_URL} />}
            </IconButton>
          </div>

          <div className="showRightAnswer">
            <IconButton size="large" onClick={handleShowRightClick}>
              <CheckIcon />
              {showRightAnswer && <audio autoPlay src={MUSIC_URL_RIGHT_ANSWER} />}
            </IconButton>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default App;
