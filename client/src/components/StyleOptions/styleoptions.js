import React, { Component } from 'react'

export class Styleoptions extends Component {
    render() {
        return (
            <div className="style-switch-wrapper">
                <div className="style-switch-button">
                    <i className="fa fa-sliders"></i>
                </div>
                <h3>Style Options</h3>
                <button id="preset1" className="btn btn-sm btn-primary"></button>
                <button id="preset2" className="btn btn-sm btn-primary"></button>
                <button id="preset3" className="btn btn-sm btn-primary"></button>
                <button id="preset4" className="btn btn-sm btn-primary"></button>
                <button id="preset5" className="btn btn-sm btn-primary"></button>
                <button id="preset6" className="btn btn-sm btn-primary"></button>
            </div>
        )
    }
}

export default Styleoptions
