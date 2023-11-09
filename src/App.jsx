import './App.css';
import Admin from './Components/Admin';
import AdminPassword from './Components/AdminPassword';
import { Route, Routes } from 'react-router-dom';
import Username from './Components/Username';
import InputsMarks from './Components/InputsMarks';
import GetResult from './Components/GetResult';
import PrintData from './Components/PrintData';
import MainResult from './Components/MainResult';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Admin />} />
        <Route path='/password' element={<AdminPassword />} />
        <Route path='/username' element={<Username />} />
        <Route path='/marks' element={<InputsMarks />} />
        <Route path='/getresult' element={<GetResult />} />
        <Route path='/printdata' element={<PrintData />} />
        <Route path='/showresult' element={<MainResult />} />
      </Routes>
    </>
  );
}

export default App;
