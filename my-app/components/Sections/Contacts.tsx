import React, { FC } from 'react';
import CustomSection from '../CustomSection';
import styled from 'styled-components';
import { SiDiscord } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { useTheme } from '@mui/material';

interface ContactsProps {
  title?: string;
  padBot?: string;
}

const Contacts: FC<ContactsProps> = ({title, padBot = '100px'}) => {
  const theme = useTheme();
  return (
    <CustomSection title={title}>
      <CustomContact padBot={padBot}>
        <div>I am interested in finding a job for further development.</div>
        <ContactsMail>
          <span>Message me here</span>
          <ContactsItem colorCustom={theme.palette.primary.main}>
            <SiDiscord style={{cursor: 'pointer'}}></SiDiscord>
            <span>Simvol#8984</span>
          </ContactsItem>
          <ContactsItem colorCustom={theme.palette.primary.main}>
            <FiMail style={{cursor: 'pointer'}}></FiMail>
            <span>d_tareev@mail.ru</span>
          </ContactsItem>
        </ContactsMail>
      </CustomContact>
    </CustomSection>
  )
}

interface CustomContactProps {
  padBot?: string;
}

const CustomContact = styled.div<CustomContactProps>`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${p => p.padBot};
  @media (max-width: 700px){
    flex-direction: column;
    align-items: center;
    gap: 15px;
    text-align: center;
  }
`

const ContactsMail = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center; 
  border: 1px solid gray;
  width: 240px;
  padding: 16px 16px 0 16px;
  & > *{
    padding-bottom: 8px;
  }
`

interface ContactsItemProps {
  colorCustom: string;
}

const ContactsItem = styled.div<ContactsItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    color: ${c => c.colorCustom};
  }
`

export default Contacts