import { useTheme } from '@mui/material';
import React, { FC } from 'react';
import styled from 'styled-components';

interface TitleSectionProps {
    title: string;
}

const TitleSection: FC<TitleSectionProps> = ({title}) => {
    const theme = useTheme();
    return (
        <Title><span style={{color: theme.palette.primary.main}}>#</span>{title}</Title>
    )
}

const Title = styled.h1`
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    position: relative;
    &::after{
        position: absolute;
        content: "";
        height: 1px;
        background: #C778DD;
        width: 491px;
        top: 20px;
        left: 187px; 
    }
`

export default TitleSection