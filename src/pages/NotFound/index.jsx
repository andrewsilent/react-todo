import React from 'react';
import styles from './NotFound.module.scss';

const NotFound = props => {
  return (
    <section className={styles.flex}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Page not found</h2>
    </section>
  );
};

export default NotFound;
