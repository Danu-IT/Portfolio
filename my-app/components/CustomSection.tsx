import React, { FC } from 'react';
import { useTheme } from '@mui/material'
import styled from 'styled-components';
import { ContainerProps, Content } from './Header';
import TitleSection from './TitleSection';
import ViewAll from './UI/ViewAll';

interface CustomSectionProps {
    title?: string;
    children: React.ReactNode;
    ViewAllVisible?: boolean;
    padTop?: string;
}

const CustomSection: FC<CustomSectionProps> = ({title, children, ViewAllVisible, padTop = '100px'}) => {
  const theme = useTheme();
  return (
    <CustomSectionBlock padTop={padTop} colorCustom={theme.palette.primary.dark} bgCustom={theme.palette.primary.light}>
      <CustomSectionContainer>
        {title && <TitleContainer>
          <TitleSection title={title}></TitleSection>
          {ViewAllVisible && <ViewAll/>}
        </TitleContainer>}
        <div>{children}</div>
      </CustomSectionContainer>
    </CustomSectionBlock>
  )
}

const CustomSectionBlock = styled.section<ContainerProps>`
  padding-top: ${p => p.padTop};
  background: ${p => p.bgCustom};
  color: ${p => p.colorCustom};
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CustomSectionContainer = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  position: relative;
`

export default CustomSection