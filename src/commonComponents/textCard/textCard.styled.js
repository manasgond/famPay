import styled from 'styled-components';
import { dim } from 'styles/theme';

const TextCardStyle = styled.div`

display:flex;
flex-direction:column;
background: linear-gradient(344.71deg, #FBAF03 3.44%, #FFD428 86.36%);
border-radius: 12px;
justify-content:center;


.avatar{
    display:flex;
}

.content{
    display:flex;
    margin-top:${dim._12px};
}

.buttonContainer{
    display:flex;
    justify-content:space-around;
}

`;

export default TextCardStyle;