import React from 'react'

function Blogs() {

    return (
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">

                <div className="post">

                    <div className="post-image-wrapper">
                        <img src="./images/blog/blog1.jpg" className="img-fluid" alt="" />
                        <span className="blog-date"><button href="#"> May 03, 2015</button></span>
                    </div>
                    <div className="post-header clearfix">
                        <h2 className="post-title">
                            <button href="blog-item.html">Over the year we have lots of experience</button>
                        </h2>
                        <div className="post-meta">
                            <span className="post-meta-author">Posted by <button href="#"> Admin</button></span>
                            <span className="post-meta-cats">in <button href="#"> News</button></span>
                            <div className="float-right">

                                <span className="post-meta-comments"><button href="#"><i className="fa fa-comment-o"></i> 11</button></span>
                                <span className="post-meta-hits"><button href="#"><i className="fa fa-heart-o"></i> 62</button></span>
                            </div>

                        </div>
                    </div>
                    <div className="post-body">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which don’t look even slightly believable. If you
                            are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in
                            the middle dolor sit amet.</p>
                    </div>
                    <div className="post-footer">
                        <button href="blog-item.html" className="btn btn-primary">Continue Reading <i
                                className="fa fa-angle-double-right">&nbsp;</i></button>
                    </div>
                </div>

                <div className="post">

                    <div className="post-image-wrapper">
                        <div className="video-embed">

                            <iframe src="//player.vimeo.com/video/72266001?title=0&amp;byline=0&amp;portrait=0&amp;color=8aba56"
                                width="500" height="281" allowFullScreen></iframe>
                        </div>
                        <span className="blog-date"><button href="#"> May 19, 2015</button></span>
                    </div>
                    <div className="post-header clearfix">
                        <h2 className="post-title">
                            <button href="blog-item.html">Dolorem animi nisi autem blanditiis</button>
                        </h2>
                        <div className="post-meta">
                            <span className="post-meta-author">Posted by <button href="#"> Admin</button></span>
                            <span className="post-meta-cats">in <button href="#"> News</button></span>
                            <div className="float-right">

                                <span className="post-meta-comments"><button href="#"><i className="fa fa-comment-o"></i> 11</button></span>
                                <span className="post-meta-hits"><button href="#"><i className="fa fa-heart-o"></i> 62</button></span>
                            </div>

                        </div>
                    </div>
                    <div className="post-body">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which don’t look even slightly believable. If you
                            are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in
                            the middle dolor sit amet.</p>
                    </div>
                    <div className="post-footer">
                        <button href="blog-item.html" className="btn btn-primary">Continue Reading <i
                                className="fa fa-angle-double-right">&nbsp;</i></button>
                    </div>
                </div>

                <div className="post">

                    <div className="post-image-wrapper">
                        <img src="./images/blog/blog2.jpg" className="img-fluid" alt="" />
                        <span className="blog-date"><button href="#"> May 23, 2015</button></span>
                    </div>
                    <div className="post-header clearfix">
                        <h2 className="post-title">
                            <button href="blog-item.html">Many web sites still in their infancy</button>
                        </h2>
                        <div className="post-meta">
                            <span className="post-meta-author">Posted by <button href="#"> Admin</button></span>
                            <span className="post-meta-cats">in <button href="#"> News</button></span>
                            <div className="float-right">

                                <span className="post-meta-comments"><button href="#"><i className="fa fa-comment-o"></i> 11</button></span>
                                <span className="post-meta-hits"><button href="#"><i className="fa fa-heart-o"></i> 62</button></span>
                            </div>

                        </div>
                    </div>
                    <div className="post-body">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which don’t look even slightly believable. If you
                            are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in
                            the middle dolor sit amet.</p>
                    </div>
                    <div className="post-footer">
                        <button href="blog-item.html" className="btn btn-primary">Continue Reading <i
                                className="fa fa-angle-double-right">&nbsp;</i></button>
                    </div>
                </div>

                <nav>
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link" href="#" aria-label="Previous">
                                <i className="fa fa-angle-left"></i>
                            </button>
                        </li>
                        <li className="page-item active"><button className="page-link" href="#">1</button></li>
                        <li className="page-item"><button className="page-link" href="#">2</button></li>
                        <li className="page-item"><button className="page-link" href="#">3</button></li>
                        <li className="page-item"><button className="page-link" href="#">4</button></li>
                        <li className="page-item"><button className="page-link" href="#">5</button></li>
                        <li className="page-item">
                            <button className="page-link" href="#" aria-label="Next">
                                <i className="fa fa-angle-right"></i>
                            </button>
                        </li>
                    </ul>
                </nav>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">

                <div className="sidebar sidebar-right">

                    <div className="widget widget-search">
                        <h3 className="widget-title">Search</h3>
                        <div id="search">
                            <input className="form-control form-control-lg" placeholder="search" type="search" />
                        </div>
                    </div>

                    <div className="widget widget-tab">
                        <ul className="nav nav-tabs">
                            <li className="nav-item"><button className="nav-link active" href="#popular-tab" data-toggle="tab">popular</button></li>
                            <li className="nav-item"><button className="nav-link" href="#recent-tab" data-toggle="tab">recent</button></li>
                            <li className="nav-item"><button className="nav-link" href="#comments-tab" data-toggle="tab">comments</button></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="popular-tab">
                                <ul className="posts-list list-unstyled clearfix">
                                    <li>
                                        <div className="posts-thumb float-left">
                                            <button href="#">
                                                <img alt="img" src="./images/blog/blog1.jpg" />
                                            </button>
                                        </div>
                                        <div className="post-content">
                                            <h4 className="entry-title"><button href="#">Bulgaria claims to find Europe's 'oldest town'</button>
                                            </h4>
                                            <p className="post-meta">
                                                <span className="post-meta-author">Posted by <button href="#"> Admin</button></span>
                                                <span className="post-meta-date"><button href="#"> <i className="fa fa-clock-o"></i> November 14</button>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </li>
                                    <li>
                                        <div className="posts-thumb float-left">
                                            <button href="#">
                                                <img alt="img" src="./images/blog/blog2.jpg" />
                                            </button>
                                        </div>
                                        <div className="post-content">
                                            <h4 className="entry-title">
                                                <button href="#">Lorem ipsum dolor sit amet, consectetur claims</button>
                                            </h4>
                                            <p className="post-meta">
                                                <span className="post-meta-author">Posted by <button href="#"> Admin</button></span>
                                                <span className="post-meta-date"><button href="#"> <i className="fa fa-clock-o"></i> October 19</button>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </li>
                                    <li>
                                        <div className="posts-thumb float-left">
                                            <button href="#">
                                                <img alt="img" src="./images/blog/blog3.jpg" />
                                            </button>
                                        </div>
                                        <div className="post-content">
                                            <h4 className="entry-title">
                                                <button href="#">Should You Ever Skip Giving A Tip?</button>
                                            </h4>
                                            <p className="post-meta">
                                                <span className="post-meta-author">Posted by <button href="#"> Admin</button></span>
                                                <span className="post-meta-date"><button href="#"> <i className="fa fa-clock-o"></i> November 21</button>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-pane fade" id="recent-tab">
                                <ul className="posts-list list-unstyled clearfix">
                                    <li>
                                        <div className="posts-thumb float-left">
                                            <button href="#">
                                                <img alt="img" src="./images/blog/blog3.jpg" />
                                            </button>
                                        </div>
                                        <div className="post-content">
                                            <h4 className="entry-title"><button href="#">Bulgaria claims to find Europe's 'oldest town'</button>
                                            </h4>
                                            <p className="post-meta">
                                                <span className="post-meta-author">Posted by <button href="#"> Admin</button></span>
                                                <span className="post-meta-date"><button href="#"> <i className="fa fa-clock-o"></i> November 21</button>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </li>
                                    <li>
                                        <div className="posts-thumb float-left">
                                            <button href="#">
                                                <img alt="img" src="./images/blog/blog1.jpg" />
                                            </button>
                                        </div>
                                        <div className="post-content">
                                            <h4 className="entry-title"><button href="#">Bulgaria claims to find Europe's 'oldest town'</button>
                                            </h4>
                                            <p className="post-meta">
                                                <span className="post-meta-author">Posted by <button href="#"> Admin</button></span>
                                                <span className="post-meta-date"><button href="#"> <i className="fa fa-clock-o"></i> October 19</button>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-pane fade" id="comments-tab">
                                <ul className="posts-list list-unstyled clearfix">
                                    <li>
                                        <div className="posts-avator float-left">
                                            <button href="#">
                                                <img alt="img" src="./images/blog/avator1.png" />
                                            </button>
                                        </div>
                                        <div className="post-content">
                                            <h4 className="entry-title"><button href="#">If you are going to use a passage of Lorem Ipsum</button>
                                            </h4>
                                            <p className="post-meta">
                                                <span className="post-meta-author">Posted by <button href="#"> John</button></span>
                                                <span className="post-meta-date"><button href="#"> <i className="fa fa-clock-o"></i> November 21</button>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </li>
                                    <li>
                                        <div className="posts-avator float-left">
                                            <button href="#">
                                                <img alt="img" src="./images/blog/avator2.jpg" />
                                            </button>
                                        </div>
                                        <div className="post-content">
                                            <h4 className="entry-title"><button href="#">you need to be sure there isn’t anything embarra</button>
                                            </h4>
                                            <p className="post-meta">
                                                <span className="post-meta-author">Posted by <button href="#"> Tina</button></span>
                                                <span className="post-meta-date"><button href="#"> <i className="fa fa-clock-o"></i> October 18</button>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="widget widget-categories">
                        <h3 className="widget-title">Blog Categories</h3>
                        <ul className="category-list clearfix">
                            <li><button href="#">Objects</button><span className="posts-count"> (19)</span></li>
                            <li><button href="#">Technology</button><span className="posts-count"> (09)</span></li>
                            <li><button href="#">Photography</button><span className="posts-count"> (13)</span></li>
                            <li><button href="#">Fashion</button><span className="posts-count"> (10)</span></li>
                            <li><button href="#">Realtough</button><span className="posts-count"> (14)</span></li>
                            <li><button href="#">Architecture</button><span className="posts-count"> (11)</span></li>
                        </ul>
                    </div>

                    <div className="widget widget-tags">
                        <h3 className="widget-title">Popular Tags</h3>
                        <ul className="list-unstyled clearfix">
                            <li><button href="#">iMac</button></li>
                            <li><button href="#">Black and Green</button></li>
                            <li><button href="#">Crative</button></li>
                            <li><button href="#">Momentum</button></li>
                            <li><button href="#">Business</button></li>
                            <li><button href="#">Cellular</button></li>
                            <li><button href="#">Niche</button></li>
                        </ul>
                    </div>

                    <div className="widget">
                        <h3 className="widget-title">Text Widgets</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normalopposed.</p>
                    </div>

                </div>
            </div>
            <div className="gap-40"></div>
        </div>
    )
}

export default Blogs
