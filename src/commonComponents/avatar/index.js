import React from 'react';
import AvatarStyle from './avatar.styled';

const Avatar = React.memo(function Avatar(props){
    return(
        <AvatarStyle isRow={props.isRow} cardBgColor={props.cardBgColor} width={props.width}>
            <img className='icon' src={props.icon} alt='avatar' />
            <div className='label'>
                {props.label}
            </div>
        </AvatarStyle>
    );
});

export default Avatar;