import { useTheme } from '@mui/material'
import { Switch } from '@mui/material'
import React, { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components'
import { LinksPortfolio } from '../data'
import {IoLogoNodejs} from 'react-icons/io'

interface PropsHeader {
    isDark: boolean;
    setIsDark: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<PropsHeader> = ({isDark, setIsDark}) => {
    const theme = useTheme();
    console.log(theme.palette.secondary.main)
  return (
    <HeaderContainer colorCustom={theme.palette.primary.dark} bgCustom={theme.palette.primary.light}>
        <HeaderContent>
            <Logo>
                <IoLogoNodejs color={theme.palette.primary.main}/>
                <LogoText>Elias</LogoText>
            </Logo>
            <Navbar>
                {LinksPortfolio.map((link, i) => {
                    return(
                        <Item key={i}><span style={{color: theme.palette.primary.main}}>#</span>{link}</Item>
                    )
                })}
                <Switch value={isDark} onChange={() => setIsDark(prev => !prev)} defaultChecked />
            </Navbar>
        </HeaderContent>
    </HeaderContainer>
  )
}

interface HeaderContainerProps {
    bgCustom: string;
    colorCustom: string;
}

const HeaderContainer = styled.div<HeaderContainerProps>`
    background: ${p => p.bgCustom};
    color: ${p => p.colorCustom};
`

const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1024px;
    height: 80px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`
const Navbar = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
`

const LogoText = styled.div`
    margin-left: 8px;
`

const Item = styled.li`
    cursor: pointer;
    :hover{
        scale: 1.05;
        transition-duration: 500;
        opacity: 0.9;
    }
`

export default Header