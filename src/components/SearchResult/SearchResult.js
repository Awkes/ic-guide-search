import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.module.css';
import Heading from '../Heading';

const SearchResult = ({ heading, lastModified, summary, url, thumbnail }) => {
  return (
    <a href={url} className={styles.link}>
      <div className={styles.thumb}>
        {thumbnail && <img src={thumbnail} alt="" />}
      </div>
      <div className={styles.text}>
        {heading && <Heading tag="h3">{heading}</Heading>}
        {summary && <p className={styles.summary}>{summary}</p>}
        <time className={styles.lastModified}>{lastModified}</time>
      </div>
    </a>
  );
};

export default SearchResult;

SearchResult.propTypes = {
  heading: PropTypes.string.isRequired,
  lastModified: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
