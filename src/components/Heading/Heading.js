import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.css';

const Heading = ({ children, tag }) => {
  const Tag = tag;
  return (
    <Tag className={styles.heading}>
      {children}
    </Tag>
  );
}

export default Heading;

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  tag: PropTypes.string,
}

Heading.defaultProps = {
  tag: 'h1',
}
