import React from 'react';
import { WorkExperience } from './work-experience';

class WorkExperienceContainer extends React.Component {

    render() {
        return (
            <div>
                <h3 className={ !(this.props.previewOn)  ? "h3-grey" : ((this.props.numberOfWorkComponents > 0) ? "h3-black" : "hide")}>
                    Work Experience
                </h3>
                {Array.from(Array(this.props.numberOfWorkComponents)).map((x, index) => <WorkExperience key={index} previewOn={this.props.previewOn}/>)}

            </div>
        )
    }
}

export { WorkExperienceContainer };