import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";

// Create a router configuration using createBrowserRouter.
// This configuration specifies that the Home component should be rendered when the path is "/".
const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

// Define the main App component.
function App() {
  // Return the RouterProvider component with the router configuration as a prop.
  // This allows the routing functionality to be available throughout the app.
  return <RouterProvider router={router} />;
}

export default App;
