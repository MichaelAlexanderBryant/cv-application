import React from 'react';

class WorkExperience extends React.Component {

    constructor() {
        super();
        this.state = {
            companyNameInput: "",
            positionInput: "",
            tasksInput: "",
            startDateInput: "",
            endDateInput: ""
        };

        this.getCompanyName = this.getCompanyName.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.getTasks = this.getTasks.bind(this);
        this.getStartDate = this.getStartDate.bind(this);
        this.getEndDate = this.getEndDate.bind(this);
    };

    getCompanyName(event) {
        this.setState({companyNameInput: event.target.value})
    };

    getPosition(event) {
        this.setState({positionInput: event.target.value})
    };

    getTasks(event) {
        this.setState({tasksInput: event.target.value})
    };

    getStartDate(event) {
        this.setState({startDateInput: event.target.value})
    };

    getEndDate(event) {
        this.setState({endDateInput: event.target.value})
    };

    render() {
        return (
            <div>
                <div className={this.props.previewOn ? "hide" : ""}>
                    <form id="work-input">
                        <span className="input-field">
                            <label htmlFor="company-name">Company Name</label>
                            <input type="text" name="company-name" onChange={this.getCompanyName}></input>
                        </span>
                        <span className="input-field">
                            <label htmlFor="position">Position Title</label>
                            <input type="text" name="position" onChange={this.getPosition}></input>
                        </span>
                        <span className="input-field">
                            <label htmlFor="tasks">Main Tasks</label>
                            <textarea type="text" name="tasks" onChange={this.getTasks}></textarea>
                        </span>
                        <span className="input-field">
                            <label htmlFor="start-date">Start Date</label>
                            <input type="text" name="start-date" onChange={this.getStartDate}></input>
                        </span>
                        <span className="input-field">
                            <label htmlFor="end-date">End Date</label>
                            <input type="text" name="end-date" onChange={this.getEndDate}></input>
                        </span>
                    </form>
                </div>
                <div className={this.props.previewOn ? "":"hide"}>
                    <div className="company-name-preview">{this.state.companyNameInput}</div>
                    <div className="position-preview">{this.state.positionInput}</div>
                    <div className="tasks-preview">{this.state.tasksInput}</div>
                    <div className="start-date-preview">{this.state.startDateInput}</div>
                    <div className="end-date-preview">{this.state.endDateInput}</div>
                </div>
            </div>
        )
    }
}

export { WorkExperience };