import styled from 'styled-components';
import { dim } from 'styles/theme';

const BigCardStyle = styled.div`

display:flex;
flex-direction:column;
justify-content center;
padding:${dim._24px};
width:${props => props.cardWidth ? dim._scale(props.cardWidth - 48) : dim._scale(320 - 48)};
height:${props => props.cardHeight ? dim._scale(props.cardHeight - 48) : dim._scale(130 - 48)};
background-color:#fff;
border-radius:${props => props.cardHeight ? '6px' : '12px'};

.heading{
    display:flex;
    justify-content:center;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #000000;
}

.text{
    display:flex;
    justify-content:center;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: rgba(0, 0, 0, 0.58);
}

.htmlText{
    display:flex;
    justify-content:flex-start;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
    padding-bottom:${dim._8px};

}

`;

export default BigCardStyle;