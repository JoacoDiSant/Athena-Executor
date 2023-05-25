import React from 'react';

import styles from '../styles/Home.module.css';
import Headers from './Headers';
import Body from './Body';

function App() {
  return (
    <div className={styles.main}>
      <div className="Header">
        <Headers />
      </div>
      <div className="Body">
        <Body />
      </div>
      <div className="Footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default App;
