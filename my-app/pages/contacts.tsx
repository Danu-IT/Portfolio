import React from 'react'
import { MainLayout } from '../components/Layouts/MainLayout'
import Root from '../components/Root'
import AllMedia from '../components/Sections/AllMedia'
import Contacts from '../components/Sections/Contacts'

type Props = {}

const contacts = (props: Props) => {
  return (
    <MainLayout title='Contacts'>
      <Root link='projects' subtitle='Who am i'></Root>
      <Contacts padBot='0px'></Contacts>
      <AllMedia></AllMedia>
    </MainLayout>
  )
}

export default contacts