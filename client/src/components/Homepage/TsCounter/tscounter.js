import React, { Component } from 'react'

export class Tscounter extends Component {
    render() {
        return (
            <section className="ts_counter p-0">

                <div className="container-fluid">
                    <div className="row facts-wrapper wow fadeInLeft text-center">
                        <div className="facts one col-md-3 col-sm-6">
                            <span className="facts-icon"><i className="fa fa-user"></i></span>
                            <div className="facts-num">
                                <span className="counter">1200</span>
                            </div>
                            <h3>Clients</h3>
                        </div>

                        <div className="facts two col-md-3 col-sm-6">
                            <span className="facts-icon"><i className="fa fa-institution"></i></span>
                            <div className="facts-num">
                                <span className="counter">1277</span>
                            </div>
                            <h3>Items Sold</h3>
                        </div>

                        <div className="facts three col-md-3 col-sm-6">
                            <span className="facts-icon"><i className="fa fa-suitcase"></i></span>
                            <div className="facts-num">
                                <span className="counter">869</span>
                            </div>
                            <h3>Projects</h3>
                        </div>

                        <div className="facts four col-md-3 col-sm-6">
                            <span className="facts-icon"><i className="fa fa-trophy"></i></span>
                            <div className="facts-num">
                                <span className="counter">76</span>
                            </div>
                            <h3>Awards</h3>
                        </div>

                    </div>
                </div>

            </section>
        )
    }
}

export default Tscounter
