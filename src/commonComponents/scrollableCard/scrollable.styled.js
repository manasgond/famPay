import styled from 'styled-components';
import { dim } from 'styles/theme';


const ScrollbarsCardStyle = styled.div`
display:flex;
flex-direction:row;
flex:1;
margin-top:${dim._16px};
overflow-x:auto;
max-width:${dim._scale(320)};

.card1{
    display:flex;
    width:${props => props.isScrollable ? dim._scale(148) : 'none'};
}

.card2{
    display:flex;
    margin-left:${dim._16px};
    width:${props => props.isScrollable ? dim._scale(148) : 'none'};
}
`;

export default ScrollbarsCardStyle;