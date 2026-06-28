import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { getAssetUrl, brandText } from '../utils/helpers';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const About = () => {
  // Testimonials Data (Preserved from legacy)
  const testimonials = [
    {
      name: 'Elmer Schmidt',
      role: 'Chief Engineer',
      img: 'assets/images/testimonial/user/2.png',
      comment: 'Excellent doorstep installation service. The technician arrived within an hour of scheduling and handled the disposal of my old inverter battery professionally.',
      rating: 5.0,
    },
    {
      name: 'Azul Baldwin',
      role: 'Business Owner',
      img: 'assets/images/testimonial/user/3.png',
      comment: 'Very competitive pricing for bulk UPS batteries. Got official GST invoices and standard manufacturer warranty cards on the spot.',
      rating: 5.0,
    },
    {
      name: 'Dustin Mock',
      role: 'Car Owner',
      img: 'assets/images/testimonial/user/1.png',
      comment: 'Bought an Amaron car battery with 5-year warranty. Registration on the portal was easy, and the customer support was extremely helpful.',
      rating: 5.0,
    },
  ];

  // Team Data (Preserved from legacy)
  const teamMembers = [
    { name: 'Vikas Gupta', role: 'Founder & CEO', img: 'assets/images/about/team/1-1-400x442.jpg' },
    { name: 'Amit Kumar', role: 'Head of Service Operations', img: 'assets/images/about/team/1-2-400x442.jpg' },
    { name: 'Sanjay Sharma', role: 'Corporate Relationship Manager', img: 'assets/images/about/team/1-3-400x442.jpg' },
  ];

  // Brand badges future-ready array
  const brandsList = [
    { name: 'Luminous', logoClass: 'fa-lightbulb-o' },
    { name: 'Exide', logoClass: 'fa-car' },
    { name: 'Amaron', logoClass: 'fa-flash' },
    { name: 'AC Delco', logoClass: 'fa-gears' },
    { name: 'Livguard', logoClass: 'fa-shield' },
    { name: 'Livfast', logoClass: 'fa-rocket' },
    { name: 'SF Sonic', logoClass: 'fa-plug' }
  ];

  const handleScrollToCallback = (e) => {
    e.preventDefault();
    const element = document.getElementById('callback-area');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="main-content">
      {/* CSS Styles Injection */}
      <style>{`
        /* Hero Section */
        .about-hero-section {
          padding: 100px 0;
          background: linear-gradient(rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.94)), url(${getAssetUrl('assets/images/breadcrumb/bg/1-1-1920x400.jpg')});
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
      `}</style>

      {/* Breadcrumb Area */}
      <div
        className="breadcrumb-area breadcrumb-height"
        style={{ backgroundImage: `url(${getAssetUrl('assets/images/breadcrumb/bg/1-1-1920x400.jpg')})` }}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12">
              <div className="breadcrumb-item text-night-rider">
                <h2 className="breadcrumb-heading">About Us</h2>
                <ul>
                  <li>
                    <Link to="/">Home /</Link>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Hero Section */}
      <div className="about-hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="about-hero-title">
                Welcome to <span>Battery Mantra</span>
              </h1>
              <h2 className="about-hero-subtitle">
                Vikas Traders — India's famous battery store where you can get every type of battery at a reasonable price.
              </h2>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/shop" className="btn btn-premium-red">
                  <i className="fa fa-shopping-cart"></i> Shop Now
                </Link>
                <a href="#callback-area" onClick={handleScrollToCallback} className="btn btn-premium-outline">
                  <i className="fa fa-phone"></i> Request CallBack
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Who We Are */}
      <div className="about-who-we-are section-space-top-100 section-space-bottom-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-6 mb-lg-0">
              <div className="pe-lg-5">
                <span className="about-sub-title text-primary font-weight-bold text-uppercase d-block mb-2" style={{ letterSpacing: '1.5px' }}>
                  Trusted Since 2006
                </span>
                <h3 className="font-weight-bold mb-4 text-charcoal" style={{ fontSize: '2.1rem' }}>Who We Are</h3>
                <p className="text-muted leading-relaxed mb-4">
                  Welcome to Battery Mantra (Vikas Traders). Are you searching for a battery that can restart your old inverter or upgrade one? Is your car battery not performing the way you want it? Wait! Don't go anywhere else, as you are in the right place. We are Battery Mantra, India's famous battery store where you can get every type of battery at a reasonable price.
                </p>
                <p className="text-muted leading-relaxed mb-0">
                  Our company has been providing quality services to clients since 2006. We know the rising demand of our clients and understand their requirements. Our motive is to make your projects hassle-free. Battery Mantra has a huge variety of brands available from which one can choose the battery of your choice.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="highlight-item text-center">
                    <div className="highlight-num">2006</div>
                    <div className="highlight-title">Year Established</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="highlight-item text-center">
                    <div className="highlight-num">100%</div>
                    <div className="highlight-title">Trusted Store</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="highlight-item text-center">
                    <div className="highlight-num">15+</div>
                    <div className="highlight-title">Premium Brands</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="highlight-item text-center">
                    <div className="highlight-num">Pan India</div>
                    <div className="highlight-title">Delivery Network</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. What We Do */}
      <div className="about-what-we-do bg-white-smoke section-space-y-axis-100">
        <div className="container">
          <div className="section-title text-center pb-55">
            <span className="about-sub-title text-primary">Core Expertise</span>
            <h2 className="about-title mb-0">What We Do</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4 col-sm-6">
              <div className="about-card-modern">
                <div className="icon-box-red">
                  <i className="fa fa-car"></i>
                </div>
                <h4 className="font-weight-bold text-dark mb-3">Car Batteries</h4>
                <p className="text-muted mb-0 small leading-relaxed">
                  High-performance starting power for all passenger cars and commercial vehicles. Premium brands with up to 5 years warranty.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="about-card-modern">
                <div className="icon-box-red">
                  <i className="fa fa-lightbulb-o"></i>
                </div>
                <h4 className="font-weight-bold text-dark mb-3">Inverter Batteries</h4>
                <p className="text-muted mb-0 small leading-relaxed">
                  Tubular and flat plate backup batteries to ensure uninterrupted power supply for your home and office needs.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="about-card-modern">
                <div className="icon-box-red">
                  <i className="fa fa-plug"></i>
                </div>
                <h4 className="font-weight-bold text-dark mb-3">UPS Batteries</h4>
                <p className="text-muted mb-0 small leading-relaxed">
                  Maintenance-free VRLA batteries for online/offline computer UPS systems, providing reliable data and system safety.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="about-card-modern">
                <div className="icon-box-red">
                  <i className="fa fa-gears"></i>
                </div>
                <h4 className="font-weight-bold text-dark mb-3">Automotive Batteries</h4>
                <p className="text-muted mb-0 small leading-relaxed">
                  Heavy-duty batteries built for trucks, buses, tractors, and utility vehicles operating under rough Indian road conditions.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="about-card-modern">
                <div className="icon-box-red">
                  <i className="fa fa-shield"></i>
                </div>
                <h4 className="font-weight-bold text-dark mb-3">Premium Batteries</h4>
                <p className="text-muted mb-0 small leading-relaxed">
                  Authentic products directly sourced from manufacturers with official brand warranty, original batch stampings, and packaging.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="about-card-modern">
                <div className="icon-box-red">
                  <i className="fa fa-truck"></i>
                </div>
                <h4 className="font-weight-bold text-dark mb-3">Doorstep Delivery</h4>
                <p className="text-muted mb-0 small leading-relaxed">
                  Super-fast shipping and instant free installation at your house, shop, or office within Noida and selected cities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Brands We Deal In */}
      <div className="about-brands-deal section-space-y-axis-100">
        <div className="container">
          <div className="section-title text-center pb-55">
            <span className="about-sub-title text-primary">Official Partners</span>
            <h2 className="about-title mb-0">Brands We Deal In</h2>
          </div>
          <div className="row g-4 justify-content-center">
            {brandsList.map((brand, idx) => (
              <div key={idx} className="col-lg-3 col-md-4 col-6">
                <div className="brand-deal-card">
                  <div className="brand-icon-wrap">
                    <i className={`fa ${brand.logoClass}`}></i>
                  </div>
                  <h5 className="font-weight-bold text-charcoal mb-0">{brand.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Why Choose Battery Mantra */}
      <div className="about-why-choose bg-white-smoke section-space-y-axis-100">
        <div className="container">
          <div className="section-title text-center pb-55">
            <span className="about-sub-title text-primary">Our Values</span>
            <h2 className="about-title mb-0">Why Choose Us</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6">
              <div className="about-card-modern text-center">
                <div className="icon-box-red mx-auto">
                  <i className="fa fa-calendar-check-o"></i>
                </div>
                <h5 className="font-weight-bold text-dark mb-2">Since 2006</h5>
                <p className="text-muted small mb-0">Over 18 years of business excellence in the battery industry.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="about-card-modern text-center">
                <div className="icon-box-red mx-auto">
                  <i className="fa fa-users"></i>
                </div>
                <h5 className="font-weight-bold text-dark mb-2">Trusted by Thousands</h5>
                <p className="text-muted small mb-0">Preferred choice of retail & corporate clients across Noida & beyond.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="about-card-modern text-center">
                <div className="icon-box-red mx-auto">
                  <i className="fa fa-check-circle"></i>
                </div>
                <h5 className="font-weight-bold text-dark mb-2">Genuine Products</h5>
                <p className="text-muted small mb-0">100% original brand products with original bill details.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="about-card-modern text-center">
                <div className="icon-box-red mx-auto">
                  <i className="fa fa-globe"></i>
                </div>
                <h5 className="font-weight-bold text-dark mb-2">Pan India Delivery</h5>
                <p className="text-muted small mb-0">Delivering bulk order and single units to customers nationwide.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="about-card-modern text-center">
                <div className="icon-box-red mx-auto">
                  <i className="fa fa-money"></i>
                </div>
                <h5 className="font-weight-bold text-dark mb-2">Affordable Pricing</h5>
                <p className="text-muted small mb-0">Get wholesale rates on retail purchases without hidden margins.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="about-card-modern text-center">
                <div className="icon-box-red mx-auto">
                  <i className="fa fa-phone"></i>
                </div>
                <h5 className="font-weight-bold text-dark mb-2">Fast Support</h5>
                <p className="text-muted small mb-0">Helpful customer service agents available for immediate call requests.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="about-card-modern text-center">
                <div className="icon-box-red mx-auto">
                  <i className="fa fa-refresh"></i>
                </div>
                <h5 className="font-weight-bold text-dark mb-2">Easy Returns</h5>
                <p className="text-muted small mb-0">Hassle-free replacement policy in case of model mismatches.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="about-card-modern text-center">
                <div className="icon-box-red mx-auto">
                  <i className="fa fa-shield"></i>
                </div>
                <h5 className="font-weight-bold text-dark mb-2">Warranty Support</h5>
                <p className="text-muted small mb-0">Up to 5 years manufacturer warranty support on select models.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Fastest Delivery */}
      <div className="about-delivery section-space-y-axis-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-6 mb-lg-0">
              <div className="pe-lg-5">
                <span className="about-sub-title text-primary font-weight-bold text-uppercase d-block mb-2" style={{ letterSpacing: '1.5px' }}>
                  Express Logistics
                </span>
                <h3 className="font-weight-bold mb-4 text-charcoal" style={{ fontSize: '2.1rem' }}>Fastest Delivery</h3>
                <p className="text-muted leading-relaxed mb-5">
                  Get your item delivered to your doorstep with easy return options to change them if any problem arises. Our esteemed customers believe us as we provide them with the best quality batteries at affordable rates.
                </p>
                <div className="timeline-container">
                  <div className="timeline-step">
                    <div className="timeline-title">Doorstep Delivery</div>
                    <p className="text-muted small mb-0">Direct shipping to your home or office space without transport hassle.</p>
                  </div>
                  <div className="timeline-step">
                    <div className="timeline-title">Fast Shipping</div>
                    <p className="text-muted small mb-0">Dispatch within 24 hours of order receipt from Noida warehousing center.</p>
                  </div>
                  <div className="timeline-step">
                    <div className="timeline-title">Easy Returns</div>
                    <p className="text-muted small mb-0">Simplified return window for claims and model updates.</p>
                  </div>
                  <div className="timeline-step">
                    <div className="timeline-title">Reliable Service</div>
                    <p className="text-muted small mb-0">Our professional delivery partners ensure safe and scratch-free dispatches.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-img img-hover-effect rounded shadow overflow-hidden">
                <img className="img-full" src={getAssetUrl('assets/images/about/banner/1-2-400x500.jpg')} alt="Fastest Delivery" style={{ maxHeight: '420px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Warranty */}
      <div className="about-warranty bg-white-smoke section-space-y-axis-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-6 mb-lg-0 order-lg-2">
              <div className="ps-lg-5">
                <span className="about-sub-title text-primary font-weight-bold text-uppercase d-block mb-2" style={{ letterSpacing: '1.5px' }}>
                  Risk-Free Purchases
                </span>
                <h3 className="font-weight-bold mb-4 text-charcoal" style={{ fontSize: '2.1rem' }}>Battery with Warranty</h3>
                <p className="text-muted leading-relaxed mb-4">
                  Battery Mantra is truly a one-stop solution that caters to all your requirements. Our company is growing fast as our main focus is to give the customers what they ask for.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  When you buy an item through us, you'll be provided with five years of warranty, specifically available for our dear customers. All items in our online catalog are premium-quality and top-branded.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="fa fa-check text-primary me-2"></i> Official Manufacturer Warranty Cards</li>
                  <li className="mb-2"><i className="fa fa-check text-primary me-2"></i> On-the-spot Warranty Registrations</li>
                  <li className="mb-2"><i className="fa fa-check text-primary me-2"></i> Quality Assurance Inspections</li>
                  <li className="mb-2"><i className="fa fa-check text-primary me-2"></i> High Customer Satisfaction Guarantee</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="single-img img-hover-effect rounded shadow overflow-hidden">
                <img className="img-full" src={getAssetUrl('assets/images/about/banner/1-3-400x500.jpg')} alt="Warranty Support" style={{ maxHeight: '420px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. Our Mission */}
      <div className="about-mission section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <span className="about-sub-title text-primary font-weight-bold text-uppercase d-block mb-2" style={{ letterSpacing: '1.5px' }}>
                Looking Forward
              </span>
              <h3 className="font-weight-bold mb-4 text-charcoal" style={{ fontSize: '2.1rem' }}>Our Mission</h3>
              <p className="text-muted leading-relaxed mb-0">
                To simplify the battery purchasing process in India through genuine products, fair pricing, and rapid doorstep service. We follow a customer-first philosophy, aiming to make every power storage project completely hassle-free. By matching the growing demand of our clients with state-of-the-art logistics and official warranties, we strive to build long-term relationships with every customer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 9. Group Of Vikas Traders */}
      <div className="about-group-section bg-white-smoke section-space-y-axis-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="group-info-panel text-center text-md-start">
                <div className="row align-items-center">
                  <div className="col-md-8 mb-4 mb-md-0">
                    <span className="text-primary font-weight-bold text-uppercase d-block mb-2" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>Parent Organization</span>
                    <h3 className="font-weight-bold text-white mb-3" style={{ fontSize: '1.8rem' }}>Group of Vikas Traders</h3>
                    <p className="text-light mb-0 leading-relaxed small">
                      Battery Mantra operates under the parent company, Vikas Traders. Established in 2006, Vikas Traders has been a pioneer in industrial power, backup grids, and automotive distribution networks in Uttar Pradesh and nationwide. We ensure that our clients receive direct-from-factory batches at wholesale rates.
                    </p>
                  </div>
                  <div className="col-md-4 text-center">
                    <div style={{ border: '2px double rgba(230, 46, 46, 0.4)', borderRadius: '12px', padding: '20px', display: 'inline-block' }}>
                      <h4 className="font-weight-bold text-primary mb-1" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>Vikas Traders</h4>
                      <p className="text-white mb-0 small uppercase" style={{ letterSpacing: '1.5px', fontWeight: 'bold' }}>Since 2006</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Member Section (Preserved React UI) */}
      <div className="team-member section-space-y-axis-100">
        <div className="container">
          <div className="section-title text-center pb-55">
            <span className="about-sub-title text-primary">Our Experts</span>
            <h2 className="about-title mb-0">Team Members</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                className="swiper-container team-member-slider"
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                }}
              >
                {teamMembers.map((member, idx) => (
                  <SwiperSlide key={idx} className="swiper-slide">
                    <div className="team-member-item img-gradient-effect">
                      <div className="team-member-img">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <img className="img-full" src={getAssetUrl(member.img)} alt={member.name} />
                        </a>
                      </div>
                      <div className="team-member-content">
                        <h2 className="title mb-0">{member.name}</h2>
                        <span className="occupation">{member.role}</span>
                        <div className="social-link with-border pt-2">
                          <ul>
                            <li>
                              <a href="#" onClick={(e) => e.preventDefault()}><i className="fa fa-pinterest-p"></i></a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => e.preventDefault()}><i className="fa fa-twitter"></i></a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => e.preventDefault()}><i className="fa fa-tumblr"></i></a>
                            </li>
                            <li>
                              <a href="#" onClick={(e) => e.preventDefault()}><i className="fa fa-dribbble"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Area (Preserved React UI) */}
      <div className="testimonial-area bg-white-smoke section-space-y-axis-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                className="swiper-container testimonial-slider"
                modules={[Pagination, Navigation]}
                slidesPerView={3}
                spaceBetween={40}
                loop={true}
                pagination={{ el: '.testimonial-pagination', clickable: true }}
                breakpoints={{
                  320: { slidesPerView: 1, centeredSlides: false },
                  768: { slidesPerView: 2, centeredSlides: false },
                  1200: { slidesPerView: 3, centeredSlides: true },
                }}
              >
                {testimonials.map((test, idx) => (
                  <SwiperSlide key={idx} className="swiper-slide testimonial-item">
                    <div className="user-info mb-3">
                      <div className="user-shape-wrap">
                        <div className="user-shape">
                          <img src={getAssetUrl('assets/images/testimonial/user/shape/1.png')} alt="Shape" />
                        </div>
                        <div className="user-img">
                          <img src={getAssetUrl(test.img)} alt="User" />
                        </div>
                      </div>
                      <div className="user-content">
                        <h4 className="user-name mb-1">{test.name}</h4>
                        <span className="user-occupation">{test.role}</span>
                      </div>
                    </div>
                    <p className="user-comment mb-6">{test.comment}</p>
                    <div className="rating-box">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                      <span className="title">{test.rating.toFixed(1)}</span>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="testimonial-pagination with-bg pt-10"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* 10. Final CTA */}
      <div className="final-cta-section">
        <div className="container">
          <h3 className="font-weight-bold text-white mb-3" style={{ fontSize: '2.2rem' }}>
            Need Help Choosing the Right Battery?
          </h3>
          <p className="text-white mb-5 max-width-600 mx-auto opacity-90 small">
            Speak directly to our battery specialists for recommendations, pricing quotes, and quick doorstep bookings.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/shop" className="btn btn-premium-outline btn-lg rounded-pill" style={{ border: '2px solid white' }}>
              Shop Now
            </Link>
            <a href="#callback-area" onClick={handleScrollToCallback} className="btn btn-light text-primary btn-lg rounded-pill font-weight-bold px-5">
              Request Callback
            </a>
          </div>
        </div>
      </div>

    </main>
  );
};

export default About;
