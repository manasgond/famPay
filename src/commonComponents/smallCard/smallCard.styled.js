import styled from 'styled-components';
import { dim } from 'styles/theme';

const SmallCardStyle = styled.div`

display:flex;
flex-direction:column;
height:${dim._scale(60)};
width:${dim._scale(72)};
background: #F7F6F3;
border-radius: 12px;
background: #F7F6F3;
justify-content:center;
align-items:center;

.icon{
    display:flex;
    height:${dim._12};
    width:${dim._12};
}

.text{
    display:flex;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    margin-top:${dim._4px};
}


`;

export default SmallCardStyle;