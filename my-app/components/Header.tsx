import { useTheme } from '@mui/material'
import React, { FC } from 'react'
import styled from 'styled-components'
import { LinksPortfolio } from '../data'
import {IoLogoNodejs} from 'react-icons/io'
import { Media } from './Media'
import Link from 'next/link'
import Burger from './UI/Burger'

interface PropsHeader {}

export interface RootState {
    theme: boolean;
}

const Header: FC<PropsHeader> = ({}) => {
    const theme = useTheme();
    return (
        <HeaderContainer colorCustom={theme.palette.primary.dark} bgCustom={theme.palette.primary.light}>
            <Content color={theme.palette.primary.dark} style={{height: '80px'}}>
                <Link href={LinksPortfolio[0].path}>
                    <Logo colorHover={theme.palette.primary.main}>
                        <IoLogoNodejs color={theme.palette.primary.main}/>
                        <LogoText>Portfolio</LogoText>
                    </Logo>
                </Link>
                <Burger></Burger>
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
    open?: boolean;
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


export const LogoText = styled.div`
    margin-left: 8px;
`

export default Header