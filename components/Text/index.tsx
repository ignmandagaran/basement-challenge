import styled, { css } from 'styled-components';

interface ITextProps {
  weight?: 'light' | 'regular' | 'bold';
  padding?: string;
  margin?: string;
}

const Text = styled.p<ITextProps>`
  ${({ weight, margin, padding, theme }) => {
    const { fontSizes, fontWeights, colors } = theme;

    const styles = `
        padding: ${padding || 0};
        margin: ${margin || 0};
        font-size: ${fontSizes.default.size};
        line-height: ${fontSizes.default.lineHeight};
        
        ${weight === 'light' 
          ? `
            font-weight: ${fontWeights.light};
            color: ${colors.grays[600]};
          `
          : ""}
        
        ${weight === 'regular' 
          ? `
            font-weight: ${fontWeights.regular};
            color: ${colors.black};
          `
          : ""}
    `;
      
    return styles;
  }}
`;

Text.defaultProps = {
  weight: 'regular',
};

export default Text;
