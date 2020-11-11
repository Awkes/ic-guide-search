import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Spinner from 'react-spinkit';

import styles from './Search.module.css';
import SearchResults from './SearchResults';
import Heading from '../../components/Heading';
import SearchField from '../../components/SearchField';
import SearchSuggest from '../../components/SearchSuggest';
import { guideSuggest, guideSearch } from '../../api';

const Search = () => {
  const [searchString, setSearchString] = useState('');
  const [searchSuggest, setSearchSuggest] = useState([]);
  const [searchResults, setSearchResults] = useState({});
  const [searching, setSearching] = useState(false);
  
  const history = useHistory();
  const location = useLocation();
  const query = queryString.parse(location.search);

  function handleInput(e) {
    const { value } = e.target;
    setSearchString(value);

    // Fetch search suggestions
    if (value.length > 1) {
      guideSuggest(`?searchQuery=${value}`)
        .then(results => setSearchSuggest(results))
        .catch(err => console.error(err));
    } else {
      setSearchSuggest([]);
    }
  }

  function handleSearch(value) {
    setSearchString('');
    setSearchSuggest([]);
    history.push(`/?searchQuery=${value}`);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(searchString);
  }

  // Perform search if search-query-string is present
  useEffect(() => {
    if (location.search.length > 1) {
      setSearching(true);
      guideSearch(location.search)
        .then(results => {
          setSearchResults(results);
          setSearching(false);
        })
        .catch(err => {
          console.log(err)
          setSearching(false);
        });
    }
  }, [location.search]);

  const { currentPage, totalPages, results } = searchResults;
 
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Heading>Sök</Heading>
        <SearchField
          name="search"
          min={2}
          onChange={handleInput}
          placeholder="Search ..."          
          value={searchString}
        />

        <div className={styles.suggestWrapper}>
          <SearchSuggest
            suggestions={searchSuggest}
            action={handleSearch}
          />
        </div>
      </form>

      {searching ? (
        <div className={styles.spinner}>
          <Spinner name="double-bounce" />
        </div>
      ) : (
        <SearchResults 
          results={results} 
          query={query}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default Search;
