import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { MainLayout } from "../components/Layouts/MainLayout";
import { darkTheme, lightTheme } from "./_app";
import HeaderMain from "../components/HeaderMain";
import Projects from "../components/Projects";

export default function Home() {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <ThemeProvider theme={!isDark ? darkTheme : lightTheme}>
      <MainLayout isDark={isDark} setIsDark={setIsDark} title="Portfolio">
        <HeaderMain></HeaderMain>
        <Projects></Projects>
      </MainLayout>
    </ThemeProvider>
  )
}