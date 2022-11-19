import { MainLayout } from "../components/Layouts/MainLayout"
import HeaderMain from "../components/Sections/HeaderMain"
import Projects from "../components/Sections/Projects"
import Skills from "../components/Sections/Skills"
import AboutMe from "../components/Sections/AboutMe"
import Contacts from "../components/Sections/Contacts"

export default function Home() {
  return (
      <MainLayout title='Home'>
        <HeaderMain></HeaderMain>
        <Projects title='projects'></Projects>
        <Skills></Skills>
        <AboutMe title='about-me'></AboutMe>
        <Contacts title='contacts'></Contacts>
      </MainLayout>
  ) 
}