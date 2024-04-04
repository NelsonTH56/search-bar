import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchPage } from './components/SearchPage';
import { ResultsPage } from './components/Results';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/results/:query" element={<ResultsPage />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;