/* eslint-disable react/no-danger */
import React from 'react';
import BigCardStyle from './bigCard.styled';

const BigCard = React.memo(function BigCard(props){

    const createInnerHtml = () => {
        return { __html: props.htmlText };

    };

    return(
        <BigCardStyle cardWidth={props.cardWidth} cardHeight={props.cardHeight} >
            { props.isHtmlText ?
            <div className='htmlText'>
                <div dangerouslySetInnerHTML={ createInnerHtml() } />
            </div>
            :
            <>
            <div className='heading'>
            {props.heading}
            </div>
            <div className='text'>
            {props.text}
            </div>
            </>
            }
        </BigCardStyle>
    );
});

export default BigCard;