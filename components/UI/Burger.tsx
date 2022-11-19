import React, { FC, useState } from 'react'
import styled from "styled-components"
import { useTheme } from '@mui/material'
import { ContainerProps, RootState } from '../Header';
import { LinksPortfolio } from '../../data';
import { Switch } from '@mui/material'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../feauters/theme/themeSlice';

interface BurgerProps {}

const Burger: FC<BurgerProps> = ({}) => {
    const selectIsOn = (state: RootState) => state.theme;
    const themeState = useSelector(selectIsOn);
    const theme = useTheme();
    const [open, setOpen] = useState<boolean>(true);
    const dispatch = useDispatch();
    const handlerSwitch = () => {
        dispatch(setTheme(themeState));
    }
  return (
    <>
    <CustomBurger open={open} onClick={() => setOpen(prev => !prev)} colorCustom={theme.palette.primary.dark}>
        <div></div>
        <div></div>
        <div></div>
    </CustomBurger>
    <Navbar open={open} bgCustom={theme.palette.primary.light}>
        {LinksPortfolio.map((link, i) => {
            return(
                <ItemCustom onClick={() => setOpen(true)} key={i}><CustomSpan colorCustom={theme.palette.primary.main}>#</CustomSpan><Link href={link.path}>{link.name}</Link></ItemCustom>
            )
        })}
        <Switch value={themeState} onChange={handlerSwitch} defaultChecked />
    </Navbar>
    </>
  )
}

const CustomBurger = styled.div<ContainerProps>`
    display: none;
    @media (max-width: 1200px){
        display: flex;
        width: 2rem;
        height: 2rem;
        position: fixed;
        top: 15px;
        right: 20px;
        flex-direction: column;
        justify-content: space-around;
        z-index: 50;
        div{
            width: 2rem;
            height: 0.25rem;
            background: ${p => p.open ? p.colorCustom : 'gray'};
            transform-origin: 1px;
            transition: all 0.3s  linear;
            &:nth-child(1){
                transform: ${p => !p.open ? 'rotate(45deg)' : 'rotate(0)'}
            }
            &:nth-child(2){
                transform: ${p => !p.open ? 'translateX(100%)' : 'translateX(0)'};
                opacity: ${p => !p.open ? 0 : 1}
            }
            &:nth-child(3){
                transform: ${p => !p.open ? 'rotate(-45deg)' : 'rotate(0)'}
            }
        }
    }
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

const Navbar = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    gap: 32px;
    @media (max-width: 1200px){
        /* display: none; */
        flex-direction: column;
        align-items: flex-start;
        position: fixed;
        transform: ${p => p.open ? 'translateX(100%)' : 'translateX(0)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 35%;
        z-index: 15;
        background-color: ${p => p.bgCustom};
        padding: 100px 0 0 40px;
        box-shadow: 20px 20px 20px black;
        transition: transform 0.3s ease-in-out;
    }
    @media (max-width: 750px){
        width: 60%;
    }
    @media (max-width: 450px){
        width: 100%;
    }
`

const CustomSpan = styled.span<ContainerProps>`
    color: ${p => p.colorCustom};
`

export default Burger