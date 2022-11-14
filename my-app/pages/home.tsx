import { MainLayout } from "../components/Layouts/MainLayout"
import HeaderMain from "../components/Sections/HeaderMain"
import Projects from "../components/Sections/Projects"
import Skills from "../components/Sections/Skills"
import AboutMe from "../components/Sections/AboutMe"
import Contacts from "../components/Sections/Contacts"

export default function Home() {
  return (
      <MainLayout title="Portfolio">
        <HeaderMain></HeaderMain>
        <Projects title='projects'></Projects>
        <Skills></Skills>
        <AboutMe></AboutMe>
        <Contacts></Contacts>
      </MainLayout>
  )
}