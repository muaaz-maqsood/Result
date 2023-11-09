import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { TextField, Box , Button } from '@mui/material';

const InputsMarks = (props) => {

  const location = useLocation()
  const name = location.state
  console.log(name, "local");

  const naviate = useNavigate()

  const initial = {
    Urdu: " ",
    English: " ",
    Math: " ",
    Chemistry: " ",
    Physics: " "
  }

  const [inputValues, setInputValues] = useState(initial);

  const final = { ...name, ...inputValues }

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues, [e.target.name]: e.target.value,
    });
  };

  const handleUpdateClick = () => {

    console.log(inputValues);
  };

  const handleGoBackClick = () => {
    naviate("/")
  };

  <Box
    sx={{
      height: 20,
      backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? 'rgba(255, 0, 0, 0.1)'
          : 'rgb(255 132 132 / 25%)',
    }}
  />

  return (
    <div className='flex w-full items-center justify-center h-[100vh]'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& .MuiTextField-root': { width: '30ch' },
        }}
      >

        <TextField
          label={'English'}
          name="English"
          value={inputValues.English}
          onChange={handleInputChange}
          id="margin-none" />

        <TextField
          sx={{ mt: 2 }}
          label={'Urdu'}
          name="Urdu"
          value={inputValues.Urdu}
          onChange={handleInputChange}
          id="margin-none" />

        <TextField
          sx={{ mt: 2 }}
          label={'Math'}
          name="Math"
          value={inputValues.Math}
          onChange={handleInputChange}
          id="margin-none" />

        <TextField
          sx={{ mt: 2 }}
          label={'Chemistry'}
          name="Chemistry"
          value={inputValues.Chemistry}
          onChange={handleInputChange}
          id="margin-dense" margin="dense" />

        <TextField
          sx={{ mt: 2 }}
          label={'Physics'}
          name="Physics"
          value={inputValues.Physics}
          onChange={handleInputChange}
          id="margin-normal" margin="normal" />

        <Link to='/printdata' state={final}>

          <Button
            sx={{ mt: 2 }}
            onClick={handleUpdateClick}
            variant="contained"
            size='small'
            color="success">
            Update
          </Button>

        </Link>

        <Button
            sx={{ mt: 2 }}
            onClick={handleGoBackClick}
            variant="contained"
            size='small'
            color="error">
            Back
          </Button>

      </Box>

    </div>
  );
};

export default InputsMarks;


