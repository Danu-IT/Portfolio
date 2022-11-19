import React, { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components'
import { useTheme } from '@mui/material'

export interface PropsModalContainer {
    visibleModal: boolean;
    colorCustom?: string;
    onClick: () => void;
}

export interface PropsModalContent {
    bgCustom?: string;
}

export interface PropsModal {
    children: React.ReactNode;
    visibleModal: boolean;
    setVisibleModal: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<PropsModal> = ({ children, visibleModal, setVisibleModal }) => {
    const theme = useTheme();
    return (
      <ModalContainer colorCustom={theme.palette.primary.dark} visibleModal={visibleModal} onClick={() => setVisibleModal(false)} >
        <ModalContent bgCustom={theme.palette.primary.light} onClick={(e) => e.stopPropagation()} >{children}</ModalContent>
      </ModalContainer>
    );
};

const ModalContainer = styled.div<PropsModalContainer>`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    display: ${p => p.visibleModal ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.4);
    color: ${p => p.colorCustom};
`

const ModalContent = styled.div<PropsModalContent>`
    position: relative;
    margin: 15px;
    padding: 15px;
    background: ${p => p.bgCustom};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    min-width: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export default Modal;