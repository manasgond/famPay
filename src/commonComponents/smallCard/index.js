import React from 'react';
import { dim } from 'styles/theme';
import SmallCardStyles from './smallCard.styled';

const SmallCard = React.memo(function SmallCard(props){
    return(
        <SmallCardStyles onClick={props.smallCardClick}>
            <img src={props.icon} alt='icon' className='icon' height={dim._12px} width={dim._12px} />
            <div className='text'>
                {props.label}
            </div>
        </SmallCardStyles>
    );
});

export default SmallCard;
