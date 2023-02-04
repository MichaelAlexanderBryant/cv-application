import React from 'react';

class Education extends React.Component {

    constructor() {
        super();
        this.state = {
            schoolNameInput: "",
            degreeInput: "",
            gradDateInput: ""
        };

        this.getSchoolName = this.getSchoolName.bind(this);
        this.getDegree = this.getDegree.bind(this);
        this.getGradDate = this.getGradDate.bind(this);
    };

    getSchoolName(event) {
        this.setState({schoolNameInput: event.target.value})
    };

    getDegree(event) {
        this.setState({degreeInput: event.target.value})
    };

    getGradDate(event) {
        this.setState({gradDateInput: event.target.value})
    };

    render() {
        return (
            <div>
                <div className={this.props.previewOn ? "hide" : ""}>
                    <form id="education-input">
                        <span className="input-field">
                            <label htmlFor="school-name">School Name</label>
                            <input type="text" name="name" onChange={this.getSchoolName}></input>
                        </span>
                        <span className="input-field">
                            <label htmlFor="degree">Degree</label>
                            <input type="text" name="degree" onChange={this.getDegree}></input>
                        </span>
                        <span className="input-field">
                            <label htmlFor="attend-date">Date</label>
                            <input type="text" name="attend-date" onChange={this.getGradDate}></input>
                        </span>
                    </form>
                </div>
                <div className={this.props.previewOn ? "university-entry":"hide"}>
                    <div className="education-first-line">
                        <span className="school-name-preview">{this.state.schoolNameInput}</span>
                        <span className="grad-date-preview">{this.state.gradDateInput}</span>
                    </div>
                    <div className="degree-preview">{this.state.degreeInput}</div>
                </div>
            </div>
        )
    }
}

export { Education };