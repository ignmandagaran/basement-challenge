import React from "react";
import Image from "next/image";
import styled from "styled-components";
import SEO from "components/SEO";
import Text from "components/Text";
import Divider from "components/Divider";
import SocialButtons from "components/SocialButtons";
import SignupForm from "components/SignupForm";
import { rem } from "polished";

const Signup = () => {

  return (
    <>
      <SEO title="Home" description="Sign up now!"/>
      <Layout>
        <SideContent>
          <SignUpContainer>
            <Image
              src="/svg/logo.svg"
              alt="BaseGit logo"
              width="50px"
              height="50px"
            />
            <SignupHeader>
              <H1>Sign up to BaseGit</H1>
              <Text weight="light" margin="8px 0 0 0">BaseGit is the best way to store information.</Text>
            </SignupHeader>
            <Text>Continue with a provider</Text>
            <SocialButtons />
            <Divider>
              <Text weight="light">Or with your work email</Text>
            </Divider>
            <SignupForm />
          </SignUpContainer>
        </SideContent>
        <SideImage>
            <Image src="/images/rocket.png" alt="Space rocket" layout="fill" objectFit="cover" />
        </SideImage>
      </Layout>
    </>
  );
};

export default Signup;

const SideImage = styled.div`
  display: none;
  flex-basis: 60%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.colors.black};

  img {
    transition: all 35s ease-in-out;
  }

  &:hover {
    img {
      transition: all 300s linear;
      transform: scale(5);
    }
  }

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    display: block;
  }
`;

const SideContent = styled.section`
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  padding: 0 ${rem('20px')};

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    flex-basis: 40%;
  }
`;

const Layout = styled.main`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const SignUpContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  padding: ${rem('50px')} 0;

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    flex-basis: ${rem('400px')};
  }
`;

const SignupHeader = styled.header`
  padding-bottom: ${rem('32px')};
`;

const H1 = styled.h1`
  ${({ theme }) => {
    return`
      margin: ${rem('15px')} 0 0 0;
      font-weight: ${theme.fontWeights.bold};
      font-size: ${theme.fontSizes.xl.size};
      line-height: ${theme.fontSizes.xl.lineHeight};
      color: ${theme.colors.black};
    `
  }};
`;
