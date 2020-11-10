import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchField.module.css';
import find from '../../images/find.svg';

const SearchField = ({ name, onChange, placeholder, value }) => (
  <div className={styles.wrapper}>
    <input 
      autoComplete="off"
      className={styles.input} 
      name={name} 
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
    <button 
      className={styles.button} 
      disabled={!value}
      type="submit"
    >
      <img src={find} alt="🔍" />
    </button>
  </div>
);

export default SearchField;

SearchField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

SearchField.defaultProps = {
  onChange: null,
  placeholder: '',
  value: '',
}
