import { rem } from 'polished';
import styled from 'styled-components';

const Divider = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 100%;
  padding: ${rem('24px')} 0;

  &::before {
    content: '';
    display: flex;
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.grays[300]};
    margin-right: ${rem('8px')};
  }

  &::after {
    content: '';
    display: flex;
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.grays[300]};
    margin-left: ${rem('8px')};
  }
`;

export default Divider;