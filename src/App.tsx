
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

import { Navbar } from './components';
import {
  Home,
} from './pages';

function App() {

  return (
    <BrowserRouter>
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  </BrowserRouter>
  );
}

export default App;
