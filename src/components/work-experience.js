import React from 'react';

class WorkExperience extends React.Component {

    render() {
        return (
            <div>
                <h3>
                    Work Experience
                </h3>
                <form id="work-input">
                    <span class="input-field">
                        <label for="company-name">Company Name</label>
                        <input type="text" name="company-name"></input>
                    </span>
                    <span class="input-field">
                        <label for="position">Position Title</label>
                        <input type="text" name="position"></input>
                    </span>
                    <span class="input-field">
                        <label for="tasks">Main Tasks</label>
                        <textarea type="text" name="tasks"></textarea>
                    </span>
                    <span class="input-field">
                        <label for="start-date">Start Date</label>
                        <input type="text" name="start-date"></input>
                    </span>
                    <span class="input-field">
                        <label for="end-date">End Date</label>
                        <input type="text" name="end-date"></input>
                    </span>
                </form>
            </div>
        )
    }
}

export { WorkExperience };