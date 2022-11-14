import React, {FC} from 'react'
import { MainLayout } from '../components/Layouts/MainLayout'
import Root from '../components/Root'
import Projects from '../components/Sections/Projects'

interface WorksProps {}

const works: FC<WorksProps> = ({}) => {
  return (
    <MainLayout title='Portfolio'>
      <Root link='projects' subtitle='List of my projects'></Root>
      <Projects padTop={'90px'}></Projects>
    </MainLayout>
  )
}

export default works;