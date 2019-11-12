import React, { Component } from 'react'

export class Clients extends Component {
    render() {
        return (
            <section id="clients" className="clients">
                <div className="container">
                    <div className="row wow fadeInLeft">
                        <div id="client-carousel" className="col-sm-12 owl-carousel owl-theme text-center client-carousel">
                            <figure className="m-0 item client_logo">
                                <button href="#">
                                    <img src="./images/clients/client1.png" alt="client" />
                                </button>
                            </figure>
                            <figure className="m-0 item client_logo">
                                <button href="#">
                                    <img src="./images/clients/client2.png" alt="client" />
                                </button>
                            </figure>
                            <figure className="m-0 item client_logo">
                                <button href="#">
                                    <img src="./images/clients/client3.png" alt="client" />
                                </button>
                            </figure>
                            <figure className="m-0 item client_logo">
                                <button href="#">
                                    <img src="./images/clients/client4.png" alt="client" />
                                </button>
                            </figure>
                            <figure className="m-0 item client_logo">
                                <button href="#">
                                    <img src="./images/clients/client5.png" alt="client" />
                                </button>
                            </figure>
                            <figure className="m-0 item client_logo">
                                <button href="#">
                                    <img src="./images/clients/client6.png" alt="client" />
                                </button>
                            </figure>
                            <figure className="m-0 item client_logo">
                                <button href="#">
                                    <img src="./images/clients/client7.png" alt="client" />
                                </button>
                            </figure>
                            <figure className="m-0 item client_logo">
                                <button href="#">
                                    <img src="./images/clients/client8.png" alt="client" />
                                </button>
                            </figure>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default Clients
