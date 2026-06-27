import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';

const Blog = ({ layout = 'default' }) => {
  const isListView = layout === 'listview';

  const blogPosts = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consec',
      date: 'July 21, 2022',
      author: 'By: Admin',
      commentCount: '05 Comments',
      image: 'assets/images/blog/medium-size/1-1-370x270.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
      id: 2,
      title: 'Duis aute irure dolor in reprehenderit',
      date: 'July 21, 2022',
      author: 'By: Admin',
      commentCount: '05 Comments',
      image: 'assets/images/blog/medium-size/1-2-370x270.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
      id: 3,
      title: 'Excepteur sint occaecat cupidatat non',
      date: 'July 21, 2022',
      author: 'By: Admin',
      commentCount: '05 Comments',
      image: 'assets/images/blog/medium-size/1-3-370x270.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    }
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
                <h2 className="breadcrumb-heading">Blog Page</h2>
                <ul>
                  <li>
                    <Link to="/">Home /</Link>
                  </li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Area */}
      <div className="blog-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            {isListView ? (
              // List View
              <div className="col-lg-12">
                <div className="blog-list-view row">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="col-12 mb-6">
                      <div className="blog-item d-md-flex align-items-center gap-4">
                        <div className="blog-img" style={{ minWidth: '300px' }}>
                          <Link to="/blog-detail">
                            <img className="img-full" src={getAssetUrl(post.image)} alt={post.title} />
                          </Link>
                        </div>
                        <div className="blog-content pt-4 pt-md-0">
                          <div className="blog-meta text-silver pb-2">
                            <ul>
                              <li className="date">
                                <i className="fa fa-calendar-o"></i>
                                {post.date}
                              </li>
                              <li>
                                <i className="fa fa-user-o"></i>
                                {post.author}
                              </li>
                              <li>
                                <i className="fa fa-comments-o"></i>
                                {post.commentCount}
                              </li>
                            </ul>
                          </div>
                          <h4 className="title mb-3">
                            <Link to="/blog-detail">{post.title}</Link>
                          </h4>
                          <p className="short-desc mb-4">{post.desc}</p>
                          <Link className="btn btn-custom-size btn-primary" to="/blog-detail">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Grid View
              blogPosts.map((post) => (
                <div key={post.id} className="col-lg-4 col-md-6 mb-6">
                  <div className="blog-item">
                    <div className="blog-img">
                      <Link to="/blog-detail">
                        <img className="img-full" src={getAssetUrl(post.image)} alt={post.title} />
                      </Link>
                    </div>
                    <div className="blog-content pt-6">
                      <div className="blog-meta text-silver pb-2">
                        <ul>
                          <li className="date">
                            <i className="fa fa-calendar-o"></i>
                            {post.date}
                          </li>
                          <li>
                            <i className="fa fa-comments-o"></i>
                            {post.commentCount}
                          </li>
                        </ul>
                      </div>
                      <h4 className="title mb-3">
                        <Link to="/blog-detail">{post.title}</Link>
                      </h4>
                      <p className="short-desc mb-4">{post.desc}</p>
                      <Link className="btn btn-custom-size btn-primary" to="/blog-detail">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
