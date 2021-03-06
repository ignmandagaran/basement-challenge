import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { DefaultTheme } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  ${normalize()}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    ${({ theme }) => {
    const { colors, fontSizes, fontFamilies, fontWeights } = theme;
    const styles = `
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background: ${colors.white};
      color: ${colors.black};
      font-size: ${fontSizes.default.size};
      line-height: ${fontSizes.default.lineHeight};
      font-family: ${fontFamilies.default};
      font-weight: ${fontWeights.light};
    `;
    return styles;
    }};
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

export default GlobalStyle;