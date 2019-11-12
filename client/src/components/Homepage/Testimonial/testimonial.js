import React, { Component } from 'react'

export class Testimonial extends Component {
    render() {
        return (
            <section className="testimonial parallax parallax2">
                <div className="parallax-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div id="testimonial-carousel" className="owl-carousel owl-theme text-center testimonial-slide">
                            <div className="item">
                                <div className="testimonial-thumb">
                                    <img src="./images/team/testimonial1.jpg" alt="testimonial" />
                                </div>
                                <div className="testimonial-content">
                                    <p className="testimonial-text">
                                        Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still
                                        in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                                        purpose. Lorem Ipsum is that it as opposed to using.
                                    </p>
                                    <h3 className="name">Sarah Arevik<span>Chief Executive</span></h3>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-thumb">
                                    <img src="./images/team/testimonial2.jpg" alt="testimonial" />
                                </div>
                                <div className="testimonial-content">
                                    <p className="testimonial-text">
                                        Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still
                                        in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                                        purpose. Lorem Ipsum is that it as opposed to using.
                                    </p>
                                    <h3 className="name">Narek Bedros<span>Sr. Manager</span></h3>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-thumb">
                                    <img src="./images/team/testimonial3.jpg" alt="testimonial" />
                                </div>
                                <div className="testimonial-content">
                                    <p className="testimonial-text">
                                        Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still
                                        in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
                                        purpose. Lorem Ipsum is that it as opposed to using.
                                    </p>
                                    <h3 className="name">Taline Lucine<span>Sales Manager</span></h3>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        )
    }
}

export default Testimonial
