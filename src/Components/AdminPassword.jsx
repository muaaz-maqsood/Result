import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Box from '@mui/material/Box';
import {TextField , Box , Button} from '@mui/material';

const AdminPassword = () => {
    const [input, setInput] = useState("");
    const password = "786";
    const [showGoButton, setShowGoButton] = useState(false);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput(e.target.value);
        if (e.target.value === password) {
            setShowGoButton(true);
        } else {
            setShowGoButton(false);
        }
    }

    const handleGoClick = () => {
        if (input === password)
            navigate("/username")
    }

    return (
        <div className='h-[100vh] border-2 border-black flex justify-center items-center'>
              <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField type='password' onChange={handleChange} id="standard-basic" label="Password" variant="standard" />
    </Box>
            {showGoButton && (
                 <Button onClick={handleGoClick} variant="contained" size="small">
                 Next
               </Button>
            )}
        </div>

    )
}

export default AdminPassword;
