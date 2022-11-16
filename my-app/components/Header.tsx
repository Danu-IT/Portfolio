import { useTheme } from '@mui/material'
import { Switch } from '@mui/material'
import React, { Dispatch, FC, SetStateAction } from 'react'
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
                            <Item key={i}><span style={{color: theme.palette.primary.main}}>#</span><Link href={link.path}>{link.name}</Link></Item>
                        )
                    })}
                    <Switch value={themeState} onChange={handlerSwitch} defaultChecked />
                </Navbar>
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
`

export const LogoText = styled.div`
    margin-left: 8px;
`

const Item = styled.li`
    cursor: pointer;
    transition-duration: 100ms;
    :hover{
        scale: 1.05;
        transition-duration: 100ms;
        opacity: 0.9;
    }
`

export default Header