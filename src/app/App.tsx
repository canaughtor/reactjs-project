import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/app.route';
import { UserAuthContextProvider } from 'app/modules/auth/userAuthContext';
import { Navbar } from './modules/navbar/navbar';


function App() {
  return (
    <>
    <BrowserRouter>
      <UserAuthContextProvider>
        <Navbar/>
        <AppRoutes />
      </UserAuthContextProvider>
    </BrowserRouter>
    </>
    
  );
}

export default App;
