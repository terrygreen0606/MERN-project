import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <section id="home" className="p-0">
                <div id="main-slide" className="cd-hero">
                    <ul className="cd-hero-slider">
                        <li className="selected">
                            <div className="overlay2">
                                <img className="" src="./images/slider/bg1.jpg" alt="slider" />
                            </div>
                            <div className="cd-full-width">
                                <h2>Need To Invent The Future!</h2>
                                <h3>We are Making Difference To Great Things Possible</h3>
                                <button className="btn btn-primary white cd-btn">Start Now</button>
                                <button className="btn btn-primary solid cd-btn">Learn More</button>
                            </div>
                        </li>
                        <li>
                            <div className="overlay2">
                                <img className="" src="./images/slider/bg2.jpg" alt="slider" />
                            </div>
                            <div className="cd-half-width">
                                <h2>How Big Can You Dream?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consequatur cumque natus!</p>
                                <button className="cd-btn btn btn-primary solid">Take a Tour</button>
                            </div>

                            <div className="cd-half-width cd-img-container">
                                <img src="./images/slider/bg-thumb1.png" alt="" />
                            </div>
                        </li>
                        <li>
                            <div className="overlay2">
                                <img className="" src="images/slider/bg3.jpg" alt="slider" />
                            </div>
                            <div className="cd-half-width cd-img-container img-right">
                                <img src="images/slider/bg-thumb2.png" alt="" />
                            </div>
                            <div className="cd-half-width">
                                <h2>Your Challenge is Our Progress</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consequatur cumque natus!</p>
                                <button className="cd-btn btn btn-primary white">Start</button>
                                <button className="cd-btn btn secondary btn-primary solid">Learn More</button>
                            </div>
                        </li>
                        <li className="cd-bg-video">
                            <div className="cd-full-width">
                                <h2>WE ARE HERE TO MAKE IT HAPPEN</h2>
                                <h3>We Making Difference To Great Things Possible</h3>

                                <button className="cd-btn btn btn-primary solid">Learn more</button>
                            </div>

                            <div className="cd-bg-video-wrapper" data-video="videos/video">
                                {/* <!-- video element will be loaded using jQuery --> */}
                            </div>
                        </li>
                    </ul>
                    
                    <div className="cd-slider-nav">
                        <nav>
                            <span className="cd-marker item-1"></span>
                            <ul>
                                <li className="selected"><button><i className="fa fa-bicycle"></i> Invent</button></li>
                                <li><button><i className="fa fa-hotel"></i> Dream</button></li>
                                <li><button><i className="fa fa-android"></i> Tech</button></li>
                                <li className="video"><button><i className="fa fa-video-camera"></i> Video</button></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </section>
        )
    }
}

export default Home
