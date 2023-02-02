import React from 'react';

class Education extends React.Component {

    render() {
        return (
            <div>
                <h3>
                    Education
                </h3>
                <form id="education-input">
                <span class="input-field">
                        <label for="school-name">School Name</label>
                        <input type="text" name="name"></input>
                    </span>
                    <span class="input-field">
                        <label for="degree">Degree</label>
                        <input type="text" name="degree"></input>
                    </span>
                    <span class="input-field">
                        <label for="attend-date">Date</label>
                        <input type="text" name="attend-date"></input>
                    </span>
                </form>
            </div>
        )
    }
}

export { Education };