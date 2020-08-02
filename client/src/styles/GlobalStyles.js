import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  
}

html, body, root {
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  font-size: 14px;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  &::-webkit-scrollbar {
    width: 1em;
  }

  
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: var(--purple-bg);
    outline: 1px solid var(--orange);
  }
    
}

*, button, input {
  border: 0;
  background: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

html {
  background: var(--bg);
  
}

.ReactModal__Overlay {
  opacity: 0;
  bottom: -100% !important;
  transform: translateX(-100px);
  transition: bottom 0.5s ease-in-out;
}

.ReactModal__Overlay--after-open {
  opacity: 1;
  transform: translateX(0px);
  bottom: 0 !important;
}

.ReactModal__Overlay--before-close {
  bottom: 0 !important;
  transform: translateX(-100px);
}

.Toastify__toast--dark {
  background: var(--purple-hover);
  border-radius: 4px;
}

.Toastify__toast--warning {
  color: var(--primary);
  border-radius: 4px;
}


:root {
  --white: #FFFFFF;
  --bg: #f5f5f5;
  --primary: #424242;
  --secondary: #bdbdbd;
  --light-gray: #eeeeee;

  --header-bg-initial-gradient: rgba(131, 74, 200, 0);
  --header-bg-final-gradient: rgba(41, 19, 68, 1);

  --purple-bg: #6934a8;
  --purple-text: #291344;
  --purple-btn: #4a148c;
  --purple-hover: #7b47ba;

  --orange: #fb8c00;
  --orange-text: #5c3a1a;
  --orange-bg-initial-gradient: rgba(255,224,178,1);
  --orange-bg-final-gradient: rgba(245,245,245,1);

  --red-bg: #e57373;
  --red-bg-light: #fcf2f4;
  --red-bg-initial-gradient: rgba(255,205,210,1);
  --red-bg-final-gradient: rgba(245,245,245,1);
  --red-text: #5c1a1a;
  --red-btn: #c75050;
  
  --teal-bg: #4db6ac;
  --teal-bg-light: #f0f7f7;
  --teal-bg-initial-gradient: rgba(224,242,241,1);
  --teal-bg-final-gradient: rgba(245,245,245,1);
  --teal-text: #1a5c59;
  --teal-btn: #1a5c59;

  --font-money: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
`;
