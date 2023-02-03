import React from 'react';

class GeneralInfo extends React.Component {

    handleChange(event) {
        this.onQuery(event.target.handle)
    }

    render() {
        return (
            <div>
                <h3>
                    General
                </h3>
                <form id="general-input">
                    <span className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"></input>
                    </span>
                    <span className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email"></input>
                    </span>
                    <span className="input-field">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" name="phone"></input>
                    </span>
                </form>
            </div>
        )
    }
}

export { GeneralInfo };