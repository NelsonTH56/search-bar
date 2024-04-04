

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ResultsPage = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from PyPI API based on the query
  }, [query]);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="results-page">
      <button onClick={handleBack}>Back</button>
      <h2>Search Results for "{query}"</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default ResultsPage;
