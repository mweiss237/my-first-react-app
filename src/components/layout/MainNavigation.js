import { Link } from "react-router-dom";

import styles from  './MainNavigation.module.css'

function MainNavigation() {

    

    return (
      <header className={styles.header}>
          <div>React Meetups</div>
          <nav>
              <ul>
                  <li><Link to='/'>All Meetups</Link></li>
                  <li><Link to='/new-meetup'>Add new Meetup</Link></li>
                  <li><Link to='/favorites'>My Favorites</Link></li>
              </ul>
          </nav>
      </header>
    );
  }
  
  export default MainNavigation;
  