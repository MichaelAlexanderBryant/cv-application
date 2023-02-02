import React, { useState } from "react";
import Header from './components/user-input';
import UserInput from './components/user-input';
import ResumePreview from './components/resume-preview'

function App() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <Header />
      <div>
        <UserInput onQuery={setQuery} />
        <ResumePreview query={query}/>
      </div>
    </div>
  );
}

export default App;
