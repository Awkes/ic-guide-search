import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchSuggest.module.css';

const SearchSuggest = ({ action, suggestions }) => {
  if (suggestions.length < 1) return null;
  
  function handleClick(e) {
    const text = e.currentTarget.innerText;
    action(text);
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {suggestions.map(({ key, id }) => (
          <li className={styles.item} key={id}>
            <button
              dangerouslySetInnerHTML={{ __html: key }}
              onClick={handleClick}
              type="button" 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSuggest;

SearchSuggest.propTypes = {
  action: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired
};
