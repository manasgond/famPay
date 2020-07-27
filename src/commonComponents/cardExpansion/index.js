import React, { useState } from 'react';
import BellIcon from 'assets/images/bellOrange.svg';
import CrossIcon from 'assets/images/cross.svg';
import { dim } from 'styles/theme';
import Path from 'assets/images/path.svg'
import CardExpansionStyle from './cardExpansion.styled';
import Button from '../button';
import SmallCard from '../smallCard';


const CardExpansion = React.memo(function CardExpansion(props){
    const [showBackgroundCard, setShowBackgroundCard] = useState(false);

    const {
        activeText,
        passiveText,
        description,
        ctaLabel,
        ctaBg,
        ctaText
        // go to label
    } = props;

    const _handleRemindButton = () => {
        setShowBackgroundCard(false)
    }

    const _handleActionButtonClick = () => {
        // console.log('_handleActionButtonClick ----->>>>');

    }

    const handleKeyPress = () => {
        setShowBackgroundCard(!showBackgroundCard);
    }

    const _handleCrossButton = () => {
        // console.log('hello world');
    }

    return(
        <CardExpansionStyle onClick={handleKeyPress} >
            { showBackgroundCard &&
                <div className='backgroundCard'>
                    <SmallCard
                      label = "remind later"
                      icon = {BellIcon}
                      smallCardClick = {_handleRemindButton}
                    />
                    <SmallCard
                      label = "remind later"
                      icon = {CrossIcon}
                      smallCardClick = {_handleCrossButton}
                    />
                </div>
            }
            <div className='foreGroundCard'>
                <img src={Path} alt="icon" height={dim._scale(90)} width={dim._scale(82)} />
                <div className='text1'>
                    {activeText} <p> {passiveText}</p>
                </div>
                <div className='text2'>
                    {description}
                </div>
                <Button
                  label={ctaLabel}
                  bg={ctaBg}
                  textColor={ctaText}
                  buttonClick = {_handleActionButtonClick}
                />
            </div>
        </CardExpansionStyle>
    );
});

export default CardExpansion;