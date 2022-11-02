import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import { ThemeProvider } from '@emotion/react';
import theme from './SaweraTheme';
import { CssBaseline } from '@mui/material';
import { fetchData } from 'app/redux/diagnosis/dataSlice';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
console.log('Initial state', store.getState());

store.dispatch(fetchData())


root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
