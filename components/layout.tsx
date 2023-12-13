import React, { ReactNode } from 'react';
// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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