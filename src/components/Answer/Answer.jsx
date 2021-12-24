import { Grid } from '@mui/material';
import React from 'react';
import { ANSWERS_LETTERS } from '../../App';
import questionsJson from '../../questions.json';

const Answer = ({ idx = 0, answerResult = ""  }) => {
    const onAnswerClick = () =>  {
        console.log('click');
    }

    return (
        <Grid item xs={6} >
            {answerResult}

            {/* <div
                className={`answer answer--hide ${ answerResult ? currentQuestion.correctAnswer ===  ANSWERS_LETTERS[idx] ? 'answer--right' : 'answer--wrong' : ''} `}
                onClick={() => onAnswerClick(answer, idx) }
            >
                <div className="answer__letter"> {ANSWERS_LETTERS[idx]}: &nbsp; </div>
                <div className="answer__text"> {answer[ANSWERS_LETTERS[idx]]} </div>
            </div> */}

            <div
                className={`answer answer--hide`}
                onClick={() => onAnswerClick() }
            >
                <div className="answer__letter"> {ANSWERS_LETTERS[idx]}: &nbsp; </div>
                <div className="answer__text">  erw9tewr0t  </div>
            </div>

        </Grid>
    );
}

export { Answer };