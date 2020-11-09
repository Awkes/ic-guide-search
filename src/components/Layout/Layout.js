import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.css';
import logo from '../../images/ic-logo-white.png';
import poweredBy from '../../images/powered-by-ic.png';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <img src={logo} alt="InfoCaption Logo" className={styles.logo} />
    </header>
    
    <main className={styles.main}>
      {children}
    </main>

    <footer className={styles.footer}>
      <img src={poweredBy} alt="Powered by InfoCaption" />
      <p>Built by Andreas Åkerlöf</p>
    </footer>
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
};
