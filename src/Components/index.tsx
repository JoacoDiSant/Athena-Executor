import React from 'react';

import styles from '../styles/Home.module.css';
import styles2 from '../styles/MobileMenu.module.css';
import Headers from './Headers';
import Body from './Body';
import Footer from './Footers';
import NavTabs from './Headers/Components/NavTabs';

function App() {
  const [open, setOpen] = React.useState<boolean>(false);

  const showDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.main}>
      <div className={`Header ${styles.header}`}>
        <div className="Header/Navbar">
          <div className="NavBar">
            <div className="containerIcon">
              <div
                aria-hidden="true"
                className={`${styles2.btn} ${
                  open ? styles2.active : styles2.notActive
                }`}
                onClick={showDrawer}
              >
                <span className={styles2.span} />
                <span className={styles2.span} />
                <span className={styles2.span} />
              </div>
            </div>
          </div>
          <NavTabs open={open} setOpen={setOpen} />
        </div>
        <Headers />
      </div>
      <div className="Body">
        <Body />
      </div>
      <div className={`Footer ${styles.footer}`}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
