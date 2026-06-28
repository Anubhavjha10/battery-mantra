import React from 'react';
import PageBanner from '../components/PageBanner';
import EmptyState from '../components/EmptyState';
import { useSEO } from '../utils/useSEO';

const Page403 = () => {
  useSEO('403 Forbidden', 'Access is denied. You do not have permissions to access this directory or resource.');

  return (
    <main className="main-content">
      <PageBanner title="403 Forbidden" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Error' }]} />
      <div className="section-space-y-axis-100 container">
        <EmptyState
          title="403 - Forbidden Access"
          message="You do not have the required permissions to view this resource. Please contact administrator support if you believe this is an error."
          icon="pe-7s-shield"
          actionText="Back to Home"
          actionPath="/"
        />
      </div>
    </main>
  );
};

export default Page403;
