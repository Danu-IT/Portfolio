import React from 'react'
import { facts } from '../../data'
import CustomSection from '../CustomSection'

type Props = {}

const MyFanFacts = (props: Props) => {
  return (
    <CustomSection display='none' title={'my-fun-facts'}>
      <div style={{paddingBottom: '50px'}}>
        {facts.map((fact, i) => (
          <span style={{display: 'inline-block', padding: '8px', border: '1px solid #ABB2BF', margin: '10px'}} key={i}>{fact}</span>
        ))}
      </div>
    </CustomSection>
  )
}

export default MyFanFacts