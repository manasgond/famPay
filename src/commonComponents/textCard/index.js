import React from 'react';
import TextCardStyle from './textCard.styled';
import Avatar from '../avatar';
import Button from '../button';


const TextCard = React.memo(function TextCard(){

    return(
        <TextCardStyle>
            <Avatar />
            <div className='content'>
                Center Card
            </div>
            <div className='buttonContainer'>
                <Button />
                <Button />
            </div>
        </TextCardStyle>
    );


});

export default TextCard;