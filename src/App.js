import React, { useState } from "react";
import {Header} from './components/header';
import {UserInput} from './components/user-input-container';
import {ResumePreview} from './components/resume-preview-container'
import './App.css';

function App() {
  const [query, setQuery] = useState("");
  return (
    <div id="container">
        <Header />
      <div id="main-content">
        <UserInput onQuery={setQuery} />
        <ResumePreview query={query}/>
      </div>
    </div>
  );
}

export default App;
