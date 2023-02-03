import React from 'react';
import { Education } from './education';

class EducationContainer extends React.Component {

    render() {
        return (
            <div>
                <h3>
                    Education
                </h3>
                {Array.from(Array(this.props.numberOfEducationComponents)).map((x, index) => <Education key={index} />)}
            </div>
        )
    }
}

export { EducationContainer };