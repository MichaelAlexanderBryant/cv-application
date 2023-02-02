import React from 'react';
import { GeneralInfo } from './general-info';
import { EducationContainer } from './education-container';
import { WorkExperienceContainer } from './work-experience-container';

class UserInput extends React.Component {
    // Next: create a state which increments/decrements with click of button
    // and pass the state as a property to the education and work exp containers
    // then in each container, add/remove components based on the property
    render() {
        return (
            <div id="left-panel">
                <h2>Your Information</h2>
                <div id="form-container">
                    <div id="forms">
                        <GeneralInfo />
                        <EducationContainer />
                        <button>Add More Education</button>
                        <button>Remove Education</button>
                        <WorkExperienceContainer />
                        <button>Add More Work Experience</button>
                        <button>Remove Work Experience</button>
                    </div>
                </div>
            </div>
        )
    }
}

export { UserInput };