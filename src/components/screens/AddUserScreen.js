import * as React from 'react';
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
  const [name, setName] = React.useState('Cat in the Hat');

  const connect = () => {
    axios.get('http://localhost:3001/')
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
          setName(event.target.value);
        }}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label='Data de Nascimento' />
      </LocalizationProvider>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        label='aa'
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