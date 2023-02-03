import React from 'react';
import { Education } from './education';

class EducationContainer extends React.Component {

    render() {
        return (
            <div>
                {/* <h3 className={this.props.previewOn ? "hide" : ""}> */}
                <h3 className={ !(this.props.previewOn)  ? "" : ((this.props.numberOfEducationComponents > 0) ? "" : "hide")}>
                    Education
                </h3>
                {Array.from(Array(this.props.numberOfEducationComponents)).map((x, index) => <Education key={index} previewOn={this.props.previewOn}/>)}
            </div>
        )
    }
}

export { EducationContainer };