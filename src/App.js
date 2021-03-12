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
    </div>
  );
}

export default App;
