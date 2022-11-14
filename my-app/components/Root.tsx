import { useTheme } from '@mui/material'
import React, { FC } from 'react'
import styled from 'styled-components'
import { ContainerProps } from './Header';

interface RootProps {
    link: string;
    subtitle?: string;
}

const Root: FC<RootProps> = ({link, subtitle}) => {
    const theme = useTheme();
    return (
        <RootContainer colorCustom={theme.palette.primary.dark} bgCustom={theme.palette.primary.light}>
            <div style={{margin: '0 auto', maxWidth: '1024px'}}>
                <RootCustom><span style={{color: theme.palette.primary.main}}>/</span>{link}</RootCustom>
                <span style={{fontSize: '16px', fontWeight: '400'}}>{subtitle}</span>
            </div>
        </RootContainer>
    )
}

const RootContainer = styled.div<ContainerProps>`
    background: ${p => p.bgCustom};
    color: ${p => p.colorCustom};
    font-size: 32px;
    line-height: 42px;
`

const RootCustom = styled.div``

export default Root