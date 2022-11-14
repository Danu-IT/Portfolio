import React, {FC} from 'react'
import { ContainerProps, Content } from "../Header";
import Button from "../UI/Button";
import styled from "styled-components";
import { useTheme } from '@mui/material';


interface HeaderMainProps {}

const HeaderMain: FC<HeaderMainProps> = ({}) => {
    const theme = useTheme();
    return (
    <HederContainer colorCustom={theme.palette.primary.dark} bgCustom={theme.palette.primary.light}>
        <HeaderContent>
            <HeaderLeft>
              <Text>Daniil is a</Text>
              <Text><span style={{color:theme.palette.primary.main }}>front-end developer</span></Text>
              <SmallText style={{margin: '25px 0'}}>He crafts responsive websites where technologies meet creativity</SmallText>
              <Button>Contact me!!</Button>
            </HeaderLeft>
            <HeaderRight>
              <User src='./User.png'></User>
              <LogoMain src='./LogoMain.svg'></LogoMain>
              <Dots src='./Dots.svg'></Dots>
              <TextImage>Currently working on Portfolio</TextImage>
            </HeaderRight>
          </HeaderContent>
    </HederContainer>
    )
}

const HederContainer = styled.div<ContainerProps>`
    background: ${p => p.bgCustom};
    color: ${p => p.colorCustom};
    padding-top: 50px;
`

const HeaderContent = styled(Content)`
  display: flex;
`

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Text = styled.span`
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
`
const SmallText = styled.span<ContainerProps>`
  font-size: 16px;
  line-height: 25px;
  color: ${p => p.colorCustom};
`
const HeaderRight = styled.div`
  position: relative;
`

const User = styled.img`
  object-fit: cover;
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100%;
`

const TextImage = styled.span`
  position: absolute;
  bottom: -35px;
  left: 50px;
  border: 1px solid #ABB2BF;
  padding: 8px 30px;
  font-weight: 800;
`

const LogoMain = styled.img`
  position: absolute;
  z-index: 2;
  left: 0;
  top: 80px
`

const Dots = styled.img`
  position: absolute;
  right: 51px;
  top: 209px;
  z-index: 101;
`

export default HeaderMain