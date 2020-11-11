import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import logo from '../../images/ic-logo-white.png';
import poweredBy from '../../images/powered-by-ic.png';

const Layout = ({ children }) => {
  // Scroll to top on location-change
  const { pathname, search } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname, search]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerBlock}>
          <Link to="/">
            <img src={logo} alt="InfoCaption Logo" className={styles.logo} />
          </Link>
        </div>
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
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
};
