import styled from 'styled-components';
import { dim } from 'styles/theme';

const CenterCardStyle = styled.div`
display:flex;
flex-direction:column;
margin-top:${dim._16px};
background: linear-gradient(344.71deg, #FBAF03 3.44%, #FFD428 86.36%);
border-radius: 11px;
padding:${dim._12px};
justify-content:center;
align-items:center;

.avatar{
    display:flex;
}
.centerCard{
    display:flex;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #000000;
}

.actionButton{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
}
`;

export default CenterCardStyle;