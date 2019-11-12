import React, { Component } from 'react'

export class Parallax extends Component {
    render() {
        return (
            <section className="parallax parallax1">
                <div className="parallax-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Are You Ready to Buy This Template!</h2>
                            <h3>Just Click Button and Use Your Own</h3>
                            <p>
                                <button className="btn btn-primary white">Purchase Now</button>
                                <button className="btn btn-primary solid">Get In Touch</button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Parallax
