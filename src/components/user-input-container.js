import React from 'react';
import { GeneralInfo } from './general-info';
import { EducationContainer } from './education-container';
import { WorkExperienceContainer } from './work-experience-container';

class UserInput extends React.Component {
    constructor({ onQuery }) {
        super();
        this.state = {
            numberOfEducation: 1,
            numberOfWork: 1,
            previewMode: false
        }

        this.addEducation = this.addEducation.bind(this);
        this.removeEducation = this.removeEducation.bind(this);
        this.getPreview = this.getPreview.bind(this);
    };

    addEducation = () => {
        this.setState({
            numberOfEducation: this.state.numberOfEducation + 1
        })
    };

    removeEducation = () => {
        if (this.state.numberOfEducation > 0) {
            this.setState({
                numberOfEducation: this.state.numberOfEducation - 1
            })
        };
        
    };

    addWork = () => {
        this.setState({
            numberOfWork: this.state.numberOfWork + 1
        })
    };

    removeWork = () => {
        this.setState({
            numberOfWork: this.state.numberOfWork - 1
        })
    };

    getPreview() {
        this.setState({
            previewMode: !this.state.previewMode
        });
    };

    
    

    render() {
        return (
            <div id="left-panel">
                <h2>Your Information</h2>
                <div id="form-container">
                    <div id="forms">
                        <GeneralInfo previewOn={this.state.previewMode} />
                        <EducationContainer numberOfEducationComponents={this.state.numberOfEducation} />
                        <div className="buttons">
                            <button className={this.state.previewMode ? "hide" : "increment-decrement-buttons"} onClick={this.addEducation}>+</button>
                            <button className={this.state.previewMode ? "hide" : "increment-decrement-buttons"} onClick={this.removeEducation}>-</button>
                        </div>
                        <WorkExperienceContainer numberOfWorkComponents={this.state.numberOfWork} />
                        <div className="buttons">
                            <button className={this.state.previewMode ? "hide" : "increment-decrement-buttons"} onClick={this.addWork}>+</button>
                            <button className={this.state.previewMode ? "hide" : "increment-decrement-buttons"} onClick={this.removeWork}>-</button>
                        </div>
                    </div>
                    <div id="submit-align">
                        <button id="submit-button" className={this.state.previewMode ? "hide" : "submit-edit-buttons"} onClick={this.getPreview}>Submit</button>
                        <button id="edit-button" className={this.state.previewMode ? "submit-edit-buttons" : "hide"} onClick={this.getPreview}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export { UserInput };