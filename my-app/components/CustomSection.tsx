import React, { FC } from 'react';
import { useTheme } from '@mui/material'
import styled from 'styled-components';
import { ContainerProps, Content } from './Header';
import TitleSection from './TitleSection';
import ViewAll from './UI/ViewAll';

interface CustomSectionProps {
    title: string;
    children: React.ReactNode;
    ViewAllVisible?: boolean;
}

const CustomSection: FC<CustomSectionProps> = ({title, children, ViewAllVisible}) => {
  const theme = useTheme();
  return (
    <CustomSectionBlock colorCustom={theme.palette.primary.dark} bgCustom={theme.palette.primary.light}>
      <CustomSectionContainer>
        <TitleContainer>
          <TitleSection title={title}></TitleSection>
          {ViewAllVisible && <ViewAll/>}
        </TitleContainer>
        {children}
      </CustomSectionContainer>
    </CustomSectionBlock>
  )
}

const CustomSectionBlock = styled.section<ContainerProps>`
  margin-top: 100px;
  background: ${p => p.bgCustom};
  color: ${p => p.colorCustom};
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CustomSectionContainer = styled(Content)`
  display: block;
`

export default CustomSection