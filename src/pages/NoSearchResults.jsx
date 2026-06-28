import React from 'react';
import PageBanner from '../components/PageBanner';
import EmptyState from '../components/EmptyState';
import { useSEO } from '../utils/useSEO';

const NoSearchResults = () => {
  useSEO('No Search Results Found', 'No products matched your search queries. Try searching other battery sizes or vehicle brands.');

  return (
    <main className="main-content">
      <PageBanner title="Search Results" breadcrumbs={[{ label: 'Home', url: '/' }, { label: 'Search' }]} />
      <div className="section-space-y-axis-100 container">
        <EmptyState
          title="No Match Found"
          message="We couldn't find any products matching your search term. Try checking for spelling errors, using simpler keywords, or using our Battery Finder wizard instead!"
          icon="pe-7s-search"
          actionText="Open Battery Finder"
          actionPath="/battery-finder"
        />
      </div>
    </main>
  );
};

export default NoSearchResults;
