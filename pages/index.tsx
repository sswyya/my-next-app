import React, { useState } from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';


const login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showEmailError, setShowEmailError] = useState<string | null>(null);
  const [showPasswordError, setShowPasswordError] = useState<string | null>(null);

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const isValidPassword = (password: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
   
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  
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
    
    if (isValidEmail(email) && isValidPassword(password)) {
      router.push('/landing');
    }
  };
  return (
    <Layout>
      <main className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="login">
          <h1 className="mb-4 text-center"><b>Welcome Back!</b></h1>
          <form>
            <div className="mb-3">
              <label>Email<span style={{ color: 'red' }}>*</span></label>
              <input type="email" className="form-control" placeholder="Email Address" name="email" value={email} onChange={handleEmailChange} required />
              {showEmailError && <p style={{ color: 'red' }}>{showEmailError}</p>}
            </div>
            <div className="mb-3">
              <label>Password<span style={{ color: 'red' }}>*</span></label>
              <input type="password" className="form-control" placeholder="Enter Password" name="password" value={password} onChange={handlePasswordChange} required />
              {showPasswordError && <p style={{ color: 'red' }}>{showPasswordError}</p>}
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
                <span>Sign In</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg>
              </Button>
            </div>
            <div className="mt-5 text-center">
              <label>Don't have any account? <Link href="/Signup" style={{ color: '#0BDAA5', marginLeft: '30px' }}>Sign up</Link></label>
            </div>
          </form>
        </div>
      </main >
    </Layout >
  )
}

export default login;