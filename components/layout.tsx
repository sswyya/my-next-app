import React, { ReactNode } from 'react';
// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import swal from 'sweetalert';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// export const metadata: Metadata = {
//   title: 'nextinnovation',
// };
interface LayoutProps {
  children: ReactNode;
} 
const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <main>{children}</main>
  </div>
);


export default Layout;