import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {register} from '../../../actions/auth_actions'

import './signmodal.css'

export class SignModal extends Component {

    state = {
        modal: false,
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()

        const {first_name, last_name, username, email, password} = this.state

        // Create User object
        const newUser = {
            first_name, last_name, username, email, password
        }

        // Attempt to register
        this.props.register(newUser)
    }

    render() {
        return (
            <div className="modal fade" id="signup_modal" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Sign Up</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input type="text" name="first_name" placeholder="First Name" className="form-control form-control-lg" onChange={this.onChange}/><br />
                            <input type="text" name="last_name" placeholder="Last Name" className="form-control form-control-lg" onChange={this.onChange}/><br />
                            <input type="text" name="username" placeholder="Username" className="form-control form-control-lg" onChange={this.onChange}/><br />
                            <input type="email" name="email" placeholder="Email" className="form-control form-control-lg" onChange={this.onChange}/><br />
                            <input type="password" name="password" placeholder="Password" className="form-control form-control-lg" onChange={this.onChange}/>
                        </div>
                        <div className="modal-footer">
                            <button data-dismiss="modal" className="btn btn-primary solid blank">Close</button>
                            <button type="submit" className="btn btn-primary solid blank" onClick={this.onSubmit}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(
    mapStateToProps,
    {register}
)(SignModal)


// function SignModal() {
//     return (
//         <div className="modal fade" id="signup_modal" role="dialog">
//             <div className="modal-dialog modal-dialog-centered" role="document">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h3>Sign Up</h3>
//                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                     <div className="modal-body">
//                         <input type="text" name="first_name" placeholder="First Name" className="form-control form-control-lg" onChange={this.onChange}/><br />
//                         <input type="text" name="last_name" placeholder="Last Name" className="form-control form-control-lg" onChange={this.onChange}/><br />
//                         <input type="text" name="username" placeholder="Username" className="form-control form-control-lg" onChange={this.onChange}/><br />
//                         <input type="email" name="email" placeholder="Email" className="form-control form-control-lg" onChange={this.onChange}/><br />
//                         <input type="password" name="password" placeholder="Password" className="form-control form-control-lg" onChange={this.onChange}/>
//                     </div>
//                     <div className="modal-footer">
//                         <button data-dismiss="modal" className="btn btn-primary solid blank">Close</button>
//                         <button type="submit" className="btn btn-primary solid blank">Sign Up</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SignModal
