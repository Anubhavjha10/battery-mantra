import React from 'react';

const SectionHeader = ({ title, subtitle, align = 'center', className = '' }) => {
  return (
    <div className={`section-title text-${align} mb-9 ${className}`}>
      {subtitle && <span className="sub-title text-primary d-block mb-2">{subtitle}</span>}
      <h2 className="title mb-0">{title}</h2>
    </div>
  );
};

export default SectionHeader;
