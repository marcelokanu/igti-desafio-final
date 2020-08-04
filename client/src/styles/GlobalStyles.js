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
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

button {
  cursor: pointer;
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


.Toastify__toast--success {
  border-radius: 4px;
}

.Toastify__toast--warning {
  color: var(--primary);
  border-radius: 4px;
}


:root {
  --white: #FFFFFF;
  --bg: #f0f0f7;
  --primary: #424242;
  --secondary: #bdbdbd;
  --light-gray: #eeeeee;

  --purple-bg: #8257e5;
  --purple-text: #291344;
  --purple-btn: #8257e5;
  --purple-hover: #956cf5;

  --orange: #fb8c00;
  --orange-text: #804a18;
  --orange-bg-initial-gradient: rgba(255, 229, 191,1);
  --orange-bg-final-gradient: rgba(240, 240, 247,1);


  --red-bg: #e57373;
  --red-bg-light: #fcf2f4;
  --red-bg-initial-gradient: rgba(255, 222, 225,1);
  --red-bg-final-gradient: rgba(240, 240, 247,1);
  --red-text: #802a2a;
  --red-btn: #c75050;
  
  --teal-bg: #04d361;
  --teal-bg-light: #f0f7f7;
  --teal-bg-initial-gradient: rgba(224,242,241,1);
  --teal-bg-final-gradient: rgba(240, 240, 247,1);
  --teal-text: #017a38;
  --teal-btn: #04d361;

  --font-money: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
`;
