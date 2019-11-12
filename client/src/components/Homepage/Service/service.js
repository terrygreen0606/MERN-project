import React, { Component } from 'react'

export class Service extends Component {
    render() {
        return (
            <section id="service" className="service angle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 heading">
                            <span className="title-icon float-left"><i className="fa fa-cogs"></i></span>
                            <h2 className="title">Service We Provide <span className="title-desc">A Quality Experience Team with 4 years
                                    experience</span></h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay=".5s">
                            <div className="service-content text-center">
                                <span className="service-icon icon-pentagon"><i className="fa fa-tachometer"></i></span>
                                <h3>Web Design</h3>
                                <p>High Life narwhal, banh mi PBR single-origin coffee Odd Future actually aliqua polaroid befor</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay=".8s">
                            <div className="service-content text-center">
                                <span className="service-icon icon-pentagon"><i className="fa fa-android"></i></span>
                                <h3>Apps Development</h3>
                                <p>Food truck master cleanse mixtape minim Portland, cardigan stumptown chambray swag</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay="1.1s">
                            <div className="service-content text-center">
                                <span className="service-icon icon-pentagon"><i className="fa fa-shopping-cart"></i></span>
                                <h3>eCommerce Websites</h3>
                                <p>Neutra Thundercats craft beer, listicle meggings bicycle rights 90's XOXO beard cardiga</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay="1.4s">
                            <div className="service-content text-center">
                                <span className="service-icon icon-pentagon"><i className="fa fa-lightbulb-o"></i></span>
                                <h3>Design for Startups</h3>
                                <p>We design beautiful modern engaging websites that always latest responsive technologies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Service
