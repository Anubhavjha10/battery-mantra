import React from 'react';
import PageBanner from '../components/PageBanner';
import EmptyState from '../components/EmptyState';
import { useSEO } from '../utils/useSEO';

const Page500 = () => {
  useSEO('500 Server Error', 'Internal server error encountered. Our technical team is working on resolving the issue.');

  return (
    <main className="main-content">
      <PageBanner title="500 Server Error" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Error' }]} />
      <div className="section-space-y-axis-100 container">
        <EmptyState
          title="500 - Internal Server Error"
          message="Oops! Something went wrong on our end. We are actively investigating and will have this resolved shortly. Please try reloading the page."
          icon="pe-7s-config"
          actionText="Try Reloading Page"
          actionPath="#"
        />
      </div>
    </main>
  );
};

export default Page500;
