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
  // Testimonials Data
  const testimonials = [
    {
      name: 'Elmer Schmidt',
      role: 'Chief Engineer',
      img: 'assets/images/testimonial/user/2.png',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Utenim ad minim veniam,',
      rating: 4.0,
    },
    {
      name: 'Azul Baldwin',
      role: 'Chief Engineer',
      img: 'assets/images/testimonial/user/3.png',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Utenim ad minim veniam,',
      rating: 4.0,
    },
    {
      name: 'Dustin Mock',
      role: 'Chief Engineer',
      img: 'assets/images/testimonial/user/1.png',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Utenim ad minim veniam,',
      rating: 4.0,
    },
  ];

  // Team Data
  const teamMembers = [
    { name: 'Jaren Hammer', role: 'Salesman & Engineer', img: 'assets/images/about/team/1-1-400x442.jpg' },
    { name: 'Jaren Hammer', role: 'Salesman & Engineer', img: 'assets/images/about/team/1-2-400x442.jpg' },
    { name: 'Jaren Hammer', role: 'Salesman & Engineer', img: 'assets/images/about/team/1-3-400x442.jpg' },
  ];

  // Brands Data
  const brands = [
    'assets/images/brand/1-1.png',
    'assets/images/brand/1-2.png',
    'assets/images/brand/1-3.png',
    'assets/images/brand/1-4.png',
    'assets/images/brand/1-5.png',
    'assets/images/brand/1-6.png',
  ];

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

      {/* History Section */}
      <div className="about-banner different-bg-position section-space-y-axis-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-banner-content text-center section-space-bottom-95">
                <div className="section-title">
                  <span className="about-sub-title text-primary">Our History</span>
                  <h2 className="about-title mb-5">{brandText('Tromic Car Parts Shop')}</h2>
                  <p className="short-desc mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisd nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consec adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                </div>
              </div>
              <div className="about-banner-img row">
                <div className="col-lg-4">
                  <div className="single-img img-hover-effect">
                    <img className="img-full" src={getAssetUrl('assets/images/about/banner/1-1-400x500.jpg')} alt="About Banner" />
                  </div>
                </div>
                <div className="col-lg-4 section-space-top-100">
                  <div className="single-img img-hover-effect">
                    <img className="img-full" src={getAssetUrl('assets/images/about/banner/1-2-400x500.jpg')} alt="About Banner" />
                  </div>
                </div>
                <div className="col-lg-4 section-space-top-100 pt-lg-0">
                  <div className="single-img img-hover-effect">
                    <img className="img-full" src={getAssetUrl('assets/images/about/banner/1-3-400x500.jpg')} alt="About Banner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Area */}
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
                        <h4 class="user-name mb-1">{test.name}</h4>
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
                        <li><i className="fa fa-star-o"></i></li>
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

      {/* Team Member Section */}
      <div className="team-member section-space-y-axis-100">
        <div className="container">
          <div className="section-title text-center pb-55">
            <span className="about-sub-title text-primary">Our expert</span>
            <h2 className="about-title mb-0">Team Member</h2>
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
                        <a href="#">
                          <img className="img-full" src={getAssetUrl(member.img)} alt={member.name} />
                        </a>
                      </div>
                      <div className="team-member-content">
                        <h2 className="title mb-0">{member.name}</h2>
                        <span className="occupation">{member.role}</span>
                        <div className="social-link with-border pt-2">
                          <ul>
                            <li>
                              <a href="#"><i className="fa fa-pinterest-p"></i></a>
                            </li>
                            <li>
                              <a href="#"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li>
                              <a href="#"><i className="fa fa-tumblr"></i></a>
                            </li>
                            <li>
                              <a href="#"><i className="fa fa-dribbble"></i></a>
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

      {/* Promo Banner Area */}
      <div
        className="banner-area banner-style-2 section-border-y-axis section-space-y-axis-100"
        style={{ backgroundImage: `url(${getAssetUrl('assets/images/background-img/1-3-1920x208.png')})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-content text-center">
                <span className="sub-title mb-2">30% Limited Time Offer</span>
                <h2 className="title mb-5">{brandText('car Parts for short people')}</h2>
                <div className="button-wrap">
                  <Link className="btn btn-custom-size lg-size btn-primary" to="/shop">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logo Slider */}
      <div className="brand-area section-space-y-axis-100 white-smoke-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                className="swiper-container brand-slider"
                modules={[Autoplay]}
                slidesPerView={6}
                spaceBetween={120}
                loop={true}
                speed={750}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                  320: { slidesPerView: 2, spaceBetween: 30 },
                  480: { slidesPerView: 3, spaceBetween: 30 },
                  768: { slidesPerView: 4 },
                  992: { slidesPerView: 5 },
                  1200: { slidesPerView: 6 },
                }}
              >
                {brands.map((brand, idx) => (
                  <SwiperSlide key={idx} className="swiper-slide">
                    <a className="brand-item" href="#">
                      <img src={getAssetUrl(brand)} alt="Brand" />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
