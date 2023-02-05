import React, {useState} from 'react';

function WorkExperience(props) {

    const [companyNameInput, setCompanyNameInput] = useState("");
    const [positionInput, setPositionInput] = useState("");
    const [tasksInput, setTasksInput] = useState("");
    const [startDateInput, setStartDateInput] = useState("");
    const [endDateInput, setEndDateInput] = useState("");

    return (
        <div>
            <div className={props.previewOn ? "hide" : ""}>
                <form id="work-input">
                    <span className="input-field">
                        <label htmlFor="company-name">Company Name</label>
                        <input type="text" name="company-name" onChange={(event) => setCompanyNameInput(event.target.value)}></input>
                    </span>
                    <span className="input-field">
                        <label htmlFor="position">Position Title</label>
                        <input type="text" name="position" onChange={(event) => setPositionInput(event.target.value)}></input>
                    </span>
                    <span className="input-field">
                        <label htmlFor="tasks">Main Tasks</label>
                        <textarea type="text" name="tasks" onChange={(event) => setTasksInput(event.target.value)}></textarea>
                    </span>
                    <span className="input-field">
                        <label htmlFor="start-date">Start Date</label>
                        <input type="text" name="start-date" onChange={(event) => setStartDateInput(event.target.value)}></input>
                    </span>
                    <span className="input-field">
                        <label htmlFor="end-date">End Date</label>
                        <input type="text" name="end-date" onChange={(event) => setEndDateInput(event.target.value)}></input>
                    </span>
                </form>
            </div>
            <div className={props.previewOn ? "work-entry":"hide"}>
                <div className="education-first-line">
                    <span>
                        <span className="company-name-preview">{companyNameInput}</span> | 
                        <span className="position-preview"> {positionInput}</span>
                    </span>
                    <span className="date-preview">{startDateInput} - {endDateInput}</span>
                </div>
                <div className="tasks-preview">{tasksInput}</div>
            </div>
        </div>
    )
}

// class WorkExperience extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             companyNameInput: "",
//             positionInput: "",
//             tasksInput: "",
//             startDateInput: "",
//             endDateInput: ""
//         };

//         this.getCompanyName = this.getCompanyName.bind(this);
//         this.getPosition = this.getPosition.bind(this);
//         this.getTasks = this.getTasks.bind(this);
//         this.getStartDate = this.getStartDate.bind(this);
//         this.getEndDate = this.getEndDate.bind(this);
//     };

//     getCompanyName(event) {
//         this.setState({companyNameInput: event.target.value})
//     };

//     getPosition(event) {
//         this.setState({positionInput: event.target.value})
//     };

//     getTasks(event) {
//         this.setState({tasksInput: event.target.value})
//     };

//     getStartDate(event) {
//         this.setState({startDateInput: event.target.value})
//     };

//     getEndDate(event) {
//         this.setState({endDateInput: event.target.value})
//     };

//     render() {
//         return (
//             <div>
//                 <div className={this.props.previewOn ? "hide" : ""}>
//                     <form id="work-input">
//                         <span className="input-field">
//                             <label htmlFor="company-name">Company Name</label>
//                             <input type="text" name="company-name" onChange={this.getCompanyName}></input>
//                         </span>
//                         <span className="input-field">
//                             <label htmlFor="position">Position Title</label>
//                             <input type="text" name="position" onChange={this.getPosition}></input>
//                         </span>
//                         <span className="input-field">
//                             <label htmlFor="tasks">Main Tasks</label>
//                             <textarea type="text" name="tasks" onChange={this.getTasks}></textarea>
//                         </span>
//                         <span className="input-field">
//                             <label htmlFor="start-date">Start Date</label>
//                             <input type="text" name="start-date" onChange={this.getStartDate}></input>
//                         </span>
//                         <span className="input-field">
//                             <label htmlFor="end-date">End Date</label>
//                             <input type="text" name="end-date" onChange={this.getEndDate}></input>
//                         </span>
//                     </form>
//                 </div>
//                 <div className={this.props.previewOn ? "work-entry":"hide"}>
//                     <div className="education-first-line">
//                         <span>
//                             <span className="company-name-preview">{this.state.companyNameInput}</span> | 
//                             <span className="position-preview"> {this.state.positionInput}</span>
//                         </span>
//                         <span className="date-preview">{this.state.startDateInput} - {this.state.endDateInput}</span>
//                     </div>
//                     <div className="tasks-preview">{this.state.tasksInput}</div>
//                 </div>
//             </div>
//         )
//     }
// }

export { WorkExperience };