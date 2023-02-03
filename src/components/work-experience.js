import React from 'react';

class WorkExperience extends React.Component {

    render() {
        return (
            <div>
                <form id="work-input">
                    <span className="input-field">
                        <label htmlFor="company-name">Company Name</label>
                        <input type="text" name="company-name"></input>
                    </span>
                    <span className="input-field">
                        <label htmlFor="position">Position Title</label>
                        <input type="text" name="position"></input>
                    </span>
                    <span className="input-field">
                        <label htmlFor="tasks">Main Tasks</label>
                        <textarea type="text" name="tasks"></textarea>
                    </span>
                    <span className="input-field">
                        <label htmlFor="start-date">Start Date</label>
                        <input type="text" name="start-date"></input>
                    </span>
                    <span className="input-field">
                        <label htmlFor="end-date">End Date</label>
                        <input type="text" name="end-date"></input>
                    </span>
                </form>
            </div>
        )
    }
}

export { WorkExperience };