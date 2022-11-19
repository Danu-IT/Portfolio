import { TextField } from '@mui/material'
import React, { FC, useState } from 'react'
import styled from 'styled-components';
import Button from './UI/Button';

interface FormContactsProps {
    setVisibleModal: (Booleon: boolean) => void;
}

interface Form {
    name?: string;
    email?: string;
    title?: string;
    message?: string;
}

const initialState: Form = {name: '', email: '', title: '', message: ''};

const FormContacts: FC<FormContactsProps> = ({setVisibleModal}) => {
    const [form, setForm] = useState<Form>(initialState);
    let serverForm;
    const handleInput = (e: any) => setForm({...form, [e.target.name]: e.target.value});
    const formSend = (e: React.FormEvent) => {
        e.preventDefault();
        serverForm = form;
        setForm(initialState);
        setVisibleModal(false)
    };
  return (
    <CustomForm onSubmit={formSend}>
        <div style={{ display: 'flex', gap: '10px'}}>
            <TextField value={form.name} name='name' onChange={handleInput} style={{width: '50%'}} size="small" label="Name" variant="outlined" />
            <TextField type='email' value={form.email} name='email' onChange={handleInput} style={{width: '50%'}} size="small" label="Email" variant="outlined" />
        </div>
        <TextField value={form.title} name='title' onChange={handleInput} style={{width: '100%', margin: '16px 0'}} size="small" label="Title" variant="outlined" />
        <TextField value={form.message} name='message' onChange={handleInput}
            placeholder="Message"
            multiline
            color='secondary'
            rows={4}
            style={{width: '100%', marginBottom: '16px'}}
        />
        <Button>Send</Button>
    </CustomForm>
  )
}

interface CustomFormProps {
    onSubmit: (e: any) => void;
}

const CustomForm = styled.form<CustomFormProps>`
    margin: 33px;
    @media (max-width: 1200px){
        margin: 13px;
    }
`

export default FormContacts