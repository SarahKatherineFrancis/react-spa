import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

// Define the Root component, which serves as the layout structure of the application.
const Root = () => {
  return (
    <>
      {/* Render the MainNavigation component to display the application's navigation menu. */}
      <MainNavigation />

      <main>
        {/* Render the Outlet component, which acts as a placeholder for nested routes. */}
        <Outlet />
      </main>
    </>
  );
};

export default Root;
