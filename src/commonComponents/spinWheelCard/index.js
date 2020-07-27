import React from 'react';
import ForwardArrowBlack from 'assets/images/forwardArrowBlack.svg';
import SpinWheelStyle from './spinWheelCard.styled';

const SpinWheelCard = React.memo(function SpinWheelCard(props){

    const _handleSpinWheelClick = () => {
        props.spinWheelCardClicked();
    }

    return(
        <SpinWheelStyle onClick={_handleSpinWheelClick}>
            <img className='icon' src={props.icon} alt="person" />
            <div className='text'>
                {props.activeText}
            </div>
            <img className='arrow' src={ForwardArrowBlack} alt="forward arrow" />
        </SpinWheelStyle>
    );
});

export default SpinWheelCard;