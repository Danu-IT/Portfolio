import { useTheme } from '@mui/material'
import { Switch } from '@mui/material'
import React, { FC } from 'react'
import styled from 'styled-components'
import { LinksPortfolio } from '../data'
import {IoLogoNodejs} from 'react-icons/io'
import { Media } from './Media'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setTheme } from '../feauters/theme/themeSlice'

interface PropsHeader {}

export interface RootState {
    theme: boolean;
}

const Header: FC<PropsHeader> = ({}) => {
    const selectIsOn = (state: RootState) => state.theme;
    const themeState = useSelector(selectIsOn);
    const theme = useTheme();
    const dispatch = useDispatch();
    const handlerSwitch = () => {
        dispatch(setTheme(themeState));
    }
    return (
        <HeaderContainer colorCustom={theme.palette.primary.dark} bgCustom={theme.palette.primary.light}>
            <Content color={theme.palette.primary.dark} style={{height: '80px'}}>
                <Link href={LinksPortfolio[0].path}>
                    <Logo colorHover={theme.palette.primary.main}>
                        <IoLogoNodejs color={theme.palette.primary.main}/>
                        <LogoText>Elias</LogoText>
                    </Logo>
                </Link>
                <Navbar>
                    {LinksPortfolio.map((link, i) => {
                        return(
                            <ItemCustom key={i}><span style={{color: theme.palette.primary.main}}>#</span><Link href={link.path}>{link.name}</Link></ItemCustom>
                        )
                    })}
                    <Switch value={themeState} onChange={handlerSwitch} defaultChecked />
                </Navbar>
                <HumbMenu>Menu</HumbMenu>
                <Media></Media>
            </Content>
        </HeaderContainer>
    )
}

export interface ContainerProps {
    bgCustom?: string;
    colorCustom?: string;
    display?: string;
    padTop?: string;
}

const HeaderContainer = styled.div<ContainerProps>`
    background: ${p => p.bgCustom};
    color: ${p => p.colorCustom};
    @media (max-width: 1024px){
        padding: 0 10px;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1024px;
    position: relative;
`

interface LogoProps {
    colorHover?: string;
}

export const Logo = styled.div<LogoProps>`
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover{
        color: ${p => p.colorHover}
    }
`
const Navbar = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    @media (max-width: 1200px){
        display: none;
    }
`

export const LogoText = styled.div`
    margin-left: 8px;
`

const ItemCustom = styled.li`
    cursor: pointer;
    transition-duration: 100ms;
    :hover{
        scale: 1.05;
        transition-duration: 100ms;
        opacity: 0.9;
    }
`

const HumbMenu = styled.span`
    display: none;
    @media (max-width: 1200px){
        display: inline-block;
    }
`

export default Header