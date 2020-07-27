import styled from 'styled-components';
import theme, { dim } from 'styles/theme';

const ButtonStyle = styled.div`
    display:flex;
    height:${dim._40};
    width:${dim._scale(128 - 24)};
    align-items:center;
    justify-content:center;
    background-color:${props => props.bg ? props.bg : theme.color.base_0};
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color:${props => props.textColor ? props.textColor : theme.color.base_100};
    padding:${dim._12px};
    margin-top:${dim._28px};
    border-radius:6px;
`;

export default ButtonStyle;