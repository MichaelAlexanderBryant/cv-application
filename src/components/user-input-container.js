import React from 'react';
import { GeneralInfo } from './general-info';
import { EducationContainer } from './education-container';
import { WorkExperienceContainer } from './work-experience-container';

class UserInput extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfEducation: 1,
            numberOfWork: 1
        }

        this.addEducation = this.addEducation.bind(this);
        this.removeEducation = this.removeEducation.bind(this);
    };
    // Next: create a state which increments/decrements with click of button
    // and pass the state as a property to the education and work exp containers
    // then in each container, add/remove components based on the property

    addEducation = (event) => {
        // event.preventDefault()
        this.setState({
            numberOfEducation: this.state.numberOfEducation + 1
        })
    };

    removeEducation = (event) => {
        // event.preventDefault()
        if (this.state.numberOfEducation > 0) {
            this.setState({
                numberOfEducation: this.state.numberOfEducation - 1
            })
        };
        
    };

    addWork = (event) => {
        event.preventDefault()
        this.setState({
            numberOfWork: this.state.numberOfWork + 1
        })
    };

    removeWork = (event) => {
        event.preventDefault()
        this.setState({
            numberOfWork: this.state.numberOfWork - 1
        })
    };

    render() {
        return (
            <div id="left-panel">
                <h2>Your Information</h2>
                <div id="form-container">
                    <div id="forms">
                        <GeneralInfo />
                        <EducationContainer numberOfEducationComponents={this.state.numberOfEducation} />
                        <button onClick={this.addEducation}>Add More Education</button>
                        <button onClick={this.removeEducation}>Remove Education</button>
                        <WorkExperienceContainer numberOfWorkComponents={this.state.numberOfWork} />
                        <button onClick={this.addWork}>Add More Work Experience</button>
                        <button onClick={this.removeWork}>Remove Work Experience</button>
                    </div>
                </div>
            </div>
        )
    }
}

export { UserInput };