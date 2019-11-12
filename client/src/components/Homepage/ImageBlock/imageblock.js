import React, { Component } from 'react'

export class Imageblock extends Component {
    render() {
        return (
            <section id="image-block" className="image-block p-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 ts-padding" id='special-ts'>
                        </div>
                        <div className="col-md-6 ts-padding img-block-right">
                            <div className="img-block-head text-center">
                                <h2>Know More About Our Company</h2>
                                <h3>Why Choose Us</h3>
                                <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                                    Proin gravida nibh vel velit auctor Aenean sollicitudin, adipisicing elit sed lorem quis bibendum auctor.
                                </p>
                            </div>

                            <div className="gap-30"></div>

                            <div className="image-block-content">
                                <span className="feature-icon float-left"><i className="fa fa-bicycle"></i></span>
                                <div className="feature-content">
                                    <h3>Tons of Features</h3>
                                    <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut</p>
                                </div>
                            </div>

                            <div className="image-block-content">
                                <span className="feature-icon float-left"><i className="fa fa-diamond"></i></span>
                                <div className="feature-content">
                                    <h3>PowerPack Theme</h3>
                                    <p>Proin gravida nibh vel velit auctor Aenean sollicitudin adipisicing</p>
                                </div>
                            </div>

                            <div className="image-block-content">
                                <span className="feature-icon float-left"><i className="fa fa-street-view"></i></span>
                                <div className="feature-content">
                                    <h3>Day Night Support</h3>
                                    <p>Simply dummy text and typesettings industry has been the industry</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Imageblock
