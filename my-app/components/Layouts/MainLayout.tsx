import  Head  from 'next/head';
import React, { useState, Dispatch, FC, SetStateAction } from 'react'
import { ThemeProvider, useTheme } from '@mui/material'
import Header, { RootState } from '../Header';
import Footer from '../Footer';
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from '../../pages/_app';

type PropsMainLayouts = {
    children?: React.ReactNode;
    title: string;
}

export const MainLayout: FC<PropsMainLayouts> = ({children, title}) => {
  const theme = useTheme();
  const selectIsOn = (state: any) => state.theme.theme;
  const themeState = useSelector(selectIsOn);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8'/>
      </Head> 
      <ThemeProvider theme={!themeState ? darkTheme : lightTheme}>
        <div> 
          <Header></Header>
          <main style={{background: theme.palette.primary.light}}>{children}</main>
          <Footer></Footer>
        </div>
      </ThemeProvider>
    </>
  )
}