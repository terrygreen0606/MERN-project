import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';    
import {elements, blogs, contact, faq, log_status} from '../../actions/actions'

function Header() {

    const islogged = useSelector( state => state.islogged )
    const dispatch = useDispatch()
    
    return (
        <header id="header" className="fixed-top header" role="banner">
            <button className="navbar-brand navbar-bg"><img className="img-fluid float-right" src="./images/logo.png" alt="logo" /></button>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <button className="navbar-toggler ml-auto border-0 rounded-0 text-white" type="button" data-toggle="collapse"
                        data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span>
                    </button>

                    <div className="collapse navbar-collapse text-center" id="navigation">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to='/'><button className='nav-link'>Home</button></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Pages
                                </button>
                                <div className="dropdown-menu">
                                    <button className="dropdown-item">Our Team</button>
                                    <button className="dropdown-item">About Us - 2</button>
                                    <button className="dropdown-item">Services - 2</button>
                                    <button className="dropdown-item">Services Single</button>
                                    <button className="dropdown-item">Pricing Table</button>
                                    <button className="dropdown-item">404 Page</button>
                                </div>
                            </li>
                            <li className="nav-item">
                                {
                                    islogged ? <Link to='/elements'><button className="nav-link" onClick={()=>dispatch(elements())}>Elements</button></Link>
                                            : <button className="nav-link" data-toggle="modal" data-target="#log_modal">Elements</button>
                                }
                            </li>
                            <li className="nav-item">
                                <Link to='/blogs'><button className="nav-link" onClick={()=>dispatch(blogs())}>Blogs</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact'><button className="nav-link" onClick={()=>dispatch(contact())}>Contact</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/faq'><button className="nav-link" onClick={()=>dispatch(faq())}>Faq</button></Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" data-toggle="modal" data-target="#signup_modal">Sign Up</button>
                            </li>
                            <li className="nav-item">
                                { islogged ? <Link to='/'><button className="nav-link" onClick={()=>dispatch(log_status())}>Log Out</button></Link>
                                            :<button className="nav-link" data-toggle="modal" data-target="#log_modal" onClick={()=>dispatch(log_status())}>Log In</button> }
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
