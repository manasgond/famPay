import styled from 'styled-components';
import { dim } from 'styles/theme';
import { finalWidth } from 'styles/globalStyles';

const StreakScreenStyle = styled.div`
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

.streakIcon{
    width:100vw;
}

.cardContainer{
    display:flex;
    flex:1;
    flex-direction:column;
}

.smallCards{
    display:flex;
    flex-direction:row;
    flex:1;
    justify-content:space-between;
    margin-top:${dim._16px};
}

.bigCard{
    display:flex;
    flex:1;
    margin-top:${dim._16px};
}

.guideLine{
    display:flex;
    flex:1;
    margin-top:${dim._16px};
}

`;

export default StreakScreenStyle;