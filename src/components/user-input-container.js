import React from 'react';
import { GeneralInfo } from './general-info';
import { Education } from './education';
import { WorkExperience } from './work-experience';

class UserInput extends React.Component {

    render() {
        return (
            <div id="left-panel">
                <h2>Your Information</h2>
                <GeneralInfo />
                <Education />
                <button>Add More Education</button>
                <WorkExperience />
                <button>Add More Work Experience</button>
            </div>
        )
    }
}

export { UserInput };