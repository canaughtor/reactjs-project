import { Route, Routes } from 'react-router-dom';
import Home from 'app/modules/home';
import Login from 'app/modules/auth/login/login';

export const AppRoutes = () => { return (
<Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element ={<Home />} />
  </Routes>
)
  } 
