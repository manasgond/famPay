import React from 'react';
import ButtonStyle from './button.styled';

const Button = React.memo(function Button(props){

    return(
        <ButtonStyle onClick = {props.buttonClick} id={props.id} bg={props.bg} textColor={props.textColor}>
            {props.label}
        </ButtonStyle>
    );

});
export default Button;