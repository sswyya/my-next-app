import React from 'react'; 
import Layout from '../components/layout';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Register: React.FC = () => {
  return (
    <Layout>
      <main className="flex min-h-screen">
        <div className="col-lg-6 offset-lg-3">
          <div className="login">
           <div className="text-center">
               <h3 className="mb-4">Sign Up</h3>
           </div>
           <form>
                  
                   <div className="mb-3">
                       <input type="email" className="form-control" placeholder="Email Address" name="email" />
                   </div>
                   <div className="mb-3 position-relative">
                       <input type="password" className="form-control" placeholder="Enter Password" name="password" />
                       <i className="bi bi-eye-slash form-control-icon" id="togglePassword"></i>
                   </div>
                   <div className="mb-3 form-check">
                       <input type="checkbox" className="form-check-input" id="rememberMe"/>
                       <label className="form-check-label">Remember me</label>
                   </div> 
                   
                    <div className="text-center mb-3"> 
                           <button type="submit" className="btn-massege mb-0">เข้าสู่ระบบ</button>
                    </div> 
           </form>
                  <div className="contectss mt-5">
                  <Link href="login"><h1>Login</h1></Link>
                  </div> 
           </div> 
        </div> 
      </main>
      </Layout>
  );
};

export default Register;