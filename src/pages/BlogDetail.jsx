import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/helpers';

const BlogDetail = () => {
  const post = {
    title: 'Lorem ipsum dolor sit amet consec',
    date: 'July 21, 2022',
    author: 'By: Admin',
    commentCount: '03 Comments',
    image: 'assets/images/blog/large-size/1-1-1170x610.jpg',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
  };

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
                <h2 className="breadcrumb-heading">Blog Detail</h2>
                <ul>
                  <li>
                    <Link to="/">Home /</Link>
                  </li>
                  <li>Blog Detail</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Detail Area */}
      <div className="blog-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-detail-item">
                <div className="blog-img mb-8">
                  <img className="img-full" src={getAssetUrl(post.image)} alt={post.title} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta text-silver pb-3">
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
                  <h3 className="title mb-4">{post.title}</h3>
                  <p className="short-desc mb-8" style={{ whiteSpace: 'pre-line' }}>{post.content}</p>

                  {/* Comment Section */}
                  <div className="blog-comment pt-10">
                    <h4 className="heading mb-7">3 Comments</h4>
                    <div className="blog-comment-item mb-8 d-flex gap-4">
                      <div className="blog-comment-img" style={{ width: '80px', height: '80px' }}>
                        <img src={getAssetUrl('assets/images/blog/avatar/3-1-101x101.png')} className="rounded-circle img-full" alt="User Image" />
                      </div>
                      <div className="blog-comment-content">
                        <div className="user-meta pb-1">
                          <span><strong>Aidyn Cody -</strong> Jul 21,2022 at 15 hours ago</span>
                        </div>
                        <p className="user-comment mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci labore et dol magna aliqua. Ut enim ad minim veniam quis nostrud</p>
                      </div>
                    </div>
                  </div>

                  {/* Comment Form */}
                  <div className="feedback-area pt-10">
                    <h2 className="heading mb-3">Leave a Reply</h2>
                    <p className="short-desc mb-3">Your email address will not be published.</p>
                    <form className="feedback-form pt-8" action="#">
                      <div className="group-input">
                        <div className="form-field me-md-6 mb-6 mb-md-0">
                          <input type="text" name="name" placeholder="Your Name*" className="input-field" />
                        </div>
                        <div className="form-field me-md-6 mb-6 mb-md-0">
                          <input type="text" name="email" placeholder="Your Email*" className="input-field" />
                        </div>
                        <div className="form-field">
                          <input type="text" name="number" placeholder="Phone number" className="input-field" />
                        </div>
                      </div>
                      <div className="form-field mt-6">
                        <textarea name="message" placeholder="Message" className="textarea-field"></textarea>
                      </div>
                      <div className="button-wrap mt-8">
                        <button type="submit" value="submit" className="btn btn-custom-size lg-size btn-primary" name="submit">Submit</button>
                      </div>
                    </form>
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

export default BlogDetail;
