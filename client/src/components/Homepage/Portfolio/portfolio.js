import React, { Component } from 'react'

export class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio" className="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 heading">
                            <span className="title-icon classic float-left"><i className="fa fa-suitcase"></i></span>
                            <h2 className="title classic">Our Awesome Work</h2>
                        </div>
                    </div> 

                    <div className="row text-right">
                        <div className="col-12">
                            <div className="isotope-nav" data-isotope-nav="isotope">
                                <ul>
                                    <li><button className="active" data-filter="*">All</button></li>
                                    <li><button data-filter=".web-design">Web Design</button></li>
                                    <li><button data-filter=".development">Development</button></li>
                                    <li><button data-filter=".joomla">Joomla</button></li>
                                    <li><button data-filter=".wordpress">Wordpress</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row isotope" id="isotope">
                        <div className="col-sm-3 web-design isotope-item">
                            <div className="grid">
                                <figure className="m-0 effect-oscar">
                                    <img src="./images/portfolio/portfolio1.jpg" alt="" />
                                    <figcaption>
                                        <h3>Startup Business</h3>
                                        <button className="link icon-pentagon" href="portfolio-item.html"><i className="fa fa-link"></i></button>
                                        <button className="view icon-pentagon" data-rel="prettyPhoto" href="./images/portfolio/portfolio-bg1.jpg"><i
                                                className="fa fa-search"></i></button>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-3 development isotope-item">
                            <div className="grid">
                                <figure className="m-0 effect-oscar">
                                    <img src="images/portfolio/portfolio2.jpg" alt="" />
                                    <figcaption>
                                        <h3>Easy to Lanunch</h3>
                                        <button className="link icon-pentagon" href="portfolio-item.html"><i className="fa fa-link"></i></button>
                                        <button className="view icon-pentagon" data-rel="prettyPhoto" href="./images/portfolio/portfolio-bg2.jpg"><i
                                                className="fa fa-search"></i></button>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-3 joomla isotope-item">
                            <div className="grid">
                                <figure className="m-0 effect-oscar">
                                    <img src="images/portfolio/portfolio3.jpg" alt="" />
                                    <figcaption>
                                        <h3>Your Business</h3>
                                        <button className="link icon-pentagon" href="portfolio-item.html"><i className="fa fa-link"></i></button>
                                        <button className="view icon-pentagon" data-rel="prettyPhoto" href="./images/portfolio/portfolio-bg3.jpg"><i
                                                className="fa fa-search"></i></button>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-3 wordpress isotope-item">
                            <div className="grid">
                                <figure className="m-0 effect-oscar">
                                    <img src="images/portfolio/portfolio4.jpg" alt="" />
                                    <figcaption>
                                        <h3>Prego Match</h3>
                                        <button className="link icon-pentagon" href="portfolio-item.html"><i className="fa fa-link"></i></button>
                                        <button className="view icon-pentagon" data-rel="prettyPhoto" href="./images/portfolio/portfolio-bg4.jpg"><i
                                                className="fa fa-search"></i></button>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-3 joomla isotope-item">
                            <div className="grid">
                                <figure className="m-0 effect-oscar">
                                    <img src="./images/portfolio/portfolio5.jpg" alt="" />
                                    <figcaption>
                                        <h3>Fashion Brand</h3>
                                        <button className="link icon-pentagon" href="portfolio-item.html"><i className="fa fa-link"></i></button>
                                        <button className="view icon-pentagon" data-rel="prettyPhoto" href="./images/portfolio/portfolio-bg5.jpg"><i
                                                className="fa fa-search"></i></button>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-3 development isotope-item">
                            <div className="grid">
                                <figure className="m-0 effect-oscar">
                                    <img src="./images/portfolio/portfolio6.jpg" alt="" />
                                    <figcaption>
                                        <h3>The Insidage</h3>
                                        <button className="link icon-pentagon" href="portfolio-item.html"><i className="fa fa-link"></i></button>
                                        <button className="view icon-pentagon" data-rel="prettyPhoto" href="./images/portfolio/portfolio-bg1.jpg"><i
                                                className="fa fa-search"></i></button>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-3 development isotope-item">
                            <div className="grid">
                                <figure className="m-0 effect-oscar">
                                    <img src="./images/portfolio/portfolio7.jpg" alt="" />
                                    <figcaption>
                                        <h3>Light Carpet</h3>
                                        <button className="link icon-pentagon" href="portfolio-item.html"><i className="fa fa-link"></i></button>
                                        <button className="view icon-pentagon" data-rel="prettyPhoto" href="./images/portfolio/portfolio-bg2.jpg"><i
                                                className="fa fa-search"></i></button>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-sm-3 development isotope-item">
                            <div className="grid">
                                <figure className="m-0 effect-oscar">
                                    <img src="./images/portfolio/portfolio8.jpg" alt="" />
                                    <figcaption>
                                        <h3>Amazing Keyboard</h3>
                                        <button className="link icon-pentagon" href="portfolio-item.html"><i className="fa fa-link"></i></button>
                                        <button className="view icon-pentagon" data-rel="prettyPhoto" href="./images/portfolio/portfolio-bg3.jpg"><i
                                                className="fa fa-search"></i></button>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio
