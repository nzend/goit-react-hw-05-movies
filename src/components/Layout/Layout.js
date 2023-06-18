import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import css from './Layout.module.css';

let activeClassName = {
  color: '#f87719',
};



const Layout = () => {
  return (
    <div className={css.container}>
      <header>
        <nav>
          <ul className={css.navigation}>
            <li className={css.navigation__item}>
              <NavLink
                className={css.navigation__link}
                to="/"
                style={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li className={css.navigation__item}>
              <NavLink
                className={css.navigation__link}
                to="/movies"
                style={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Search
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
