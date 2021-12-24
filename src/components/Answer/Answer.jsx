import { Grid } from '@mui/material';
import React, {useState} from 'react';
import { ANSWERS_LETTERS } from '../../App';
import questionsJson from '../../questions.json';

const Answer = ({ idx = 0, answerResult = ""  }) => {
    const [activeAnswer, setActiveAnswer] = useState(false);
    const onAnswerClick = () =>  {
        setActiveAnswer(!activeAnswer);
    }

    return (
        <Grid item xs={6} >
            <div
                className={`answer ${ activeAnswer ? '' : 'answer--hide' }`}
                onClick={() => onAnswerClick() }
                tabIndex={idx + 1}
            >
                <div className="answer__letter"> {ANSWERS_LETTERS[idx]}: &nbsp; </div>
                <div className="answer__text"> {questionsJson[0].answers[idx][ANSWERS_LETTERS[idx]]}  </div>
            </div>

        </Grid>
    );
}

export { Answer };