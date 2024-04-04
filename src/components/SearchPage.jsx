import React, { useState } from 'react';
import { Router, Routes, Route, useNavigate } from 'react-router-dom';



function SearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');


  const handleSearch = () => {
    navigate(`/results/${query}`);
  };


  return (
    <div className="search-page">
      <h1>hello</h1>
      <img src="images/logo2.png" alt="PyPI Logo" />
      <h2>PyPI Package Search</h2>
      <input
        type="text"
        placeholder="Enter package name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchPage();
