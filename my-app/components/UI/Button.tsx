import styled from 'styled-components'
import React, {FC} from 'react'
import { useTheme } from '@mui/material'

type ButtonProps = {
    children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({children}) => {
    const theme = useTheme();
  return (
    <Container colorHover={theme.palette.primary.light} color={theme.palette.primary.dark} border={theme.palette.primary.main}>
        <TextButton>{children}</TextButton>
    </Container>
  )
}

interface ContainerProps {
    border?: string;
    color?: string;
    colorHover?: string;
}

const Container = styled.button<ContainerProps>`
    border: 1px solid ${b => b.border};
    background: transparent;
    color: ${p => p.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 500ms;
    padding: 8px 16px;
    &:hover {
        background: ${p => p.color};
        border: 1px solid ${b => b.border};
        color: ${b => b.colorHover};
    }
`
const TextButton = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
`

export default Button