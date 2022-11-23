import { Link, NavLink } from 'react-router-dom';
import classess from './MainNavigation.module.css';

const MainNaviagation = () => {
  return (
    <header className={classess.header}>
      <div className={classess.logo}>
        <Link to={'/quotes'}>Great Quotes</Link>
      </div>
      <nav className={classess.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classess.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classess.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNaviagation;
