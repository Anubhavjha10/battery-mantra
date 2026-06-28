import{j as e}from"./index-MdZilMij.js";const s=({events:l=[]})=>e.jsxs("div",{className:"timeline-container py-4",children:[e.jsx("style",{children:`
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
      `}),e.jsx("div",{className:"timeline",children:l.map((i,a)=>{const t=i.status==="completed",o=i.status==="active";return e.jsxs("div",{className:`timeline-item ${t?"completed":""} ${o?"active":""}`,children:[e.jsx("div",{className:"timeline-badge",children:t&&e.jsx("i",{className:"fa fa-check",style:{fontSize:"0.65rem"}})}),e.jsxs("div",{className:"timeline-content",children:[e.jsx("h5",{className:`mb-1 font-weight-bold ${o?"text-primary":"text-dark"}`,children:i.title}),i.date&&e.jsx("span",{className:"text-muted",style:{fontSize:"0.8rem"},children:i.date})]})]},a)})})]});export{s as T};
