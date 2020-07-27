import React from 'react';
import MonkeyIcon from 'assets/images/monkey.svg';
import { dim } from 'styles/theme';
import { withRouter } from 'react-router-dom';
import StreakStyle from './streak.styled';


const Streak = React.memo(function Streak(props) {

    const handleStreakClick = () => {
        props.history.push('/streak');
    }

    return(
        <StreakStyle fullWidth={props.fullWidth} onClick={handleStreakClick}>
            <img className='icon' src={MonkeyIcon} height={dim._scale(100)} width={dim._scale(46)} alt="monkey" />
            <div className='textContainer'>
                <div className='text1'>
                    Save the streak
                </div>
                <div className='text2'>
                    10 Days saving challenge
                </div>
            </div>
        </StreakStyle>
    );
});

export default withRouter(Streak);