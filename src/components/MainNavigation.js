import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

// Define the MainNavigation component, which represents the header navigation menu.
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* Create a NavLink component for the "Home" link, pointing to the root path ("/"). */}
            <NavLink
              to="/" // Specify the path to navigate to when the "Home" link is clicked.
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              } // Apply the "active" class if the link is currently active.
              end // Indicate that this NavLink should only be active when it exactly matches the current URL.
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* Create a NavLink component for the "Products" link, pointing to the "/products" path. */}
            <NavLink
              to="/products" // Specify the path to navigate to when the "Products" link is clicked.
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              } // Apply the "active" class if the link is currently active.
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
