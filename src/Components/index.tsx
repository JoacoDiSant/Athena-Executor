import React from 'react';
import styles from '@/styles/Home.module.css';
import Headers from './Headers';

function App() {
  return (
    <div className={`${styles.body}`}>
      <Headers />
    </div>
  );
}

export default App;
