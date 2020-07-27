import styled from 'styled-components';
import { dim } from 'styles/theme';
import { finalWidth } from 'styles/globalStyles';

const StreakStyle = styled.div`
display:flex;
flex-direction:row;
flex:1;
padding:${dim._24px};
width:${props => props.fullWidth ? `calc(${finalWidth} - ${dim._48px})` : dim._scale(320 - 48)};
height:${dim._scale(148)};
background-color:#FFDDA1;
align-items:center;
justify-content:space-between;
border-radius:12px;
margin:auto;
margin-top:${props => props.fullWidth ? dim._scale(0) : dim._16px};

.icon{
    display:flex;
    flex:0.30;
}

.textContainer{
    display:flex;
    flex:0.70;
    flex-direction:column;
    align-items:center;
}

.text1{
    display:flex;
    font-weight: 600;
    font-size: 20.6351px;
    line-height: 21px;
    color: #571C32;
}

.text2{
    display:flex;
    font-weight: 500;
    font-size: 14.7394px;
    line-height: 15px;
    color: rgba(87, 28, 50, 0.84);
}
`;

export default StreakStyle;