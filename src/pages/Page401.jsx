import React from 'react';
import PageBanner from '../components/PageBanner';
import EmptyState from '../components/EmptyState';
import { useSEO } from '../utils/useSEO';

const Page401 = () => {
  useSEO('401 Unauthorized', 'Access is denied due to invalid credentials. Please login to access your account.');

  return (
    <main className="main-content">
      <PageBanner title="401 Unauthorized" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Error' }]} />
      <div className="section-space-y-axis-100 container">
        <EmptyState
          title="401 - Unauthorized Access"
          message="You must be logged in to access this page. Please sign in or register an account."
          icon="pe-7s-lock"
          actionText="Login / Register"
          actionPath="/login-register"
        />
      </div>
    </main>
  );
};

export default Page401;
