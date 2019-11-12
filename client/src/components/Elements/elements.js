import React, { Component } from 'react'

export class Elements extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <h3 className="title-border">Accordion</h3>

                    <div className="accordion" id="accordion">
                        <div className="card border rounded mb-2">
                            <div className="card-header p-0">
                                <button className="h4 mb-0 font-weight-bold text-uppercase d-block p-2 pl-5" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Collapsible Group Item #
                                    1</button>
                            </div>
                            <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                <div className="card-body">
                                    <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                                        elit. Proin gravida nibh vel velit auctor</p>
                                </div>
                            </div>
                        </div>

                        <div className="card border rounded mb-2">
                            <div className="card-header p-0">
                                <button className="h4 collapsed mb-0 font-weight-bold text-uppercase d-block p-2 pl-5" data-toggle="collapse"
                                    data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Collapsible Group Item #
                                    2</button>
                            </div>
                            <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                                        elit. Proin gravida nibh vel velit auctor</p>
                                </div>
                            </div>
                        </div>

                        <div className="card border rounded mb-2">
                            <div className="card-header p-0">
                                <button className="h4 collapsed mb-0 font-weight-bold text-uppercase d-block p-2 pl-5" data-toggle="collapse"
                                    data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">Collapsible Group Item #
                                    3</button>
                            </div>
                            <div id="collapseThree" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                                        elit. Proin gravida nibh vel velit auctor</p>
                                </div>
                            </div>
                        </div>

                        <div className="gap-20"></div>
                        <p><button className="btn btn-primary solid" id="apply-hover">Apply Now <i className="fa fa-long-arrow-right"></i></button></p>
                    </div>

                    <div className="gap-40"></div>

                    <h3 className="title-border">Facts</h3>
                    <div className="ts_counter elements p-0">
                        <div className="row text-center">
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
                                <h3>Item Sold</h3>
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
                                <h3>Awwards</h3>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-md-6">

                    <h3 className="title-border">Tabs</h3>
                    <div className="widget widget-tab">
                        <ul className="nav nav-tabs">
                            <li className="nav-item"><a className="nav-link active" href="#tab1" data-toggle="tab">Section 1</a></li>
                            <li className="nav-item"><a className="nav-link" href="#tab2" data-toggle="tab">Section 2</a></li>
                            <li className="nav-item"><a className="nav-link" href="#tab3" data-toggle="tab">Section 3</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="tab1">
                                <p>Curabitur ultrices commodo magna, Mauris urna risus, adipiscing sit amet tempor sed, mollis eget ante.
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing
                                    hidden in the middle Etiam pellentesque ornare nulla. Suspendisse tellus leo, tincidunt sed convallis
                                    at, tristique ac ligula
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.</p>
                            </div>
                            <div className="tab-pane" id="tab2">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.</p>
                            </div>
                            <div className="tab-pane" id="tab3">
                                <p>Lorem ipsum dolor sit amet nec, consectetuer adipiscing elit. Aenemodo ligula eget dolorenean massa.
                                    Lorem ipsum dolor sit amet nec, consectetuer adipiscing elit. Aenemodo ligula eget dolorenean massa.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Elements
