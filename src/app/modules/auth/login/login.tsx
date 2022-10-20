import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../userAuthContext';
import GoogleButton from 'react-google-button';
import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    try {
      setLoading(true);
      await logIn(email, password);
      setLoading(false);
      navigate('/home', { replace: true });
    } catch (err: any) {
      setLoading(false);
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e: any) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate('/home', { replace: true });
    } catch (error: any) {
      console.log({ error });
      setError(error.message);
    }
  };

  return (
    <Paper elevation={0}>
      <Container maxWidth='xs' sx={{ mr: 0 }}>
        <Box component='form' sx={{ mt: 2 }}>
          <Stack direction={'column'} spacing={2}>
            <Box>
              <Typography variant='h6' align='center'>
                LOGIN
              </Typography>
              <Typography variant='body1' align='center'>
                Please enter your credentials to login.
              </Typography>
            </Box>
            <Box component='form'>
              <Stack direction={'column'} spacing={2}>
                <TextField
                  id='outline-required'
                  type='text'
                  placeholder='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  id='outlined-password-input'
                  type='password'
                  placeholder='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  variant='contained'
                  onClick={(event) => handleSubmit(event)}
                  disabled={loading}
                >
                  {loading ? 'LogIn...' : 'LogIn'}
                </Button>
                <Box>
                  <GoogleButton
                    type='light'
                    label='Login with Google'
                    onClick={handleGoogleSignIn}
                  />
                </Box>

                {error && <p className={'error'}>{error}</p>}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Paper>
  );
};

export default Login;
