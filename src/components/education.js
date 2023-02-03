import React from 'react';

class Education extends React.Component {

    render() {
        return (
            <div>
                <form id="education-input">
                <span className="input-field">
                        <label htmlFor="school-name">School Name</label>
                        <input type="text" name="name"></input>
                    </span>
                    <span className="input-field">
                        <label htmlFor="degree">Degree</label>
                        <input type="text" name="degree"></input>
                    </span>
                    <span className="input-field">
                        <label htmlFor="attend-date">Date</label>
                        <input type="text" name="attend-date"></input>
                    </span>
                </form>
            </div>
        )
    }
}

export { Education };