import React, { useState } from 'react';

const Search= () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search action based on the searchQuery value
    console.log('Perform search:', searchQuery);
  };

  return (
    <div className="tw-max-w-md tw-mx-auto tw-bg-white tw-rounded-lg tw-shadow-md tw-p-6 tw-z-50">
      <h1 className="tw-text-2xl tw-font-bold tw-mb-4">Find Your Perfect Car</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter car details"
          className="tw-w-full tw-py-2 tw-px-4 tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-focus:tw-outline-none tw-focus:tw-ring-indigo-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="tw-mt-4 tw-py-2 tw-px-4 tw-bg-indigo-600 tw-text-white tw-font-medium tw-rounded-md tw-shadow-sm hover:tw-bg-indigo-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
