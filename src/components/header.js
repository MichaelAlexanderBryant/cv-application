import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div id="header-container">
                <div id="header">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon">
                        <title>note-text</title>
                        <path d="M14,10H19.5L14,4.5V10M5,3H15L21,9V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3M5,12V14H19V12H5M5,16V18H14V16H5Z" />
                    </svg>
                    <h1>
                        CV Application
                    </h1>
                </div>
            </div>
        )
    }
}

export { Header };