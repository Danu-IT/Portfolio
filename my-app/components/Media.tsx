import React, {FC} from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {SlSocialVkontakte} from 'react-icons/sl'
import {FiFigma} from 'react-icons/fi';
import styled from 'styled-components';

interface MediaProps {}

export const Media:FC<MediaProps> = ({}) => {
  return (
    <MediaContainer>
      <AiFillGithub></AiFillGithub>
      <SlSocialVkontakte></SlSocialVkontakte>
      <FiFigma></FiFigma>
    </MediaContainer>
  )
}

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 190px;
  left: -100px;
  & > * {
    margin-bottom: 12px;
    cursor: pointer;
    &:hover{
      opacity: 0.8;
      scale: 1.1;
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