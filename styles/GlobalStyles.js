import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  @font-face {
    font-family: 'DIN 2014';
    src: url('/fonts/DIN2014-LightItalic.eot');
    src: local('DIN 2014 Light Italic'), local('DIN2014-LightItalic'),
    url('/fonts/DIN2014-LightItalic.eot?#iefix') format('embedded-opentype'),
    url('/fonts/DIN2014-LightItalic.woff') format('woff'),
    url('/fonts/DIN2014-LightItalic.woff2') format('woff2'),
    url('/fonts/DIN2014-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'DIN 2014';
    src: url('/fonts/DIN2014-Light.eot');
    src: local('DIN 2014 Light'), local('DIN2014-Light'),
    url('/fonts/DIN2014-Light.eot?#iefix') format('embedded-opentype'),
    url('/fonts/DIN2014-Light.woff') format('woff'),
    url('/fonts/DIN2014-Light.woff2') format('woff2'),
    url('/fonts/DIN2014-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'DIN 2014';
    src: url('/fonts/DIN2014-ExtraBoldItalic.eot');
    src: local('DIN 2014 ExtraBold Italic'), local('DIN2014-ExtraBoldItalic'),
    url('/fonts/DIN2014-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),
    url('/fonts/DIN2014-ExtraBoldItalic.woff') format('woff'),
    url('/fonts/DIN2014-ExtraBoldItalic.woff2') format('woff2'),
    url('/fonts/DIN2014-ExtraBoldItalic.ttf') format('truetype');
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'DIN 2014';
    src: url('/fonts/DIN2014-ExtraLight.eot');
    src: local('DIN 2014 ExtraLight'), local('DIN2014-ExtraLight'),
    url('/fonts/DIN2014-ExtraLight.eot?#iefix') format('embedded-opentype'),
    url('/fonts/DIN2014-ExtraLight.woff') format('woff'),
    url('/fonts/DIN2014-ExtraLight.woff2') format('woff2'),
    url('/fonts/DIN2014-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'DIN 2014';
    src: url('/fonts/DIN2014-ExtraBold.eot');
    src: local('DIN 2014 ExtraBold'), local('DIN2014-ExtraBold'),
    url('/fonts/DIN2014-ExtraBold.eot?#iefix') format('embedded-opentype'),
    url('/fonts/DIN2014-ExtraBold.woff') format('woff'),
    url('/fonts/DIN2014-ExtraBold.woff2') format('woff2'),
    url('/fonts/DIN2014-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'DIN 2014';
    src: url('/fonts/DIN2014-ExtraLightItalic.eot');
    src: local('DIN 2014 ExtraLight Italic'), local('DIN2014-ExtraLightItalic'),
    url('/fonts/DIN2014-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),
    url('/fonts/DIN2014-ExtraLightItalic.woff') format('woff'),
    url('/fonts/DIN2014-ExtraLightItalic.woff2') format('woff2'),
    url('/fonts/DIN2014-ExtraLightItalic.ttf') format('truetype');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'DIN 2014';
    src: url('/fonts/DIN2014-Regular.eot');
    src: local('DIN 2014 Regular'), local('DIN2014-Regular'),
    url('/fonts/DIN2014-Regular.eot?#iefix') format('embedded-opentype'),
    url('/fonts/DIN2014-Regular.woff') format('woff'),
    url('/fonts/DIN2014-Regular.woff2') format('woff2'),
    url('/fonts/DIN2014-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'DIN 2014';
    src: url('/fonts/DIN2014-Italic.eot');
    src: local('DIN 2014 Italic'), local('DIN2014-Italic'),
    url('/fonts/DIN2014-Italic.eot?#iefix') format('embedded-opentype'),
    url('/fonts/DIN2014-Italic.woff') format('woff'),
    url('/fonts/DIN2014-Italic.woff2') format('woff2'),
    url('/fonts/DIN2014-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'DIN 2014';
    src: url('/fonts/DIN2014-Bold.eot');
    src: local('DIN 2014 Bold'), local('DIN2014-Bold'),
    url('/fonts/DIN2014-Bold.eot?#iefix') format('embedded-opentype'),
    url('/fonts/DIN2014-Bold.woff') format('woff'),
    url('/fonts/DIN2014-Bold.woff2') format('woff2'),
    url('/fonts/DIN2014-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'DIN 2014';
    src: url('/fonts/DIN2014-BoldItalic.eot');
    src: local('DIN 2014 Bold Italic'), local('DIN2014-BoldItalic'),
    url('/fonts/DIN2014-BoldItalic.eot?#iefix') format('embedded-opentype'),
    url('/fonts/DIN2014-BoldItalic.woff') format('woff'),
    url('/fonts/DIN2014-BoldItalic.woff2') format('woff2'),
    url('/fonts/DIN2014-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'DIN 2014';
    src: url('/fonts/DIN2014-DemiBoldItalic.eot');
    src: local('DIN 2014 DemiBold Italic'), local('DIN2014-DemiBoldItalic'),
    url('/fonts/DIN2014-DemiBoldItalic.eot?#iefix') format('embedded-opentype'),
    url('/fonts/DIN2014-DemiBoldItalic.woff') format('woff'),
    url('/fonts/DIN2014-DemiBoldItalic.woff2') format('woff2'),
    url('/fonts/DIN2014-DemiBoldItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'DIN 2014';
    src: url('/fonts/DIN2014-DemiBold.eot');
    src: local('DIN 2014 DemiBold'), local('DIN2014-DemiBold'),
    url('/fonts/DIN2014-DemiBold.eot?#iefix') format('embedded-opentype'),
    url('/fonts/DIN2014-DemiBold.woff') format('woff'),
    url('/fonts/DIN2014-DemiBold.woff2') format('woff2'),
    url('/fonts/DIN2014-DemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Latinka';
    src: url('/fonts/Latinka-ExtraBold.eot');
    src: local('Latinka ExtraBold'), local('DIN2014-DemiBold'),
    url('/fonts/Latinka-ExtraBold.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Latinka-ExtraBold.woff') format('woff'),
    url('/fonts/Latinka-ExtraBold.woff2') format('woff2'),
    url('/fonts/Latinka-ExtraBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Latinka';
    src: url('/fonts/Latinka-Regular.eot');
    src: local('Latinka Regular'), local('DIN2014-DemiBold'),
    url('/fonts/Latinka-Regular.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Latinka-Regular.woff') format('woff'),
    url('/fonts/Latinka-Regular.woff2') format('woff2'),
    url('/fonts/Latinka-Regular.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Latinka', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  html {
    box-sizing: border-box;
    font-size: 18px;
  }
  
  body {
    font-family: 'Latinka';
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: .05em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
    background: #fafafa;
    position: relative;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    &:hover {
      color:inherit;
    }
  }
  p, ul, ol, a {
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    border: 0;
    border-top: 1px dashed rgba(0, 0, 0, 0.2);
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  
  mark {
    background-color: #FFE1AD;
    position: relative;
    padding: 4px 5px;
    border-radius: 6px;
  }
  
  // hamburger
  .outer-menu {
    z-index: 1;

    .checkbox-toggle {
      z-index: 2;

      &:checked {
        + {
          .hamburger {
            > div {
              transform: rotate(135deg);
              &:before {
                top: 0;
                transform: rotate(90deg);
              }
              &:after {
                top: 0;
                transform: rotate(90deg);
                opacity: 0;
              }
            }
          }
        }
        ~ {
          .menu {
            pointer-events: auto;
            visibility: visible;
            > div {
              transform: scale(1);
              transition-duration: 0.75s;
              > div {
                opacity: 1;
                transition: opacity 0.4s ease 0.4s;
              }
            }
          }
        }
        &:hover {
          + {
            .hamburger {
              > div {
                transform: rotate(225deg);
              }
            }
          }
        }
      }
    }
    .hamburger {
      z-index: 1;
      backface-visibility: hidden;

      > div {
        height: 0.125rem;
        transition: all 0.4s ease;
        -webkit-box-pack: center;
        &:before,
        &:after {
          content: "";
          z-index: 1;
          position: absolute;
          left: 0;
          width: 100%;
          top: -0.5rem;
          height: 0.125rem;
          background: inherit;
          transition: all 0.4s ease;
        }
        &:after {
          top: 0.5rem;
        }
      }
    }
    .menu {
      backface-visibility: hidden;
      outline: 0.0625rem solid transparent;
      > div {
        width: 250vw;
        height: 250vw;
        transform: scale(0);
        border-radius: 50%;
        transition: all 0.4s ease;
        backface-visibility: hidden;
        backdrop-filter: blur(0.625rem);
        -webkit-backdrop-filter: blur(0.625rem);
        background: rgba(0, 0, 0, 0.5);
        @supports not (backdrop-filter: blur(0.625rem)) {
          background: rgba(0, 0, 0, 0.8);
        }

        > div {
          max-width: 90vw;
          transition: opacity 0.4s ease;
        }
      }
    }
  }
`

export default GlobalStyles
