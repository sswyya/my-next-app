import React, { useState } from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

const Signup: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showEmailError, setShowEmailError] = useState(null);
  const [showPasswordError, setShowPasswordError] = useState(null);
  const [showPasswordConfirmError, setShowPasswordConfirmError] = useState(null);

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function isValidPassword(password: string) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);
  }
  function isValidPasswordConfirm(password: string) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);
  }
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
   
  };
  const handleEmail= (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  
  };

  const handlePasswordConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(event.target.value);
    if (passwordConfirm && event.target.value !== password) {
      setShowPasswordConfirmError('Passwords do not match');
    } else {
      setShowPasswordConfirmError(null);
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!isValidPassword(password)) {
      setShowPasswordError(
        <div>
          Password must be:
          <br/>
          - at least 6 characters
          <br/>
          - contain at least one number
          <br/>
          - contain at least one uppercase letter
          <br/>
          - contain at least one lowercase letter
        </div>
      );
    } else {
      setShowPasswordError(null);
    }
    if (!isValidEmail(email)) {
      setShowEmailError('Email is invalid');
    } else {
      setShowEmailError(null);
    }

    if (!isValidPasswordConfirm(passwordConfirm)) {
      setShowPasswordConfirmError(
        <div>
          Password must be:
          <br/>
          - at least 6 characters
          <br/>
          - contain at least one number
          <br/>
          - contain at least one uppercase letter
          <br/>
          - contain at least one lowercase letter
        </div>
      );
    } else {
      setShowPasswordConfirmError(null);
    }
    if (isValidEmail(email) && isValidPassword(password)) {
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Password Confirm:', passwordConfirm);
      // router.push('/');
    }
  };
  return (
    <Layout>
      <main className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="login">
          <h1 className="mb-4 text-center"><b>Sign up</b></h1>
          <p className="mb-4 text-center">Sign in to your account to continue</p>
          <form>
            <div className="mb-3">
              <label>Email<span style={{ color: 'red' }}>*</span></label>
              <input type="email" className="form-control" placeholder="Email Address" name="email" value={email} onChange={handleEmail} required />
              {showEmailError && <p style={{ color: 'red' }}>{showEmailError}</p>}
            </div>
            <div className="mb-3">
              <label>Password<span style={{ color: 'red' }}>*</span></label>
              <input type="password" className="form-control" placeholder="Enter Password" name="password" value={password} onChange={handlePassword} required />
              {showPasswordError && <p style={{ color: 'red' }}>{showPasswordError}</p>}
            </div>
            <div className="mb-3">
              <label>Confirm Password<span style={{ color: 'red' }}>*</span></label>
              <input type="password" className="form-control" placeholder="Enter Password" name="passwordConfirm" value={passwordConfirm} onChange={handlePasswordConfirm} required />
              {showPasswordConfirmError && <p style={{ color: 'red' }}>{showPasswordConfirmError}</p>}
            </div>
            <div className="mb-3">
              <label>forgot password?</label>
            </div>
            <div className="mb-3">
              <Button onClick={handleSubmit}
                style={{
                  backgroundColor: '#0BDAA5',
                  color: '#FFFFFF',
                  padding: '10px 100px',
                  borderRadius: '15px',
                  boxShadow: '0 0 24px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 'auto',
                }}>
                <span>Sign Up</span>
              </Button>
            </div>
            <div className="mt-5 text-center">
              <label>Already have an account? <Link href="/" style={{ color: '#0BDAA5', marginLeft: '30px' }}>Sign In</Link></label>
            </div>
          </form>
        </div>
      </main >
    </Layout >
  );
};

export default Signup;