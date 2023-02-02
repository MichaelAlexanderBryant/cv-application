import React from 'react';

class GeneralInfo extends React.Component {

    render() {
        return (
            <div>
                <h3>
                    General
                </h3>
                <form id="general-input">
                    <span class="input-field">
                        <label for="name">Name</label>
                        <input type="text" name="name"></input>
                    </span>
                    <span class="input-field">
                        <label for="email">Email</label>
                        <input type="text" name="email"></input>
                    </span>
                    <span class="input-field">
                        <label for="phone">Phone Number</label>
                        <input type="text" name="phone"></input>
                    </span>
                </form>
            </div>
        )
    }
}

export { GeneralInfo };