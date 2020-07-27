import styled from 'styled-components';
import { dim } from 'styles/theme';

const Avatar = styled.div`
display:flex;
flex-direction:${props => props.isRow ? 'row' : 'column'};
padding:${dim._8px};
background:${props => props.cardBgColor ?  props.cardBgColor : 'transparent'};
align-items:center;
width:${props => props.width ? props.width : 'none'};
border-radius:${props => props.cardBgColor ? '12px' : '0px'};
height:${props => props.cardBgColor ? dim._scale(60 - 16) : 'none'};

.icon{
    height:${props => props.isRow ? dim._32px : dim._60px};
    width:${props => props.isRow ? dim._32px : dim._60px};
    border-radius:50%;
    margin-bottom:${props => props.isRow ? dim._0px : dim._12px};
}

.label{
    margin-left:${props => props.isRow ? dim._12px : dim._0px};
}
`;

export default Avatar;