import React from 'react';
import Taskboard from '../../components/Taskboard';
import styles from './HomePage.module.scss';

const HomePage = props => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to your first taskboard</h1>
          <h2 className={styles.subtitle}>Manage your time effectively</h2>
        </div>
      </header>
      <main className={styles.content}>
        <div className={styles.container}>
          <Taskboard />
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.copyright}>2021 © All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
