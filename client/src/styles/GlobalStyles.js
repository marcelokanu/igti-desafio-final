import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  color: var(--tertiary)
}

html, body, root {
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  height: 100%;
}

*, button, input {
  border: 0;
  background: none;

  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

html {
  background: var(--bg);
}

:root {
  --white: #FFFFFF;
  --bg: #f5f5f5;
  --primary: #424242;
  --secondary: #bdbdbd;
  --light-gray: #eeeeee;

  --purple-bg: #6934a8;
  --purple-text: #291344;
  --purple-btn: #4a148c;
  --purple-hover: #6f42c1;

  --orange: #fb8c00;

  --red-bg: #e57373;
  --red-bg-light: #fcf2f4;
  --red-text: #5c1a1a;
  
  --teal-bg: #4db6ac;
  --teal-bg-light: #f0f7f7;
  --teal-text: #1a5c59;

  --font-money: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
`;