import React from 'react';

import Introduction from './components/introduction/introduction.component'
import RatePreview from './components/rate-preview/rate-preview.component'
import FeedbackPreview from './components/feedback-preview/feedbak-preview.component'


import './App.css';

function App() {
  return (
    <div className="App">
      <Introduction />
      <RatePreview />
      <FeedbackPreview />
      <footer>
        Challenge by 
        <a 
          href='https://www.frontendmentor.io/solutions' 
          rel='noreferrer' 
          target='_blank'
        >
         {" "}Frontend Mentor
        </a>. Coded by 
        <a           
          href='https://github.com/nogueiram-27' 
          rel='noreferrer' 
          target='_blank'
        >
        {" "}Maria Nogueira
        </a>.
      </footer>
    </div>
  );
}

export default App;
