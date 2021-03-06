
import Image from 'next/image';
import Button from "../Button";
import styled from 'styled-components';
import { rem } from 'polished';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${rem('4px')};

  & > button {
    flex: 1;
    &:not(:last-child) {
      margin-right: ${rem('12px')};
    }
  }
`;

const SocialButtons = () => (
    <Container>
        <Button variant="secondary">
            <Image src="/svg/facebook-icon.svg" alt="Facebook" width="20px" height="20px" />
        </Button>
        <Button variant="secondary">
            <Image src="/svg/twitter-icon.svg" alt="Twitter" width="20px" height="20px" />
        </Button>
        <Button variant="secondary">
            <Image src="/svg/github-icon.svg" alt="Github" width="20px" height="20px" />
        </Button>
    </Container>
);

export default SocialButtons;