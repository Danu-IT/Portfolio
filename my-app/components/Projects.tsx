import React, {FC} from 'react';
import { projects } from '../data';
import CustomSection from './CustomSection';
import styled from 'styled-components';
import Image from 'next/image';
import Button from './UI/Button';
import { useTheme } from '@mui/material'

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  const theme = useTheme();
  return (
    <CustomSection ViewAllVisible={true} title='projects'>
      <ProjectContainer>
        {projects.map((project, i) => (
          <ProjectItem key={i}>
            <Image alt="Picture of the author" width={330} height={200} style={{marginBottom: '-10px'}} src='/fake.jpg'></Image>
            <ProjectItemOptions>
              {project.options.map(option => (
                <ItemOptions key={i}>{option}  </ItemOptions>
              ))}
            </ProjectItemOptions>
            <ProjectInfo>
              <Title>{project.name}</Title>
              <div>{project.subtitle}</div>
              <ButtonContainer>
                <Button>
                  <a href={project.gitHub} target='blank'>GitHub</a>
                </Button>
                {project.deploy && 
                <Button>
                  <a href={project.deploy} target='blank'>Deploy</a>
                </Button>}
              </ButtonContainer>
            </ProjectInfo>
          </ProjectItem>
        ))}
      </ProjectContainer>
    </CustomSection>
  )
}

const ProjectContainer = styled.div`
  display: flex;
  width: 330px;
  gap: 15px;
`


const ProjectItem = styled.div`
  border: 1px solid gray;
`

const ProjectItemOptions = styled.div`
  border: 1px solid gray;
  padding: 8px;
`

const ItemOptions = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #ABB2BF;
`

const ProjectInfo = styled.div`
  padding: 16px;
  & > * {
    padding-bottom: 10px;
  }
`

const Title = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 5px;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  & > *{
    margin-right: 10px;
  }
`


export default Projects