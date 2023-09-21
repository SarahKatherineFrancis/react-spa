import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

// Define the MainNavigation component, which represents the header navigation menu.
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* Create a Link component for the "Home" link, pointing to the root path ("/"). */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Create a Link component for the "Products" link, pointing to the "/products" path. */}
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
