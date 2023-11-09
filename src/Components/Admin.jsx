import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (

        <div className='h-[100vh] bg-black flex items-center'>
            <div className='mx-auto flex justify-center items-center'>
            <Link to='/password'>
                <button className='btn1 ml-2 mt-3 text-white px-3 py-2 rounded-[10px]'>Admin Panel</button>
            </Link>
            <Link to='/getresult'>
            <button className='btn1 ml-2 mt-3 text-white px-3 py-2 rounded-[10px]'>Check Result</button>
            </Link>
            </div>  
        </div>

    )
}

export default Admin
