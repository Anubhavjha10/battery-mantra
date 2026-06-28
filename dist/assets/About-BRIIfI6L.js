import{j as e,g as t,L as r}from"./index-MdZilMij.js";import{S as n,N as c,b as o,P as x}from"./pagination-CUysvhlU.js";const g=()=>{const d=[{name:"Elmer Schmidt",role:"Chief Engineer",img:"assets/images/testimonial/user/2.png",comment:"Excellent doorstep installation service. The technician arrived within an hour of scheduling and handled the disposal of my old inverter battery professionally.",rating:5},{name:"Azul Baldwin",role:"Business Owner",img:"assets/images/testimonial/user/3.png",comment:"Very competitive pricing for bulk UPS batteries. Got official GST invoices and standard manufacturer warranty cards on the spot.",rating:5},{name:"Dustin Mock",role:"Car Owner",img:"assets/images/testimonial/user/1.png",comment:"Bought an Amaron car battery with 5-year warranty. Registration on the portal was easy, and the customer support was extremely helpful.",rating:5}],m=[{name:"Vikas Gupta",role:"Founder & CEO",img:"assets/images/about/team/1-1-400x442.jpg"},{name:"Amit Kumar",role:"Head of Service Operations",img:"assets/images/about/team/1-2-400x442.jpg"},{name:"Sanjay Sharma",role:"Corporate Relationship Manager",img:"assets/images/about/team/1-3-400x442.jpg"}],h=[{name:"Luminous",logoClass:"fa-lightbulb-o"},{name:"Exide",logoClass:"fa-car"},{name:"Amaron",logoClass:"fa-flash"},{name:"AC Delco",logoClass:"fa-gears"},{name:"Livguard",logoClass:"fa-shield"},{name:"Livfast",logoClass:"fa-rocket"},{name:"SF Sonic",logoClass:"fa-plug"}],l=s=>{s.preventDefault();const i=document.getElementById("callback-area");i&&i.scrollIntoView({behavior:"smooth"})};return e.jsxs("main",{className:"main-content",children:[e.jsx("style",{children:`
        /* Hero Section */
        .about-hero-section {
          padding: 100px 0;
          background: linear-gradient(rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.94)), url(${t("assets/images/breadcrumb/bg/1-1-1920x400.jpg")});
          background-size: cover;
          background-position: center;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        
        .about-hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 80% 20%, rgba(230, 46, 46, 0.15), transparent 50%);
          pointer-events: none;
        }
        
        .about-hero-title {
          font-size: 3rem;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .about-hero-title span {
          color: #e62e2e;
          background: linear-gradient(135deg, #e62e2e, #ff5c5c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .about-hero-subtitle {
          font-size: 1.3rem;
          color: #cbd5e1;
          max-width: 750px;
          margin: 0 auto 30px;
          line-height: 1.6;
          font-weight: 400;
        }
        
        .btn-premium-red {
          background: linear-gradient(135deg, #e62e2e, #c51f1f);
          color: #fff !important;
          font-weight: 700;
          padding: 14px 35px;
          border-radius: 30px;
          border: none;
          box-shadow: 0 4px 15px rgba(230, 46, 46, 0.4);
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
        }
        
        .btn-premium-red:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(230, 46, 46, 0.55);
        }
        
        .btn-premium-outline {
          background: transparent;
          color: #fff !important;
          font-weight: 700;
          padding: 13px 35px;
          border-radius: 30px;
          border: 2px solid rgba(255, 255, 255, 0.4);
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
        }
        
        .btn-premium-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #fff;
          transform: translateY(-2px);
        }

        /* Highlight Grid */
        .highlight-item {
          background: #fff;
          padding: 24px;
          border: 1px solid #f1f5f9;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
          transition: all 0.3s;
          height: 100%;
        }
        .highlight-item:hover {
          border-color: rgba(230, 46, 46, 0.2);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.04);
        }
        .highlight-num {
          font-size: 2.2rem;
          font-weight: 800;
          color: #e62e2e;
          margin-bottom: 8px;
        }
        .highlight-title {
          font-weight: 700;
          color: #0f172a;
          font-size: 1rem;
        }

        /* Cards Design */
        .about-card-modern {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 35px 28px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        
        .about-card-modern:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 35px rgba(230, 46, 46, 0.08);
          border-color: rgba(230, 46, 46, 0.15);
        }
        
        .icon-box-red {
          width: 54px;
          height: 54px;
          background: rgba(230, 46, 46, 0.06);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #e62e2e;
          font-size: 22px;
          margin-bottom: 20px;
          transition: all 0.3s;
        }
        
        .about-card-modern:hover .icon-box-red {
          background: #e62e2e;
          color: #fff;
          transform: scale(1.05) rotate(5deg);
        }

        /* Brands section */
        .brand-deal-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 24px;
          text-align: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.01);
          transition: all 0.3s;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .brand-deal-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(230, 46, 46, 0.08);
          border-color: rgba(230, 46, 46, 0.25);
        }
        
        .brand-icon-wrap {
          font-size: 28px;
          color: #e62e2e;
          margin-bottom: 12px;
        }

        /* Timeline Section */
        .timeline-container {
          position: relative;
          padding: 20px 0;
        }
        
        .timeline-step {
          position: relative;
          padding-left: 35px;
          border-left: 2px solid #e2e8f0;
          padding-bottom: 35px;
        }
        
        .timeline-step::before {
          content: '';
          position: absolute;
          left: -7px;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #e62e2e;
          border: 2px solid #fff;
          box-shadow: 0 0 0 3px rgba(230,46,46,0.15);
          transition: all 0.3s;
        }
        
        .timeline-step:hover::before {
          transform: scale(1.35);
          background: #c51f1f;
        }
        
        .timeline-step:last-child {
          border-left: none;
          padding-bottom: 0;
        }
        
        .timeline-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        /* Group Vikas Traders info panel */
        .group-info-panel {
          background: #1e293b;
          color: #f8fafc;
          border-radius: 20px;
          padding: 50px 40px;
          position: relative;
          overflow: hidden;
        }
        
        .group-info-panel::before {
          content: '';
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background: rgba(230, 46, 46, 0.05);
          border-radius: 50%;
          pointer-events: none;
        }

        /* Final CTA */
        .final-cta-section {
          background: linear-gradient(135deg, #e62e2e, #b81b1b);
          color: #fff;
          padding: 80px 0;
          text-align: center;
          position: relative;
        }
      `}),e.jsx("div",{className:"breadcrumb-area breadcrumb-height",style:{backgroundImage:`url(${t("assets/images/breadcrumb/bg/1-1-1920x400.jpg")})`},children:e.jsx("div",{className:"container h-100",children:e.jsx("div",{className:"row h-100",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"breadcrumb-item text-night-rider",children:[e.jsx("h2",{className:"breadcrumb-heading",children:"About Us"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(r,{to:"/",children:"Home /"})}),e.jsx("li",{children:"About Us"})]})]})})})})}),e.jsx("div",{className:"about-hero-section",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsxs("div",{className:"col-lg-10",children:[e.jsxs("h1",{className:"about-hero-title",children:["Welcome to ",e.jsx("span",{children:"Battery Mantra"})]}),e.jsx("h2",{className:"about-hero-subtitle",children:"Vikas Traders — India's famous battery store where you can get every type of battery at a reasonable price."}),e.jsxs("div",{className:"d-flex flex-wrap justify-content-center gap-3",children:[e.jsxs(r,{to:"/shop",className:"btn btn-premium-red",children:[e.jsx("i",{className:"fa fa-shopping-cart"})," Shop Now"]}),e.jsxs("a",{href:"#callback-area",onClick:l,className:"btn btn-premium-outline",children:[e.jsx("i",{className:"fa fa-phone"})," Request CallBack"]})]})]})})})}),e.jsx("div",{className:"about-who-we-are section-space-top-100 section-space-bottom-80",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-lg-6 mb-6 mb-lg-0",children:e.jsxs("div",{className:"pe-lg-5",children:[e.jsx("span",{className:"about-sub-title text-primary font-weight-bold text-uppercase d-block mb-2",style:{letterSpacing:"1.5px"},children:"Trusted Since 2006"}),e.jsx("h3",{className:"font-weight-bold mb-4 text-charcoal",style:{fontSize:"2.1rem"},children:"Who We Are"}),e.jsx("p",{className:"text-muted leading-relaxed mb-4",children:"Welcome to Battery Mantra (Vikas Traders). Are you searching for a battery that can restart your old inverter or upgrade one? Is your car battery not performing the way you want it? Wait! Don't go anywhere else, as you are in the right place. We are Battery Mantra, India's famous battery store where you can get every type of battery at a reasonable price."}),e.jsx("p",{className:"text-muted leading-relaxed mb-0",children:"Our company has been providing quality services to clients since 2006. We know the rising demand of our clients and understand their requirements. Our motive is to make your projects hassle-free. Battery Mantra has a huge variety of brands available from which one can choose the battery of your choice."})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-sm-6",children:e.jsxs("div",{className:"highlight-item text-center",children:[e.jsx("div",{className:"highlight-num",children:"2006"}),e.jsx("div",{className:"highlight-title",children:"Year Established"})]})}),e.jsx("div",{className:"col-sm-6",children:e.jsxs("div",{className:"highlight-item text-center",children:[e.jsx("div",{className:"highlight-num",children:"100%"}),e.jsx("div",{className:"highlight-title",children:"Trusted Store"})]})}),e.jsx("div",{className:"col-sm-6",children:e.jsxs("div",{className:"highlight-item text-center",children:[e.jsx("div",{className:"highlight-num",children:"15+"}),e.jsx("div",{className:"highlight-title",children:"Premium Brands"})]})}),e.jsx("div",{className:"col-sm-6",children:e.jsxs("div",{className:"highlight-item text-center",children:[e.jsx("div",{className:"highlight-num",children:"Pan India"}),e.jsx("div",{className:"highlight-title",children:"Delivery Network"})]})})]})})]})})}),e.jsx("div",{className:"about-what-we-do bg-white-smoke section-space-y-axis-100",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-title text-center pb-55",children:[e.jsx("span",{className:"about-sub-title text-primary",children:"Core Expertise"}),e.jsx("h2",{className:"about-title mb-0",children:"What We Do"})]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-4 col-sm-6",children:e.jsxs("div",{className:"about-card-modern",children:[e.jsx("div",{className:"icon-box-red",children:e.jsx("i",{className:"fa fa-car"})}),e.jsx("h4",{className:"font-weight-bold text-dark mb-3",children:"Car Batteries"}),e.jsx("p",{className:"text-muted mb-0 small leading-relaxed",children:"High-performance starting power for all passenger cars and commercial vehicles. Premium brands with up to 5 years warranty."})]})}),e.jsx("div",{className:"col-md-4 col-sm-6",children:e.jsxs("div",{className:"about-card-modern",children:[e.jsx("div",{className:"icon-box-red",children:e.jsx("i",{className:"fa fa-lightbulb-o"})}),e.jsx("h4",{className:"font-weight-bold text-dark mb-3",children:"Inverter Batteries"}),e.jsx("p",{className:"text-muted mb-0 small leading-relaxed",children:"Tubular and flat plate backup batteries to ensure uninterrupted power supply for your home and office needs."})]})}),e.jsx("div",{className:"col-md-4 col-sm-6",children:e.jsxs("div",{className:"about-card-modern",children:[e.jsx("div",{className:"icon-box-red",children:e.jsx("i",{className:"fa fa-plug"})}),e.jsx("h4",{className:"font-weight-bold text-dark mb-3",children:"UPS Batteries"}),e.jsx("p",{className:"text-muted mb-0 small leading-relaxed",children:"Maintenance-free VRLA batteries for online/offline computer UPS systems, providing reliable data and system safety."})]})}),e.jsx("div",{className:"col-md-4 col-sm-6",children:e.jsxs("div",{className:"about-card-modern",children:[e.jsx("div",{className:"icon-box-red",children:e.jsx("i",{className:"fa fa-gears"})}),e.jsx("h4",{className:"font-weight-bold text-dark mb-3",children:"Automotive Batteries"}),e.jsx("p",{className:"text-muted mb-0 small leading-relaxed",children:"Heavy-duty batteries built for trucks, buses, tractors, and utility vehicles operating under rough Indian road conditions."})]})}),e.jsx("div",{className:"col-md-4 col-sm-6",children:e.jsxs("div",{className:"about-card-modern",children:[e.jsx("div",{className:"icon-box-red",children:e.jsx("i",{className:"fa fa-shield"})}),e.jsx("h4",{className:"font-weight-bold text-dark mb-3",children:"Premium Batteries"}),e.jsx("p",{className:"text-muted mb-0 small leading-relaxed",children:"Authentic products directly sourced from manufacturers with official brand warranty, original batch stampings, and packaging."})]})}),e.jsx("div",{className:"col-md-4 col-sm-6",children:e.jsxs("div",{className:"about-card-modern",children:[e.jsx("div",{className:"icon-box-red",children:e.jsx("i",{className:"fa fa-truck"})}),e.jsx("h4",{className:"font-weight-bold text-dark mb-3",children:"Doorstep Delivery"}),e.jsx("p",{className:"text-muted mb-0 small leading-relaxed",children:"Super-fast shipping and instant free installation at your house, shop, or office within Noida and selected cities."})]})})]})]})}),e.jsx("div",{className:"about-brands-deal section-space-y-axis-100",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-title text-center pb-55",children:[e.jsx("span",{className:"about-sub-title text-primary",children:"Official Partners"}),e.jsx("h2",{className:"about-title mb-0",children:"Brands We Deal In"})]}),e.jsx("div",{className:"row g-4 justify-content-center",children:h.map((s,i)=>e.jsx("div",{className:"col-lg-3 col-md-4 col-6",children:e.jsxs("div",{className:"brand-deal-card",children:[e.jsx("div",{className:"brand-icon-wrap",children:e.jsx("i",{className:`fa ${s.logoClass}`})}),e.jsx("h5",{className:"font-weight-bold text-charcoal mb-0",children:s.name})]})},i))})]})}),e.jsx("div",{className:"about-why-choose bg-white-smoke section-space-y-axis-100",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-title text-center pb-55",children:[e.jsx("span",{className:"about-sub-title text-primary",children:"Our Values"}),e.jsx("h2",{className:"about-title mb-0",children:"Why Choose Us"})]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-3 col-sm-6",children:e.jsxs("div",{className:"about-card-modern text-center",children:[e.jsx("div",{className:"icon-box-red mx-auto",children:e.jsx("i",{className:"fa fa-calendar-check-o"})}),e.jsx("h5",{className:"font-weight-bold text-dark mb-2",children:"Since 2006"}),e.jsx("p",{className:"text-muted small mb-0",children:"Over 18 years of business excellence in the battery industry."})]})}),e.jsx("div",{className:"col-lg-3 col-sm-6",children:e.jsxs("div",{className:"about-card-modern text-center",children:[e.jsx("div",{className:"icon-box-red mx-auto",children:e.jsx("i",{className:"fa fa-users"})}),e.jsx("h5",{className:"font-weight-bold text-dark mb-2",children:"Trusted by Thousands"}),e.jsx("p",{className:"text-muted small mb-0",children:"Preferred choice of retail & corporate clients across Noida & beyond."})]})}),e.jsx("div",{className:"col-lg-3 col-sm-6",children:e.jsxs("div",{className:"about-card-modern text-center",children:[e.jsx("div",{className:"icon-box-red mx-auto",children:e.jsx("i",{className:"fa fa-check-circle"})}),e.jsx("h5",{className:"font-weight-bold text-dark mb-2",children:"Genuine Products"}),e.jsx("p",{className:"text-muted small mb-0",children:"100% original brand products with original bill details."})]})}),e.jsx("div",{className:"col-lg-3 col-sm-6",children:e.jsxs("div",{className:"about-card-modern text-center",children:[e.jsx("div",{className:"icon-box-red mx-auto",children:e.jsx("i",{className:"fa fa-globe"})}),e.jsx("h5",{className:"font-weight-bold text-dark mb-2",children:"Pan India Delivery"}),e.jsx("p",{className:"text-muted small mb-0",children:"Delivering bulk order and single units to customers nationwide."})]})}),e.jsx("div",{className:"col-lg-3 col-sm-6",children:e.jsxs("div",{className:"about-card-modern text-center",children:[e.jsx("div",{className:"icon-box-red mx-auto",children:e.jsx("i",{className:"fa fa-money"})}),e.jsx("h5",{className:"font-weight-bold text-dark mb-2",children:"Affordable Pricing"}),e.jsx("p",{className:"text-muted small mb-0",children:"Get wholesale rates on retail purchases without hidden margins."})]})}),e.jsx("div",{className:"col-lg-3 col-sm-6",children:e.jsxs("div",{className:"about-card-modern text-center",children:[e.jsx("div",{className:"icon-box-red mx-auto",children:e.jsx("i",{className:"fa fa-phone"})}),e.jsx("h5",{className:"font-weight-bold text-dark mb-2",children:"Fast Support"}),e.jsx("p",{className:"text-muted small mb-0",children:"Helpful customer service agents available for immediate call requests."})]})}),e.jsx("div",{className:"col-lg-3 col-sm-6",children:e.jsxs("div",{className:"about-card-modern text-center",children:[e.jsx("div",{className:"icon-box-red mx-auto",children:e.jsx("i",{className:"fa fa-refresh"})}),e.jsx("h5",{className:"font-weight-bold text-dark mb-2",children:"Easy Returns"}),e.jsx("p",{className:"text-muted small mb-0",children:"Hassle-free replacement policy in case of model mismatches."})]})}),e.jsx("div",{className:"col-lg-3 col-sm-6",children:e.jsxs("div",{className:"about-card-modern text-center",children:[e.jsx("div",{className:"icon-box-red mx-auto",children:e.jsx("i",{className:"fa fa-shield"})}),e.jsx("h5",{className:"font-weight-bold text-dark mb-2",children:"Warranty Support"}),e.jsx("p",{className:"text-muted small mb-0",children:"Up to 5 years manufacturer warranty support on select models."})]})})]})]})}),e.jsx("div",{className:"about-delivery section-space-y-axis-100",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-lg-6 mb-6 mb-lg-0",children:e.jsxs("div",{className:"pe-lg-5",children:[e.jsx("span",{className:"about-sub-title text-primary font-weight-bold text-uppercase d-block mb-2",style:{letterSpacing:"1.5px"},children:"Express Logistics"}),e.jsx("h3",{className:"font-weight-bold mb-4 text-charcoal",style:{fontSize:"2.1rem"},children:"Fastest Delivery"}),e.jsx("p",{className:"text-muted leading-relaxed mb-5",children:"Get your item delivered to your doorstep with easy return options to change them if any problem arises. Our esteemed customers believe us as we provide them with the best quality batteries at affordable rates."}),e.jsxs("div",{className:"timeline-container",children:[e.jsxs("div",{className:"timeline-step",children:[e.jsx("div",{className:"timeline-title",children:"Doorstep Delivery"}),e.jsx("p",{className:"text-muted small mb-0",children:"Direct shipping to your home or office space without transport hassle."})]}),e.jsxs("div",{className:"timeline-step",children:[e.jsx("div",{className:"timeline-title",children:"Fast Shipping"}),e.jsx("p",{className:"text-muted small mb-0",children:"Dispatch within 24 hours of order receipt from Noida warehousing center."})]}),e.jsxs("div",{className:"timeline-step",children:[e.jsx("div",{className:"timeline-title",children:"Easy Returns"}),e.jsx("p",{className:"text-muted small mb-0",children:"Simplified return window for claims and model updates."})]}),e.jsxs("div",{className:"timeline-step",children:[e.jsx("div",{className:"timeline-title",children:"Reliable Service"}),e.jsx("p",{className:"text-muted small mb-0",children:"Our professional delivery partners ensure safe and scratch-free dispatches."})]})]})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"single-img img-hover-effect rounded shadow overflow-hidden",children:e.jsx("img",{className:"img-full",src:t("assets/images/about/banner/1-2-400x500.jpg"),alt:"Fastest Delivery",style:{maxHeight:"420px",objectFit:"cover"}})})})]})})}),e.jsx("div",{className:"about-warranty bg-white-smoke section-space-y-axis-100",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-lg-6 mb-6 mb-lg-0 order-lg-2",children:e.jsxs("div",{className:"ps-lg-5",children:[e.jsx("span",{className:"about-sub-title text-primary font-weight-bold text-uppercase d-block mb-2",style:{letterSpacing:"1.5px"},children:"Risk-Free Purchases"}),e.jsx("h3",{className:"font-weight-bold mb-4 text-charcoal",style:{fontSize:"2.1rem"},children:"Battery with Warranty"}),e.jsx("p",{className:"text-muted leading-relaxed mb-4",children:"Battery Mantra is truly a one-stop solution that caters to all your requirements. Our company is growing fast as our main focus is to give the customers what they ask for."}),e.jsx("p",{className:"text-muted leading-relaxed mb-4",children:"When you buy an item through us, you'll be provided with five years of warranty, specifically available for our dear customers. All items in our online catalog are premium-quality and top-branded."}),e.jsxs("ul",{className:"list-unstyled",children:[e.jsxs("li",{className:"mb-2",children:[e.jsx("i",{className:"fa fa-check text-primary me-2"})," Official Manufacturer Warranty Cards"]}),e.jsxs("li",{className:"mb-2",children:[e.jsx("i",{className:"fa fa-check text-primary me-2"})," On-the-spot Warranty Registrations"]}),e.jsxs("li",{className:"mb-2",children:[e.jsx("i",{className:"fa fa-check text-primary me-2"})," Quality Assurance Inspections"]}),e.jsxs("li",{className:"mb-2",children:[e.jsx("i",{className:"fa fa-check text-primary me-2"})," High Customer Satisfaction Guarantee"]})]})]})}),e.jsx("div",{className:"col-lg-6 order-lg-1",children:e.jsx("div",{className:"single-img img-hover-effect rounded shadow overflow-hidden",children:e.jsx("img",{className:"img-full",src:t("assets/images/about/banner/1-3-400x500.jpg"),alt:"Warranty Support",style:{maxHeight:"420px",objectFit:"cover"}})})})]})})}),e.jsx("div",{className:"about-mission section-space-y-axis-100",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center text-center",children:e.jsxs("div",{className:"col-lg-8",children:[e.jsx("span",{className:"about-sub-title text-primary font-weight-bold text-uppercase d-block mb-2",style:{letterSpacing:"1.5px"},children:"Looking Forward"}),e.jsx("h3",{className:"font-weight-bold mb-4 text-charcoal",style:{fontSize:"2.1rem"},children:"Our Mission"}),e.jsx("p",{className:"text-muted leading-relaxed mb-0",children:"To simplify the battery purchasing process in India through genuine products, fair pricing, and rapid doorstep service. We follow a customer-first philosophy, aiming to make every power storage project completely hassle-free. By matching the growing demand of our clients with state-of-the-art logistics and official warranties, we strive to build long-term relationships with every customer."})]})})})}),e.jsx("div",{className:"about-group-section bg-white-smoke section-space-y-axis-100",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-lg-10",children:e.jsx("div",{className:"group-info-panel text-center text-md-start",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-md-8 mb-4 mb-md-0",children:[e.jsx("span",{className:"text-primary font-weight-bold text-uppercase d-block mb-2",style:{letterSpacing:"1px",fontSize:"0.85rem"},children:"Parent Organization"}),e.jsx("h3",{className:"font-weight-bold text-white mb-3",style:{fontSize:"1.8rem"},children:"Group of Vikas Traders"}),e.jsx("p",{className:"text-light mb-0 leading-relaxed small",children:"Battery Mantra operates under the parent company, Vikas Traders. Established in 2006, Vikas Traders has been a pioneer in industrial power, backup grids, and automotive distribution networks in Uttar Pradesh and nationwide. We ensure that our clients receive direct-from-factory batches at wholesale rates."})]}),e.jsx("div",{className:"col-md-4 text-center",children:e.jsxs("div",{style:{border:"2px double rgba(230, 46, 46, 0.4)",borderRadius:"12px",padding:"20px",display:"inline-block"},children:[e.jsx("h4",{className:"font-weight-bold text-primary mb-1",style:{fontFamily:"Georgia, serif",fontStyle:"italic"},children:"Vikas Traders"}),e.jsx("p",{className:"text-white mb-0 small uppercase",style:{letterSpacing:"1.5px",fontWeight:"bold"},children:"Since 2006"})]})})]})})})})})}),e.jsx("div",{className:"team-member section-space-y-axis-100",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-title text-center pb-55",children:[e.jsx("span",{className:"about-sub-title text-primary",children:"Our Experts"}),e.jsx("h2",{className:"about-title mb-0",children:"Team Members"})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12",children:e.jsx(n,{className:"swiper-container team-member-slider",modules:[c],slidesPerView:3,spaceBetween:30,loop:!0,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3}},children:m.map((s,i)=>e.jsx(o,{className:"swiper-slide",children:e.jsxs("div",{className:"team-member-item img-gradient-effect",children:[e.jsx("div",{className:"team-member-img",children:e.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:e.jsx("img",{className:"img-full",src:t(s.img),alt:s.name})})}),e.jsxs("div",{className:"team-member-content",children:[e.jsx("h2",{className:"title mb-0",children:s.name}),e.jsx("span",{className:"occupation",children:s.role}),e.jsx("div",{className:"social-link with-border pt-2",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:e.jsx("i",{className:"fa fa-pinterest-p"})})}),e.jsx("li",{children:e.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:e.jsx("i",{className:"fa fa-twitter"})})}),e.jsx("li",{children:e.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:e.jsx("i",{className:"fa fa-tumblr"})})}),e.jsx("li",{children:e.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:e.jsx("i",{className:"fa fa-dribbble"})})})]})})]})]})},i))})})})]})}),e.jsx("div",{className:"testimonial-area bg-white-smoke section-space-y-axis-100",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs(n,{className:"swiper-container testimonial-slider",modules:[x,c],slidesPerView:3,spaceBetween:40,loop:!0,pagination:{el:".testimonial-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1,centeredSlides:!1},768:{slidesPerView:2,centeredSlides:!1},1200:{slidesPerView:3,centeredSlides:!0}},children:[d.map((s,i)=>e.jsxs(o,{className:"swiper-slide testimonial-item",children:[e.jsxs("div",{className:"user-info mb-3",children:[e.jsxs("div",{className:"user-shape-wrap",children:[e.jsx("div",{className:"user-shape",children:e.jsx("img",{src:t("assets/images/testimonial/user/shape/1.png"),alt:"Shape"})}),e.jsx("div",{className:"user-img",children:e.jsx("img",{src:t(s.img),alt:"User"})})]}),e.jsxs("div",{className:"user-content",children:[e.jsx("h4",{className:"user-name mb-1",children:s.name}),e.jsx("span",{className:"user-occupation",children:s.role})]})]}),e.jsx("p",{className:"user-comment mb-6",children:s.comment}),e.jsxs("div",{className:"rating-box",children:[e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("i",{className:"fa fa-star"})}),e.jsx("li",{children:e.jsx("i",{className:"fa fa-star"})}),e.jsx("li",{children:e.jsx("i",{className:"fa fa-star"})}),e.jsx("li",{children:e.jsx("i",{className:"fa fa-star"})}),e.jsx("li",{children:e.jsx("i",{className:"fa fa-star"})})]}),e.jsx("span",{className:"title",children:s.rating.toFixed(1)})]})]},i)),e.jsx("div",{className:"testimonial-pagination with-bg pt-10"})]})})})})}),e.jsx("div",{className:"final-cta-section",children:e.jsxs("div",{className:"container",children:[e.jsx("h3",{className:"font-weight-bold text-white mb-3",style:{fontSize:"2.2rem"},children:"Need Help Choosing the Right Battery?"}),e.jsx("p",{className:"text-white mb-5 max-width-600 mx-auto opacity-90 small",children:"Speak directly to our battery specialists for recommendations, pricing quotes, and quick doorstep bookings."}),e.jsxs("div",{className:"d-flex flex-wrap justify-content-center gap-3",children:[e.jsx(r,{to:"/shop",className:"btn btn-premium-outline btn-lg rounded-pill",style:{border:"2px solid white"},children:"Shop Now"}),e.jsx("a",{href:"#callback-area",onClick:l,className:"btn btn-light text-primary btn-lg rounded-pill font-weight-bold px-5",children:"Request Callback"})]})]})})]})};export{g as default};
