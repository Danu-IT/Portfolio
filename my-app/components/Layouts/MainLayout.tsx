import  Head  from 'next/head';
import React, { useState, Dispatch, FC, SetStateAction } from 'react'
import { ThemeProvider, useTheme } from '@mui/material'
import Header from '../Header';
import Footer from '../Footer';
import { darkTheme, lightTheme } from '../../pages/_app';

type PropsMainLayouts = {
    children?: React.ReactNode;
    title: string;
}

export const MainLayout: FC<PropsMainLayouts> = ({children, title}) => {
  const theme = useTheme();
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8'/>
      </Head> 
      <ThemeProvider theme={!isDark ? darkTheme : lightTheme}>
        <Header isDark={isDark} setIsDark={setIsDark}></Header>
        <main style={{background: theme.palette.primary.light}}>{children}</main>
        <Footer></Footer>
      </ThemeProvider>
    </>
  )
}