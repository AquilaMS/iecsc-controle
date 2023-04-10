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
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import userLogic from '../logics/User'
import DialogModal from '../items/Modal'

export default function StateTextFields() {
  const [name, setName] = useState('');
  const [dateBirth, setDateBirth] = useState(null)
  const [estadoCivil, setEstadoCivil] = useState('solteiro')

  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    console.log(dateBirth)
  }, [estadoCivil, dateBirth, name]);
  
  const handleDate = (date)=>{
    setDateBirth(date)
  }
  
  const handleModalClickOpen = () => {
    setOpen(true)
  };

  const handleModalClose = () => {
    setOpen(false);
  };
  const handleEstadoCivil = (ec) =>{
    setEstadoCivil(ec.target.value)
  }
  
  return (
    <div>
      <DialogModal open={open} handleClose={handleModalClose}  />
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
        inputProps={{ style: { textTransform: "capitalize" } }}
        onChange={(event) => {
          setName(event.target.value)
        }}
      />
      
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker value={dateBirth} format='DD/MM/YYYY' onChange={handleDate} />
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
        <Button variant="contained" onClick={handleModalClickOpen}>Inserir</Button>
      </Stack>
    </Box>
    </div>
  );
}