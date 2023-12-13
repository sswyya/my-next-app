import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
const landing: React.FC = () => {
  return (
    <Layout>
      <main className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="text-center">
              <h3 className="mb-4">Landing Page</h3>
              <p className="mb-4">Quote of the day</p>
          </div>
          <div className="card shadow-2-strong" style={{ borderRadius: '1rem', color: '000000', opacity: 0.5, filter: 'blur(24%)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',width: '300px', height: '200px', margin: 'auto' }}>
            <div className="card-body p-5 text-center">
              <p style={{ color: '#B3B3B3' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <b style={{ color: '#212433', marginTop: '20px' }}>-John Does</b>
            </div>
          </div>
          <div className="text-center" style={{ margin: '15%' }}>
            <Link href="/"><b style={{ color: '#DA0B62'}}>Sign Out</b></Link>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default landing;