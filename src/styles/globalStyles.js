import { createGlobalStyle } from 'styled-components';

const figmaDesignWidth = 360; // design consideration
const minSupportedWidth = 360; // iphone 4
const maxSupportedWidth = 420;

// eslint-disable-next-line import/no-mutable-exports
let { innerWidth } = window;

if (innerWidth <= minSupportedWidth) {
  innerWidth = minSupportedWidth;
}
if(innerWidth >= maxSupportedWidth){
    innerWidth = maxSupportedWidth;
}

export const finalWidth = `${innerWidth}px`;
console.log(finalWidth, '-----innerWidth---->>>>>');


export const scaleFactor = innerWidth / figmaDesignWidth;

// global class
const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: 'IBM Plex Sans', sans-serif;
    background-color: ${props => props.theme.color.base_90};
    color: ${props => props.theme.color.base_20};
    font-size: ${props => props.theme.dim._14px};
    margin: 0;
    scrollbar-width: none !important;
    width:${innerWidth};
  }
  `;

  export default GlobalStyle;