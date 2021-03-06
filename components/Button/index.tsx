import styled from 'styled-components';
import { lighten, rem } from 'polished';

interface IButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary';
}

const StyledButton = styled.button<IButtonProps>`
    ${({ variant, theme }) => {
      const { fontSizes, fontWeights, colors, shadows } = theme;

      const primaryStyle =
        variant === "primary"
          ? `
            background-color: ${colors.black};
            color: ${colors.white};

            &:hover, &:focus {
              background-color: ${lighten(0.25, colors.black)};
              box-shadow: ${shadows.sm};
              outline: 0;
            }
          `
          : "";

        const secondaryStyle =
          variant === "secondary"
          ? `
            background-color: ${colors.white};
            border: 1px solid ${colors.grays[300]};
            box-shadow: ${shadows.sm};
            color: ${colors.black};

            &:hover, &:focus {
              border-color: ${colors.black};
              outline: 0;
            }
          `
          : "";

      const styles = `
          display: flex;
          position: relative;
          flex-direction: column;
          align-items: center;
          font-size: ${fontSizes.default.size};
          line-height: ${fontSizes.default.lineHeight};
          font-weight: ${fontWeights.regular};
          padding: ${rem('9px')} ${rem('17px')};
          margin: 0;
          border-radius: ${rem('6px')};
          border: 0;
          white-space: nowrap;
          text-decoration: none;
          transition: 0.35s ease;
          cursor: pointer;
          ${primaryStyle}
          ${secondaryStyle}

      `;
      
      return styles;
    }};
`;

const Button = ({ variant = 'primary', children, ...props }: IButtonProps) => (
  <StyledButton variant={variant} {...props}>
    {children}
  </StyledButton>
);

export default Button;