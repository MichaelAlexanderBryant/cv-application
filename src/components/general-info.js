import React from 'react';

class GeneralInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            nameInput: "",
            emailInput: "",
            phoneInput: ""
        };

        this.getName = this.getName.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getPhone = this.getPhone.bind(this);
    };

    getName(event) {
        this.setState({nameInput: event.target.value})
    };

    getEmail(event) {
        this.setState({emailInput: event.target.value})
    };

    getPhone(event) {
        this.setState({phoneInput: event.target.value})
    };

    render() {
        return (
            <div>
                <div className={this.props.previewOn ? "hide" : ""}>
                    <h3>
                        General
                    </h3>
                    
                        <form id="general-input">
                            <span className="input-field">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" onChange={this.getName}></input>
                            </span>
                            <span className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" onChange={this.getEmail}></input>
                            </span>
                            <span className="input-field">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="text" name="phone" onChange={this.getPhone}></input>
                            </span>
                        </form>
                </div>
                <div className={this.props.previewOn ? "" : "hide"}>
                    <div id="name-preview">{this.state.nameInput}</div>
                    <div id="other-info">
                        {this.state.emailInput === "" ?
                        (this.state.phoneInput === "" ?
                         "" : this.state.phoneInput) : (this.state.phoneInput === "" ?
                          this.state.emailInput : this.state.emailInput + " | " + this.state.phoneInput)}
                        </div>
                </div>
            </div>
        )
    }
}

export { GeneralInfo };