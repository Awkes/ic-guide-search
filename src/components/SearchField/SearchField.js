import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchField.module.css';
import find from '../../images/find.svg';

const SearchField = ({ name, placeholder, value }) => (
  <div className={styles.wrapper}>
    <input 
      className={styles.input} 
      name={name} 
      placeholder={placeholder}
      defaultValue={value} 
    />
    <button className={styles.button} type="submit">
      <img src={find} alt="🔍" />
    </button>
  </div>
);

export default SearchField;

SearchField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

SearchField.defaultProps = {
  placeholder: '',
  value: '',
}
