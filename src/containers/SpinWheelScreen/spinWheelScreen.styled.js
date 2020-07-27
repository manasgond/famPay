import styled from 'styled-components';
import { dim } from 'styles/theme';
import { finalWidth } from 'styles/globalStyles';


const SpinWheelScreenStyle = styled.div`
display:flex;
flex:1;
flex-direction:column;
background-color:#E5E5E5;
justify-content:space-between;
margin:auto;
width:${finalWidth};
overflow-y:auto;
padding-bottom:${dim._60px};
align-items:center;

.spinWheel{
    display:flex;
    margin-top:${dim._scale(100)};
}

.spinCard{
    display:flex;
    margin-top:${dim._32px};
}

.text{
    display:flex;
    flex-direction:row;
    margin-top:${dim._16px};
    align-items:center;
    p{
        color: #FBAF03;
        cursor:pointer;
    }
}
`;

export default SpinWheelScreenStyle;