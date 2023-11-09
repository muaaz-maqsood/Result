import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Box, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Username = () => {
  const initial = {
    username: '',
    id: '',
  };

  const [formData, setFormData] = useState(initial);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleButtonClick = () => {
    console.log(formData, 'state');
  };

  return (
    <div className='flex flex-col justify-center items-center h-[100vh] w-full'>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          id="input-with-sx"
          label="User-name : "
          variant="standard"
        />
      </Box>

      <TextField
        sx={{ mt: 2, ml: 4, width: 200 }}
        name="id"
        value={formData.id}
        onChange={handleInputChange}
        id="standard-multiline-flexible"
        label="Roll Number : "
        multiline
        maxRows={4}
        variant="standard"
      />

      <Link to='/marks' state={formData}>
        <Button
          sx={{ mt: 3 }}
          onClick={handleButtonClick}
          variant="contained"
          size='small'
          color="success">
          Enter
        </Button>
      </Link>
    </div>
  );
};

export default Username;
