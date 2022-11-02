import { Route, Routes } from 'react-router-dom';
import Home from 'app/modules/home';
import Login from 'app/modules/auth/login/login';
import DataView from 'app/redux/diagnosis/DataView';
import { RequireAuth } from './RequireAuth';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <RequireAuth>
            <Login />
          </RequireAuth>
        }
      />
      <Route
        path='/home'
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route path='/home/clinic-data' element={<DataView />} />
    </Routes>
  );
};
