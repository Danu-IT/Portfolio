import React, { FC } from 'react'
import { useTheme } from '@mui/material'
import { AiFillGithub } from 'react-icons/ai'
import { SlSocialVkontakte } from 'react-icons/sl'
import { FiFigma } from 'react-icons/fi';
import styled from 'styled-components';
import { ContainerProps, Logo, LogoText } from './Header';
import { IoLogoNodejs } from 'react-icons/io';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
    const theme = useTheme();
    return (
      <FooterContainer colorCustom={theme.palette.primary.dark} bgCustom={theme.palette.primary.light}>
        <FooterContent>
          <FooterLogo>
            <Logo>
              <IoLogoNodejs color={theme.palette.primary.main}/>
              <LogoText>Elias</LogoText>
            </Logo>
            <span>Media</span>
          </FooterLogo>
          <FooterMail>
            <span>Front-end developer based in Russia</span>
            <Media>
              <a target='blank' href="https://github.com/Danu-IT"><AiFillGithub size={'20px'}></AiFillGithub></a>
              <a target='blank' href="#"><SlSocialVkontakte size={'20px'}></SlSocialVkontakte></a>
              <a target='blank' href="#"><FiFigma size={'20px'}></FiFigma></a>
            </Media>
          </FooterMail>
          <span style={{display: 'flex', justifyContent: 'center', marginTop: '35px'}}>© Copyright 2022. Made by Elias</span>
        </FooterContent>
      </FooterContainer>
    )
}

const FooterContainer = styled.div<ContainerProps>`
    background: ${p => p.bgCustom};
    color: ${p => p.colorCustom};
    border-top: 1px solid gray;
    padding: 35px 0 20px 0;
`

const FooterContent = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  position: relative;
`

const FooterLogo = styled.div`
  display: flex;
  justify-content: space-between;
`

const FooterMail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 400px){
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 15px;
  }
`

const Media = styled.div`
  & > * {
    margin-left: 10px;
    & : hover{
    opacity: 0.8;
    scale: 1.05;
    color: #C778DD;
  }
  }
`

export default Footer