import React, {FC} from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {SlSocialVkontakte} from 'react-icons/sl'
import {FiFigma} from 'react-icons/fi';
import styled from 'styled-components';
import { ContainerProps } from './Header';
import { useTheme } from '@mui/material';

interface MediaProps {}

export const Media:FC<MediaProps> = ({}) => {
  const theme = useTheme();
  return (
    <MediaContainer colorCustom={theme.palette.primary.dark}>
      <AiFillGithub></AiFillGithub>
      <SlSocialVkontakte></SlSocialVkontakte>
      <FiFigma></FiFigma>
    </MediaContainer>
  )
}

const MediaContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 190px;
  left: -100px;
  color: ${p => p.colorCustom};
  & > * {
    margin-bottom: 12px;  
    cursor: pointer;
    transition-duration: 500ms;
    &:hover{
      opacity: 0.8;
      scale: 1.05;
      color: #C778DD;
    }
  }
  &::after{
    position: absolute;
    content: "";
    height: 1px;
    background: #ABB2BF;
    width: 191px;
    transform: rotate(90deg);
    top: -119px;
    left: -87px; 
  }
`