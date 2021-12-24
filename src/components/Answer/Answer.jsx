import { Grid } from '@mui/material';
import React, {useState} from 'react';
import { ANSWERS_LETTERS } from '../../App';
import questionsJson from '../../questions.json';
import MUSIC_URL_ANSWER from '../../assets/audio/answer.mp3';
import MUSIC_URL_RIGHT from '../../assets/audio/correct.mp3';
import MUSIC_URL_WRONG from '../../assets/audio/wrong.mp3';

const Answer = ({ idx = 0  }) => {
    const [activeAnswer, setActiveAnswer] = useState(false);
    const [answerState, setAnswerState] = useState("");

    const onAnswerClick = () =>  {
        // const correctAnswer = questionsJson[0].correctAnswer;
        // const currentAnswer = Object.keys(questionsJson[0].answers[idx])[0];

        if(!activeAnswer) {
            setActiveAnswer(!activeAnswer);
        } else {
            setAnswerState("answer");

            // if(correctAnswer === currentAnswer) {
            //     setAnswerState("right")
            // } else {
            //     setAnswerState("wrong")
            // }
        }
    }

    return (
        <Grid item xs={6} >
            <div
                className={`answer ${ activeAnswer ? '' : 'answer--hide' } answer--${answerState}`}
                onClick={() => onAnswerClick() }
                tabIndex={idx + 1}
            >
                <div className="answer__letter"> {ANSWERS_LETTERS[idx]}: &nbsp; </div>
                <div className="answer__text"> {questionsJson[0].answers[idx][ANSWERS_LETTERS[idx]]}  </div>
            </div>

            {answerState === 'answer' && <audio autoPlay src={MUSIC_URL_ANSWER} />}
            {answerState === 'right' && <audio autoPlay src={MUSIC_URL_RIGHT} />}
            {answerState === 'wrong' && <audio autoPlay src={MUSIC_URL_WRONG} />}

        </Grid>
    );
}

export { Answer };