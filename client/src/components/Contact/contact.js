import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-7">
                    <form id="contact-form" action="#" method="post">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input className="form-control" name="name" id="name" placeholder="" type="text" required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input className="form-control" name="email" id="email" placeholder="" type="email" required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input className="form-control" name="subject" id="subject" placeholder="" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" name="message" id="message" placeholder="" rows="10" required></textarea>
                        </div>
                        <div className="text-right"><br />
                            <button className="btn btn-primary solid blank" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>

                <div className="col-md-5">
                    <div className="contact-info">
                        <h3>Contact Details</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget erat magna. Pellentesque justo
                            ante</p>
                        <br />
                        <p><i className="fa fa-home info"></i> 1102 Saint Marys, Junction City, KS </p>
                        <p><i className="fa fa-phone info"></i> +(785) 238-4131 </p>
                        <p><i className="fa fa-envelope-o info"></i> info@bizcraft.com</p>
                        <p><i className="fa fa-globe info"></i> www.bizcraft.com</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
