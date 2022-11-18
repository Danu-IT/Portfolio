import React from 'react'
import { facts } from '../../data'
import CustomSection from '../CustomSection'
import styled from 'styled-components';

type Props = {}

const MyFanFacts = (props: Props) => {
  return (
    <CustomSection display='none' title={'my-fun-facts'}>
      <div style={{paddingBottom: '50px'}}>
        {facts.map((fact, i) => (
          <FanFact key={i}>{fact}</FanFact>
        ))}
      </div>
    </CustomSection>
  )
}

const FanFact = styled.span`
  display: inline-block;
  padding: 8px;
  border: 1px solid #ABB2BF;
  margin: 10px;
  &:hover{
    color: #C778DD;
    cursor: pointer;
  }
`

export default MyFanFacts