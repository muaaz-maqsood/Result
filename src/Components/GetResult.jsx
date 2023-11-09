import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getStudentData } from '../Actions/Action';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

const GetResult = () => {

    const navigate = useNavigate()

    const [rollNumber, setRollNumber] = useState('');
    const dispatch = useDispatch();

    const handleGetResultClick = () => {
        dispatch(getStudentData(rollNumber));
        navigate("/showresult")
    };

    return (
        <div className='h-[100vh] flex items-center justify-center flex-col'>
            <TextField
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                id="outlined-basic" label="Roll-Number" variant="outlined" />

            <Button
                onClick={handleGetResultClick}
                variant="contained"
                sx={{ mt: 2 }} size='small'
                color="success">
                Get result
            </Button>
        </div>
    );
};

export default GetResult;
