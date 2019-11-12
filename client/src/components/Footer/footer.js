import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 footer-widget">
                            <h3 className="widget-title">Recent Posts</h3>
                            <div className="latest-post-items media">
                                <div className="latest-post-content media-body">
                                    <h4><button href="#">Bulgaria claims to find Europe's 'oldest town'</button></h4>
                                    <p className="post-meta">
                                    <span className="author">Posted by John Doe</span>
                                    <span className="post-meta-cat">in<button href="#"> Blog</button></span>
                                    </p>
                                </div>
                            </div>

                            <div className="latest-post-items media">
                                <div className="latest-post-content media-body">
                                    <h4><button href="#">Few Answers in Case of Murdered Law Professor</button></h4>
                                    <p className="post-meta">
                                    <span className="date"><i className="icon icon-calendar"></i> Mar 15, 2015</span>
                                    <span className="post-meta-comments"><i className="icon icon-bubbles4"></i> <button href="#">03</button></span>
                                    </p>
                                </div>
                            </div>

                            <div className="latest-post-items media">
                                <div className="latest-post-content media-body">
                                    <h4><button href="#">Over the year we have lots of experience in our field</button></h4>
                                    <p className="post-meta">
                                    <span className="date"><i className="icon icon-calendar"></i> Apr 17, 2015</span>
                                    <span className="post-meta-comments"><i className="icon icon-bubbles4"></i> <button href="#">14</button></span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12 footer-widget">
                            <h3 className="widget-title">Flickr Photos</h3>

                            <div className="img-gallery">
                                <div className="img-container">
                                    <button className="thumb-holder" data-rel="prettyPhoto" href="./images/gallery/1.jpg">
                                    <img src="./images/gallery/1.jpg" alt="" />
                                    </button>
                                    <button className="thumb-holder" data-rel="prettyPhoto" href="./images/gallery/2.jpg">
                                    <img src="./images/gallery/2.jpg" alt="" />
                                    </button>
                                    <button className="thumb-holder" data-rel="prettyPhoto" href="./images/gallery/3.jpg">
                                    <img src="./images/gallery/3.jpg" alt="" />
                                    </button>
                                    <button className="thumb-holder" data-rel="prettyPhoto" href="./images/gallery/4.jpg">
                                    <img src="./images/gallery/4.jpg" alt="" />
                                    </button>
                                    <button className="thumb-holder" data-rel="prettyPhoto" href="./images/gallery/5.jpg">
                                    <img src="./images/gallery/5.jpg" alt="" />
                                    </button>
                                    <button className="thumb-holder" data-rel="prettyPhoto" href="./images/gallery/6.jpg">
                                    <img src="./images/gallery/6.jpg" alt="" />
                                    </button>
                                    <button className="thumb-holder" data-rel="prettyPhoto" href="./images/gallery/6.jpg">
                                    <img src="./images/gallery/7.jpg" alt="" />
                                    </button>
                                    <button className="thumb-holder" data-rel="prettyPhoto" href="./images/gallery/6.jpg">
                                    <img src="./images/gallery/8.jpg" alt="" />
                                    </button>
                                    <button className="thumb-holder" data-rel="prettyPhoto" href="./images/gallery/6.jpg">
                                    <img src="./images/gallery/9.jpg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12 footer-widget footer-about-us">
                            <h3 className="widget-title">About Craft</h3>
                            <p>We are a awward winning multinational company. We believe in quality and standard worldwide.</p>
                            <h4>Address</h4>
                            <p>1102 Saint Marys, Junction City, KS</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Email:</h4>
                                    <p>info@craftbd.com</p>
                                </div>
                                <div className="col-md-6">
                                    <h4>Phone No.</h4>
                                    <p>+(785) 238-4131</p>
                                </div>
                            </div>
                            <form action="#">
                                <div className="input-group subscribe">
                                    <input type="email" className="form-control" placeholder="Email Address" required="" />
                                    <span className="input-group-addon">
                                    <button className="btn" type="submit"><i className="fa fa-envelope-o"> </i></button>
                                    </span>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
