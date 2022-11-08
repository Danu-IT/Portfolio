import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { MainLayout } from "../components/Layouts/MainLayout";
import { darkTheme, lightTheme } from "./_app";

export default function Home() {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <ThemeProvider theme={!isDark ? darkTheme : lightTheme}>
      <MainLayout isDark={isDark} setIsDark={setIsDark} title="Portfolio"></MainLayout>
    </ThemeProvider>
  )
}
  