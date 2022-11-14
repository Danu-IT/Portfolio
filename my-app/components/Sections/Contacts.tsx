import React, { FC } from 'react';
import CustomSection from '../CustomSection';
import styled from 'styled-components';
import { SiDiscord } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { useTheme } from '@mui/material';

interface ContactsProps {}

const Contacts: FC<ContactsProps> = ({}) => {
  const theme = useTheme();
  return (
    <CustomSection title='contacts'>
      <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '100px'}}>
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
      </div>
    </CustomSection>
  )
}

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