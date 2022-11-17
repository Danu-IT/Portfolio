import React from 'react'
import { MainLayout } from '../components/Layouts/MainLayout'
import Root from '../components/Root'
import AboutMe from '../components/Sections/AboutMe'
import MyFanFacts from '../components/Sections/MyFanFacts';
import Skills from '../components/Sections/Skills';

const aboutMe = ({}) => {
  return (
    <MainLayout title='AboutMe'>
      <Root link='about-me' subtitle='Who am i'></Root>
      <AboutMe padTop={'40px'}></AboutMe>
      <Skills></Skills>
      <MyFanFacts></MyFanFacts>
    </MainLayout>
  )
}

export default aboutMe