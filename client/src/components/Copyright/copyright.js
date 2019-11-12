import React, { Component } from 'react'

export class Copyright extends Component {
    render() {
        return (
            <section id="copyright" className="copyright angle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <ul className="footer-social unstyled">
                                <li>
                                    <button title="Twitter" href="#">
                                    <span className="icon-pentagon wow bounceIn"><i className="fa fa-twitter"></i></span>
                                    </button>
                                    <button title="Facebook" href="#">
                                    <span className="icon-pentagon wow bounceIn"><i className="fa fa-facebook"></i></span>
                                    </button>
                                    <button title="Google+" href="#">
                                    <span className="icon-pentagon wow bounceIn"><i className="fa fa-google-plus"></i></span>
                                    </button>
                                    <button title="linkedin" href="#">
                                    <span className="icon-pentagon wow bounceIn"><i className="fa fa-linkedin"></i></span>
                                    </button>
                                    <button title="Pinterest" href="#">
                                    <span className="icon-pentagon wow bounceIn"><i className="fa fa-pinterest"></i></span>
                                    </button>
                                    <button title="Skype" href="#">
                                    <span className="icon-pentagon wow bounceIn"><i className="fa fa-skype"></i></span>
                                    </button>
                                    <button title="Dribble" href="#">
                                    <span className="icon-pentagon wow bounceIn"><i className="fa fa-dribbble"></i></span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="copyright-info">
                            &copy; Copyright 2019 Themefisher. <span>Designed by <button
                                href="https://themefisher.com">Themefisher.com</button></span>
                            </div>
                        </div>
                        </div>

                        <div id="back-to-top" data-spy="affix" data-offset-top="10" className="back-to-top affix position-fixed">
                        <button className="btn btn-primary" title="Back to Top"><i className="fa fa-angle-double-up"></i></button>
                    </div>
                </div>

            </section>
        )
    }
}

export default Copyright
