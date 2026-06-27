import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';

const FAQItem = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <li className={`has-sub ${isOpen ? 'active' : ''}`}>
      <a href="#" onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}>
        {question}
        <i className={`pe-7s-angle-down`} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}></i>
      </a>
      <ul className="frequently-body" style={{ display: isOpen ? 'block' : 'none' }}>
        <li>{answer}</li>
      </ul>
    </li>
  );
};

const FAQ = () => {
  const answerText = "Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat fringilla, at rutrum sem lacinia.";

  return (
    <main className="main-content">
      {/* Breadcrumb Area */}
      <div
        className="breadcrumb-area breadcrumb-height"
        style={{ backgroundImage: `url(${getAssetUrl('assets/images/breadcrumb/bg/1-1-1920x400.jpg')})` }}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12">
              <div className="breadcrumb-item text-night-rider">
                <h2 className="breadcrumb-heading">FAQ Page</h2>
                <ul>
                  <li>
                    <Link to="/">Home /</Link>
                  </li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Area */}
      <div className="faq-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            {/* General Questions */}
            <div className="col-lg-12">
              <div className="frequently-area">
                <h2 className="heading mb-0">General Question</h2>
                <div className="row text-matterhorn">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="frequently-item">
                          <ul>
                            <FAQItem question="Before you get started" answer={answerText} defaultOpen={true} />
                            <FAQItem question="Compatibility with premium plugins" answer={answerText} />
                            <FAQItem question="Install theme demo contents" answer={answerText} />
                            <FAQItem question="Translation and localization services" answer={answerText} />
                            <FAQItem question="Live chat support" answer={answerText} />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pt-6 pt-md-0">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="frequently-item">
                          <ul>
                            <FAQItem question="Before you get started" answer={answerText} defaultOpen={true} />
                            <FAQItem question="Compatibility with premium plugins" answer={answerText} />
                            <FAQItem question="Install theme demo contents" answer={answerText} />
                            <FAQItem question="Translation and localization services" answer={answerText} />
                            <FAQItem question="Live chat support" answer={answerText} />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment & Gift Card */}
            <div className="col-lg-12">
              <div className="frequently-area section-space-top-95">
                <h2 className="heading mb-0">Payment & Gift card</h2>
                <div className="row text-matterhorn">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="frequently-item">
                          <ul>
                            <FAQItem question="Changing the timezone" answer={answerText} defaultOpen={true} />
                            <FAQItem question="Developer documentation" answer={answerText} />
                            <FAQItem question="Connection social media channels" answer={answerText} />
                            <FAQItem question="Optimize theme speed & performance" answer={answerText} />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pt-6 pt-md-0">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="frequently-item">
                          <ul>
                            <FAQItem question="Fully responsive" answer={answerText} defaultOpen={true} />
                            <FAQItem question="Translation and localization services" answer={answerText} />
                            <FAQItem question="Live chat support" answer={answerText} />
                            <FAQItem question="RTL Support now" answer={answerText} />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
