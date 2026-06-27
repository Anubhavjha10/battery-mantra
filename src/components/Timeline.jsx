import React from 'react';

const Timeline = ({ events = [] }) => {
  return (
    <div className="timeline-container py-4">
      <style>{`
        .timeline-item {
          position: relative;
          padding-left: 35px;
          margin-bottom: 25px;
        }
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: 11px;
          top: 24px;
          bottom: -25px;
          width: 2px;
          background-color: #e9ecef;
          z-index: 1;
        }
        .timeline-item:last-child::before {
          display: none;
        }
        .timeline-badge {
          position: absolute;
          left: 0;
          top: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #fff;
          border: 2px solid #dee2e6;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .timeline-item.completed::before {
          background-color: #28a745;
        }
        .timeline-item.completed .timeline-badge {
          border-color: #28a745;
          background-color: #28a745;
          color: white;
        }
        .timeline-item.active .timeline-badge {
          border-color: #ef3d33;
          background-color: #ffffff;
        }
        .timeline-item.active .timeline-badge::after {
          content: '';
          width: 10px;
          height: 10px;
          background-color: #ef3d33;
          border-radius: 50%;
        }
      `}</style>
      <div className="timeline">
        {events.map((event, idx) => {
          const isCompleted = event.status === 'completed';
          const isActive = event.status === 'active';
          
          return (
            <div
              key={idx}
              className={`timeline-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
            >
              <div className="timeline-badge">
                {isCompleted && <i className="fa fa-check" style={{ fontSize: '0.65rem' }}></i>}
              </div>
              <div className="timeline-content">
                <h5 className={`mb-1 font-weight-bold ${isActive ? 'text-primary' : 'text-dark'}`}>
                  {event.title}
                </h5>
                {event.date && (
                  <span className="text-muted" style={{ fontSize: '0.8rem' }}>
                    {event.date}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
