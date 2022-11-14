import React, {FC} from 'react'
import { skills } from '../../data'
import CustomSection from './../CustomSection'
import styled from 'styled-components';
import { useTheme } from '@mui/material'

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  const theme = useTheme();
  return (
    <CustomSection title='skills'>
      <div style={{display: 'flex', gap: '8px'}}>
        {skills.map((skill, i) => (
          <SkillItem key={i}>
            <SkillItemText>{skill.name[0].toUpperCase() + skill.name.slice(1)}</SkillItemText>
            <span style={{display: 'flex', flexWrap: 'wrap', padding: '8px'}}>{skill.options.map((option, i) =><span key={i}>{option}&nbsp; </span>)}</span>
          </SkillItem>
        ))}
      </div>
    </CustomSection>
  )
}

const SkillItemText = styled.span`
  padding: 8px;
  border-bottom: 1px solid gray;
`

const SkillItem = styled.div`
  width: 178px;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
`

export default Skills