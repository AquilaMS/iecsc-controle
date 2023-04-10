import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function StateTextFields() {
  const [name, setName] = useState('');
  const [dateBirth, setDateBirth] = useState(null)
  const [estadoCivil, setEstadoCivil] = useState('solteiro')

  useEffect(() => {
    console.log(dateBirth)
  }, [estadoCivil, dateBirth, name]);
  
  const handleDate = (date)=>{
    const newDate = new Date(date)
    console.log(newDate.toString())
  }

  const handleEstadoCivil = (ec) =>{
    setEstadoCivil(ec.target.value)
  }
  const membroTeste = {
    nome: 'joao',
    data_nascimento: '01/01/2001',
    estado_civil: 'solteiro'
  }

  const connect = () => {
    axios.get('http://localhost:3001/membro/get', membroTeste)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <TextField
        id="outlined-controlled"
        label="Nome"
        value={name}
        onChange={(event) => {
          setName(event.target.value)
        }}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker value={dateBirth} format='DD/MM/YYYY' onChange={(newValue) => {handleDate(newValue)}} />
      </LocalizationProvider>
      <RadioGroup
        row
        name="row-radio-buttons-group"
        label='aa'
        value={estadoCivil}
        onChange={handleEstadoCivil}
      >
        <FormControlLabel value="solteiro" control={<Radio />} label="Solteiro" />
        <FormControlLabel value="casado" control={<Radio />} label="Casado" />
        <FormControlLabel value="viuvo" control={<Radio />} label="Viuvo" />
      </RadioGroup>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={connect}>Testar</Button>
      </Stack>
    </Box>
  );
}