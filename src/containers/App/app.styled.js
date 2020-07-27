import styled from 'styled-components';
import { dim } from 'styles/theme';
import { finalWidth } from 'styles/globalStyles';


const AppStyle = styled.div`
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

.header{
    position:fixed;
    z-index:99;
}

.container{
    padding-left:${dim._24px};
    padding-right:${dim._24px};
    margin-top:${dim._scale(100)};
}
`;

export default AppStyle;