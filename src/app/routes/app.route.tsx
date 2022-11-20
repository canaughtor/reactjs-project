import { Route, Routes } from 'react-router-dom';
import Home from 'app/modules/home';
import Login from 'app/modules/auth/login/login';
import DataView from 'app/modules/diagnosis/ProtocolView';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/home/clinic-data' element={<DataView />} />
    </Routes>
  );
};
