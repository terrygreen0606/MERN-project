import React, { Component } from 'react'

export class Pricing extends Component {
    render() {
        return (
            <section id="pricing" className="pricing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 heading">
                            <span className="title-icon float-left"><i className="fa fa-university"></i></span>
                            <h2 className="title">Pricing Table <span className="title-desc">We Love to Work with Passion</span></h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="plan text-center">
                                <span className="plan-name">Basic <small>Monthly plan</small></span>
                                <p className="plan-price"><sup className="currency">$</sup><strong>49</strong><sub>.99</sub></p>
                                <ul className="list-unstyled">
                                    <li>100GB Monthly Bandwidth</li>
                                    <li>$100 Google AdWords</li>
                                    <li>100 Domain Hosting</li>
                                    <li>SSL Shopping Cart</li>
                                    <li>24/7 Live Support</li>
                                </ul>
                                <button className="btn btn-primary" href="#.">Sign Up</button>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="1s">
                            <div className="plan text-center">
                                <span className="plan-name">Standared <small>Monthly plan</small></span>
                                <p className="plan-price"><sup className="currency">$</sup><strong>99</strong><sub>.99</sub></p>
                                <ul className="list-unstyled">
                                    <li>100GB Monthly Bandwidth</li>
                                    <li>$100 Google AdWords</li>
                                    <li>100 Domain Hosting</li>
                                    <li>SSL Shopping Cart</li>
                                    <li>24/7 Live Support</li>
                                </ul>
                                <button className="btn btn-primary" href="#.">Sign Up</button>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="1.4s">
                            <div className="plan text-center featured">
                                <span className="plan-name">Professional <small>Monthly plan</small></span>
                                <p className="plan-price"><sup className="currency">$</sup><strong>149</strong><sub>.99</sub></p>
                                <ul className="list-unstyled">
                                    <li>100GB Monthly Bandwidth</li>
                                    <li>$100 Google AdWords</li>
                                    <li>100 Domain Hosting</li>
                                    <li>SSL Shopping Cart</li>
                                    <li>24/7 Live Support</li>
                                </ul>
                                <button className="btn btn-primary" href="#.">Sign Up</button>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="1.6s">
                            <div className="plan text-center">
                                <span className="plan-name">Premium <small>Monthly plan</small></span>
                                <p className="plan-price"><sup className="currency">$</sup><strong>399</strong><sub>.99</sub></p>
                                <ul className="list-unstyled">
                                    <li>100GB Monthly Bandwidth</li>
                                    <li>$100 Google AdWords</li>
                                    <li>100 Domain Hosting</li>
                                    <li>SSL Shopping Cart</li>
                                    <li>24/7 Live Support</li>
                                </ul>
                                <button className="btn btn-primary" href="#.">Sign Up</button>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        )
    }
}

export default Pricing
