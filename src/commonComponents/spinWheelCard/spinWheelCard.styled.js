import styled from 'styled-components';
import theme, { dim } from 'styles/theme';

const SpinWheelStyle = styled.div`
display:flex;
flex-direction:row;
flex:1;
height:${dim._scale(60 - 40)};
padding:${dim._20px};
width:${dim._scale(320 - 40)};
align-items:center;
background-color:${theme.color.base_100};
border-radius:${dim._12px};
margin-top:${dim._16px};

.icon{
    display:flex;
    height:${dim._32px};
    width:${dim._32px};
}

.text{
    display:flex;
    flex:1;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    margin-left:${dim._20px};
}

.arrow{
    display:flex;
}`;

export default SpinWheelStyle;