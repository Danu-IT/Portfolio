import  Head  from 'next/head';
import React, { Dispatch, FC, SetStateAction } from 'react'
import { useTheme } from '@mui/material'
import Header from '../Header';

type PropsMainLayouts = {
    children?: React.ReactNode;
    title: string;
    isDark: boolean;
    setIsDark: Dispatch<SetStateAction<boolean>>;
}

export const MainLayout: FC<PropsMainLayouts> = ({children, title, isDark, setIsDark}) => {
  const theme = useTheme()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8'/>
      </Head> 
      <Header isDark={isDark} setIsDark={setIsDark}></Header>
      <main style={{background: theme.palette.primary.light}}>{children}</main>
    </>
  )
}