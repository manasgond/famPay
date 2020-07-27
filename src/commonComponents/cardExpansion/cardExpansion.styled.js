import styled from 'styled-components';
import theme, { dim } from 'styles/theme';

const ExpansionCardStyle = styled.div`
display:flex;
flex:1;
flex-direction:row;
width:${dim._scale(320)};
height:${dim._scale(350)};

.backgroundCard{
    display:flex;
    min-width:${dim._scale(120)};
    width:${dim._scale(150)};
    height:${dim._scale(350)};
    background-color:${ theme.color.base_100};
    justify-content:space-around;
    align-items:center;
    flex-direction:column;
    border-top-left-radius:${dim._12px};
    border-bottom-left-radius:${dim._12px};
}

.foreGroundCard{
    display:flex;
    flex-direction:column;
    background: #454AA6;
    border-radius: 12px;
    min-width:${dim._scale(320 - 64)};
    height:${dim._scale(350 - 64)};
    padding:${dim._32px};
}

.text1{
    font-weight: 500;
    font-size: 30px;
    color: #FBAF03;
    margin-top:${dim._16px};
    line-height: 32px;
    p{
        margin-top:auto;
        color:#fff;
    }
}

.text2{
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #FFFFFF;
}

.button{
    margin-top:${dim._32px};
    
}




`;

export default ExpansionCardStyle;
