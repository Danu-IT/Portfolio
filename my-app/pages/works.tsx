import React from 'react'
import { MainLayout } from '../components/Layouts/MainLayout'
import Root from '../components/Root'
import Projects from '../components/Sections/Projects'
import SmallProjects from '../components/Sections/SmallProjects'

const works = ({}) => {
  return (
    <MainLayout title='Works'>
      <Root link='projects' subtitle='List of my projects'></Root>
      <Projects padTop={'90px'}></Projects>
      <SmallProjects></SmallProjects>
    </MainLayout>
  )
}

export default works;