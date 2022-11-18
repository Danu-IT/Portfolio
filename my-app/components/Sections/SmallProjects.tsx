import React, {FC} from 'react'
import CustomSection from '../CustomSection'
import styled from 'styled-components'
import { simpleProject } from '../../data'
import Button from '../UI/Button'


interface SmallProjectsProps {}

const SmallProjects: FC<SmallProjectsProps> = ({}) => {
  return (
    <CustomSection display='none' title='small-projects'>
      <div style={{paddingBottom: '50px'}}>
      {simpleProject.map((item, i) => (
        <ProjectItem key={i}>
          <ProjectItemHeader>{item.options.map(el => (
              <span style={{color: 'gray'}} key={el}>{el} </span>
          ))}</ProjectItemHeader>
          <ProjectContent>
              <div>{item.name}</div>
              <div style={{color:'gray', fontWeight: '400', fontSize: '16px', lineHeight: '21px'}}>{item.subtitle}</div>
              <Button><a target='blank' href={item.gitHub}>Github</a></Button>
          </ProjectContent>
      </ProjectItem>
      ))}
      </div>
    </CustomSection>
  )
}

const ProjectItem = styled.div`
  border: 1px solid gray;
  max-width: 320px;
  width: 100%;
`
const ProjectItemHeader = styled.div`
  border-bottom: 1px solid gray;
  padding: 5px;
`
const ProjectContent = styled.div`
  padding: 15px;
  &>*{
    margin-bottom: 10px;
  }
`


export default SmallProjects