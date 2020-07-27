import styled from 'styled-components';
import { dim } from 'styles/theme';
import { finalWidth } from 'styles/globalStyles';


const TopNavigationStyle = styled.div`
display:flex;
flex-direction:row;
height:${dim._60};
background-color:${props => props.theme.color.base_100};
padding:${dim._20px};
align-items:center;
width:calc(${finalWidth} - ${dim._40px});
z-index:9;

.brandingContainer{
    display:flex;
    flex:1;
    flex-direction:row;
    align-items:center;
    justify-content:center;
}

.brand{
    display:flex;
}

.logo{
    display:flex
}

.navigationContainer{
    display:flex;
    flex-direction:center;
    align-items:center;
    justify-content:flex-start;
}

.arrow{
    display:flex;
}

.navigationTitle{
    display:flex;
    margin-left:${dim._12px};
}




`;

export default TopNavigationStyle;