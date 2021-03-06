import { rem } from 'polished';
import styled from 'styled-components';

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.grays[700]};
  font-size: ${({ theme }) => theme.fontSizes.default.size};
  line-height: ${({ theme }) => theme.fontSizes.default.lineHeight};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const StyledInput = styled.input<{ state: 'default' | 'error' }>`
  padding: ${rem('9px')} ${rem('13px')};
  font-size: ${({ theme }) => theme.fontSizes.m.size};
  line-height: ${({ theme }) => theme.fontSizes.m.lineHeight};
  border: 1px solid
      ${(props) =>
          props.state === 'error' ? props.theme.colors.error : props.theme.colors.grays[300]};
  border-radius: ${rem('6px')};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: 0.35s ease;

  &:focus {
    outline: none;
    border: 1px solid
        ${(props) =>
              props.state === 'error' ? props.theme.colors.error : props.theme.colors.grays[500]};
  }

  ${StyledLabel} + & {
    margin-top: ${rem('4px')};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  form &:not(:first-child),
  & + & {
    margin-top: ${rem('24px')};
  }
`;

export const ErrorMessege = styled.div`
  padding-top: ${rem('3px')};
  font-size: ${({ theme }) => theme.fontSizes.default.size};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.fontSizes.default.lineHeight};
  color: ${({ theme }) => theme.colors.error};
`;