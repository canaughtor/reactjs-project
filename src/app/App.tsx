import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/app.route';
import { UserAuthContextProvider } from 'app/modules/auth/userAuthContext';


function App() {
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <AppRoutes />
      </UserAuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
