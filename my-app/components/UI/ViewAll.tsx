import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';
    
const ViewAll = ({}) => {
  return (
    <ViewAllContainer style={{display: 'flex', alignItems: 'center'}}>
        <span style={{marginRight: '10px'}}>View all</span>
        <BsArrowRight size={'15px'}></BsArrowRight>
    </ViewAllContainer>
  )
}

const ViewAllContainer = styled.a`
    &:hover{
       color: #C778DD;
       cursor: pointer;
    }
`

export default ViewAll  