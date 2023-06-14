import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from "react";

const Layout = () => {
  return (
    <div>
     <header>
     <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>
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
