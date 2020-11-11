import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import styles from './Search.module.css';
import searchImage from '../../images/search.svg';
import SearchResult from '../../components/SearchResult';

const mediaRoot = process.env.REACT_APP_API_MEDIA_URL;

const SearchResults = ({ results, query, totalPages, currentPage }) => {
  // Generate pagination links
  const pagination = useMemo(() => {
    const pages = [];
    for(let i = 1; i <= totalPages; i++) {
      query.page = i;
      pages.push(
        <li className={currentPage === i ? styles.active : null} key={'page'+i}>
          <Link to={'/?'+queryString.stringify(query)}>{i}</Link>
        </li>
      );
    }
    return pages;
  }, [totalPages, currentPage, query]);

  if (!query.searchQuery) {
    return (
      <div className={styles.searchImage}>
        <img src={searchImage} alt="Sök" />
      </div>
    );
  }

  return (
    results?.length > 0 ? (
      <>
        <ul className={styles.results}>
          {results.map(({ id, name, lastModifiedDate, summary, fullURL, thumbnailURL }) => (
            <li key={id}>
              <SearchResult
                heading={name}
                lastModified={lastModifiedDate}
                summary={summary}
                url={fullURL}
                thumbnail={thumbnailURL && `${mediaRoot}/${thumbnailURL}`}
              />
            </li>
          ))}
        </ul>
        <ul className={styles.pagination}>
          {pagination}
        </ul>
      </>
    ) : (
      <div className={styles.noResults}>
        <p>
          Inga resultat kunde hittas för: <em>{query.searchQuery}</em>
        </p>
      </div>
    )
  );
}

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({ 
      id: PropTypes.number.isRequired, 
      name: PropTypes.string.isRequired, 
      lastModifiedDate: PropTypes.string.isRequired, 
      summary: PropTypes.string.isRequired, 
      fullURL: PropTypes.string.isRequired, 
      thumbnailURL: PropTypes.string.isRequired
    })
  ),
  query: PropTypes.shape({
    page: PropTypes.number,
    searchQuery: PropTypes.string,
  })
}
