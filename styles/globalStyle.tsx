import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { DefaultTheme } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  ${normalize()}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    ${({ theme }) => {
    const { colors, fontSizes, fontFamilies, fontWeights } = theme;

    const styles = `
      background: ${colors.white};
      color: ${colors.black};
      font-size: ${fontSizes.default};
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