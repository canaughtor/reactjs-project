import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../userAuthContext';
import './login.scss';
import GoogleButton from 'react-google-button';

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
      navigate('/home');
    } catch (err: any) {
      setLoading(false);
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e: any) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate('/home');
    } catch (error: any) {
      console.log({ error });
      setError(error.message);
    }
  };

  return (
    <div className={'login-page'}>
      <div className={'form'}>
        <div className={'login'}>
          <div className={'login-header'}>
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form className={'login-form'}>
          <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <button className={'login-btn'} onClick={(event) => handleSubmit(event)} disabled={loading}>
            {loading ? 'LogIn...' : 'LogIn'}
          </button>
          <GoogleButton className={'g-btn'} type="light" label="Login with Google" onClick={handleGoogleSignIn} />
          {error && <p className={'error'}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;

