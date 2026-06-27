import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { getAssetUrl, brandText } from '../utils/helpers';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Home = () => {
  // Hero Slider Data
  const sliderData = [
    {
      bgImage: 'assets/images/slider/bg/1-1.jpg',
      title: 'Car Accessories & Parts',
      subtitle: 'Best Quality Products For Your Vehicles',
      offer: 'Special Discount 30% Off',
    },
    {
      bgImage: 'assets/images/slider/bg/1-2.jpg',
      title: 'Premium Car Products',
      subtitle: 'Find The Perfect Gear For Every Ride',
      offer: 'Limited Time Deals',
    },
  ];

  // Top Category Data
  const categories = [
    { name: 'Tail Light', img: 'assets/images/product/top-category/1-1-180x180.png' },
    { name: 'Wiper Blades', img: 'assets/images/product/top-category/1-2-180x180.png' },
    { name: 'Suspension', img: 'assets/images/product/top-category/1-3-180x180.png' },
    { name: 'Air Filter', img: 'assets/images/product/top-category/1-4-180x180.png' },
    { name: 'Car Brakes', img: 'assets/images/product/top-category/1-5-180x180.png' },
    { name: 'Pistons Liners', img: 'assets/images/product/top-category/1-6-180x180.png' },
  ];

  // Banners Data
  const banners = [
    { img: 'assets/images/banner/1-1-400x250.jpg', offer: 'From $96', title: 'Car Wheels' },
    { img: 'assets/images/banner/1-2-400x250.jpg', offer: 'From $80', title: 'Brake Discs' },
    { img: 'assets/images/banner/1-3-400x250.jpg', offer: 'From $120', title: 'Car Light' },
  ];

  // Special Deals Data
  const specialDeals = [
    { id: 1, name: 'Fuel Injector', price: '$130.00', img: 'assets/images/product/medium-size/special-deals/2-1-290x350.jpg' },
    { id: 2, name: 'A/C Compressor', price: '$150.00', img: 'assets/images/product/medium-size/special-deals/2-2-290x350.jpg' },
    { id: 3, name: 'Shock Absorbers', price: '$120.00', img: 'assets/images/product/medium-size/special-deals/2-3-290x350.jpg' },
  ];

  // New Products Data
  const newProducts = [
    { id: 1, name: 'Fuel Injector', price: '$130.00', img: 'assets/images/product/medium-size/new-product/1-2-290x350.jpg' },
    { id: 2, name: 'A/C Compressor', price: '$150.00', img: 'assets/images/product/medium-size/new-product/1-3-290x350.jpg' },
    { id: 3, name: 'Shock Absorbers', price: '$180.00', img: 'assets/images/product/medium-size/new-product/1-4-290x350.jpg' },
    { id: 4, name: 'Catalytic Converter', price: '$200.00', img: 'assets/images/product/medium-size/new-product/1-5-290x350.jpg' },
    { id: 5, name: 'Tire Pressure Gauge', price: '$220.00', img: 'assets/images/product/medium-size/new-product/1-6-290x350.jpg' },
    { id: 6, name: 'Power Steering Fluid', price: '$230.00', img: 'assets/images/product/medium-size/new-product/1-7-290x350.jpg' },
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

  // Blog Data
  const blogs = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit ametco',
      date: '27 FEB 2022',
      author: 'ADMIN',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore et dolore magna ali Ut enim ad minim veniam quis nostrud',
      img: 'assets/images/blog/medium-size/1-1-400x250.jpg',
    },
    {
      id: 2,
      title: 'Vivamus blandit gravida',
      date: '27 FEB 2022',
      author: 'ADMIN',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore et dolore magna ali Ut enim ad minim veniam quis nostrud',
      img: 'assets/images/blog/medium-size/1-2-400x250.jpg',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit ametco',
      date: '27 FEB 2022',
      author: 'ADMIN',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore et dolore magna ali Ut enim ad minim veniam quis nostrud',
      img: 'assets/images/blog/medium-size/1-3-400x250.jpg',
    },
  ];

  return (
    <main className="main-content">
      {/* Begin Slider Area */}
      <div className="slider-area">
        <Swiper
          className="swiper-container main-slider swiper-arrow with-bg_white"
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          loop={true}
          slidesPerView={1}
          speed={750}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            slideShadows: false,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          navigation={{
            nextEl: '.custom-button-next',
            prevEl: '.custom-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
          }}
        >
          {sliderData.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide animation-style-01">
              <div
                className="slide-inner bg-height py-6 py-lg-0"
                style={{ backgroundImage: `url(${getAssetUrl(slide.bgImage)})` }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 align-self-center">
                      <div className="slide-content text-night-rider">
                        <span className="offer mb-3">{slide.offer}</span>
                        <h2 className="title mb-4" dangerouslySetInnerHTML={{ __html: brandText(slide.title) }}></h2>
                        <p className="short-desc mb-10">{slide.subtitle}</p>
                        <div className="button-wrap pb-2 pb-md-0">
                          <Link className="btn btn-custom-size lg-size btn-primary" to="/shop">
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Add Pagination */}
          <div className="swiper-pagination with-bg d-md-none"></div>

          {/* Custom Arrows */}
          <div className="custom-arrow-wrap d-none d-md-block">
            <div className="custom-button-prev"></div>
            <div className="custom-button-next"></div>
          </div>
        </Swiper>
      </div>
      {/* Slider Area End Here */}

      {/* Begin Product Area (Top Category) */}
      <div className="product-area section-space-top-100">
        <div class="container">
          <div className="section-title pb-55">
            <h2 className="title mb-0">Top Category</h2>
          </div>
          <div className="row">
            {categories.map((cat, idx) => (
              <div key={idx} className="product-custom-col col-12 pt-4 pt-sm-0">
                <div className="product-category-item">
                  <Link className="product-category-img img-zoom-effect" to="/shop">
                    <img src={getAssetUrl(cat.img)} alt={cat.name} />
                  </Link>
                  <div className="product-category-content pt-5">
                    <h2 className="title">
                      <Link to="/shop">{cat.name}</Link>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Product Area End Here */}

      {/* Begin Banner Area */}
      <div className="banner-area section-space-top-90">
        <div className="container">
          <div className="row">
            {banners.map((b, idx) => (
              <div key={idx} className="col-lg-4 pt-6 pt-lg-0">
                <div className="banner-item img-hover-effect">
                  <div className="banner-img img-zoom-effect">
                    <img className="img-full" src={getAssetUrl(b.img)} alt="Banner Image" />
                    <div className="inner-content text-white">
                      <h3 className="offer">{b.offer}</h3>
                      <h2 className="title">{b.title}</h2>
                      <div className="button-wrap">
                        <Link className="btn btn-custom-size btn-primary" to="/shop">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Banner Area End Here */}

      {/* Begin Special Deals Area */}
      <div className="product-area section-space-top-100">
        <div className="container">
          <div className="section-title pb-55">
            <h2 className="title mb-0">SPECIAL DEALS</h2>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="product-banner img-hover-effect">
                <div className="product-banner-img img-zoom-effect">
                  <Link to="/shop">
                    <img
                      className="img-full"
                      src={getAssetUrl('assets/images/product/medium-size/special-deals/banner/2-1-290x350.jpg')}
                      alt="Product Banner"
                    />
                  </Link>
                  <div className="product-banner-content text-white">
                    <h2 className="offer mb-4">
                      Have a Special <br /> Discount
                    </h2>
                    <div className="button-wrap">
                      <Link className="btn btn-custom-size btn-white btn-hover-primary" to="/shop">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                  {/* Add Arrows */}
                  <div className="special-deals-button-wrap pt-10">
                    <div className="special-deals-button-prev">
                      <i className="pe-7s-angle-left"></i>
                    </div>
                    <div className="special-deals-button-next">
                      <i className="pe-7s-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 pt-6 pt-lg-0">
              <Swiper
                className="swiper-container special-deals-slider"
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                navigation={{
                  nextEl: '.special-deals-button-next',
                  prevEl: '.special-deals-button-prev',
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1501: { slidesPerView: 3 },
                }}
              >
                {specialDeals.map((product) => (
                  <SwiperSlide key={product.id} className="swiper-slide product-item special-deals-item">
                    <div className="product-img img-zoom-effect">
                      <Link to="/shop">
                        <img className="img-full" src={getAssetUrl(product.img)} alt={product.name} />
                      </Link>
                    </div>
                    <div className="product-content">
                      <Link className="product-name pb-1" to="/shop">
                        {product.name}
                      </Link>
                      <div className="price-box">
                        <div className="price-box-holder">
                          <span>Price:</span>
                          <span className="new-price text-primary">{product.price}</span>
                        </div>
                      </div>
                      <div className="product-add-action">
                        <ul>
                          <li>
                            <Link to="/cart">
                              <i className="pe-7s-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <a href="#">
                              <i className="pe-7s-look"></i>
                            </a>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="pe-7s-like"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/compare">
                              <i className="pe-7s-shuffle"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* Special Deals Area End Here */}

      {/* Begin Shipping Area */}
      <div className="shipping-area section-space-top-100">
        <div className="container">
          <div className="shipping-bg" style={{ backgroundImage: `url(${getAssetUrl('assets/images/shipping/bg/1-1-1280x202.jpg')})` }}>
            <div className="row shipping-wrap py-5 py-xl-0">
              <div className="col-lg-4">
                <div className="shipping-item">
                  <div className="shipping-img">
                    <img src={getAssetUrl('assets/images/shipping/icon/plane.png')} alt="Shipping Icon" />
                  </div>
                  <div className="shipping-content">
                    <h2 className="title">Free Shipping</h2>
                    <p className="short-desc mb-0">Provide free home delivery for all product over $100</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 pt-4 pt-lg-0">
                <div className="shipping-item">
                  <div className="shipping-img">
                    <img src={getAssetUrl('assets/images/shipping/icon/earphones.png')} alt="Shipping Icon" />
                  </div>
                  <div className="shipping-content">
                    <h2 className="title">Online Support</h2>
                    <p className="short-desc mb-0">To satisfy our customer we try to give support online</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 pt-4 pt-lg-0">
                <div className="shipping-item">
                  <div className="shipping-img">
                    <img src={getAssetUrl('assets/images/shipping/icon/shield.png')} alt="Shipping Icon" />
                  </div>
                  <div className="shipping-content">
                    <h2 className="title">Secure Payment</h2>
                    <p className="short-desc mb-0">We ensure our product Good quality all times</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shipping Area End Here */}

      {/* Begin Product Area (New Products slider) */}
      <div className="product-area section-space-y-axis-100">
        <div className="container">
          <div className="section-title pb-55">
            <h2 className="title mb-0">New Products</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                className="swiper-container product-slider"
                modules={[Navigation]}
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                navigation={{
                  nextEl: '.product-button-next',
                  prevEl: '.product-button-prev',
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  576: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                  1501: { slidesPerView: 4 },
                }}
              >
                {newProducts.map((product) => (
                  <SwiperSlide key={product.id} className="swiper-slide product-item">
                    <div className="product-img img-zoom-effect">
                      <Link to="/shop">
                        <img className="img-full" src={getAssetUrl(product.img)} alt={product.name} />
                      </Link>
                    </div>
                    <div className="product-content">
                      <Link className="product-name pb-1" to="/shop">
                        {product.name}
                      </Link>
                      <div className="price-box">
                        <div className="price-box-holder">
                          <span>Price:</span>
                          <span className="new-price text-primary">{product.price}</span>
                        </div>
                      </div>
                      <div className="product-add-action">
                        <ul>
                          <li>
                            <Link to="/cart">
                              <i className="pe-7s-cart"></i>
                            </Link>
                          </li>
                          <li>
                            <a href="#">
                              <i className="pe-7s-look"></i>
                            </a>
                          </li>
                          <li>
                            <Link to="/wishlist">
                              <i className="pe-7s-like"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/compare">
                              <i className="pe-7s-shuffle"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Product Slider Navigation */}
              <div className="product-button-wrap pt-10 d-flex justify-content-center gap-2">
                <div className="product-button-prev btn btn-dark"><i className="pe-7s-angle-left"></i></div>
                <div className="product-button-next btn btn-dark"><i className="pe-7s-angle-right"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Area End Here */}

      {/* Begin Brand Area */}
      <div className="brand-area section-space-bottom-100">
        <div className="container">
          <div className="brand-nav">
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
                        <img src={getAssetUrl(brand)} alt="Brand Image" />
                      </a>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brand Area End Here */}

      {/* Begin Blog Area */}
      <div className="blog-area section-space-bottom-100">
        <div className="container">
          <div className="section-title pb-55">
            <h2 className="title mb-0">Latest Blog</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                className="swiper-container blog-slider"
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                }}
              >
                {blogs.map((blog) => (
                  <SwiperSlide key={blog.id} className="swiper-slide">
                    <div className="blog-item">
                      <div className="blog-img img-hover-effect">
                        <Link className="img-zoom-effect" to="/blog-detail">
                          <img className="img-full" src={getAssetUrl(blog.img)} alt="Blog Image" />
                        </Link>
                      </div>
                      <div className="blog-content pt-6">
                        <div className="blog-meta text-paynes-grey pb-1">
                          <ul>
                            <li className="author">
                              <a href="#">
                                <i className="pe-7s-user"></i>
                                BY: {blog.author}
                              </a>
                            </li>
                            <li className="date">
                              <i className="pe-7s-date"></i>
                              {blog.date}
                            </li>
                          </ul>
                        </div>
                        <h2 className="mb-3">
                          <Link className="title" to="/blog-detail">
                            {blog.title}
                          </Link>
                        </h2>
                        <p className="short-desc mb-7">{blog.desc}</p>
                        <div className="button-wrap">
                          <Link className="btn btn-custom-size btn-matterhorn" to="/blog-detail">
                            Read More
                          </Link>
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
      {/* Blog Area End Here */}
    </main>
  );
};

export default Home;
