import { useTheme } from '@mui/material';
import React, { FC } from 'react';
import styled from 'styled-components';

interface TitleSectionProps {
    title: string;
    display?: string;
}

const TitleSection: FC<TitleSectionProps> = ({title, display = 'inline-block'}) => {
    const theme = useTheme();
    return (
        <Title display={display}><span style={{color: theme.palette.primary.main}}>#</span>{title}</Title>
    )
}

interface TitleProps {
    display?: string;
}

const Title = styled.h1<TitleProps>`
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    position: relative;
    &::after{
        display: ${p => p.display};
        position: absolute;
        content: "";
        height: 1px;
        background: #C778DD;
        width: 491px;
        top: 20px;
        left: 187px;
    }
    @media (max-width: 1024px){
        &::after{
            display: none;
        }
    }
`

export default TitleSection