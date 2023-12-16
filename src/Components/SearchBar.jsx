import React, { useState } from 'react';
import './SearchBar.scss'

const SearchBar = ({ onSearch }) => {

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <div className='search-bar-container'>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSearch}>Cerca</button>
    </div>
  );
};

export default SearchBar;
