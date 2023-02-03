import React from 'react';
import { WorkExperience } from './work-experience';

class WorkExperienceContainer extends React.Component {

    render() {
        return (
            <div>
                <h3>
                    Work Experience
                </h3>
                {Array.from(Array(this.props.numberOfWorkComponents)).map((x, index) => <WorkExperience key={index} />)}

            </div>
        )
    }
}

export { WorkExperienceContainer };