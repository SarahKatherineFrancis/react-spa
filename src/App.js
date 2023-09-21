import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Root from "./pages/Root";

// Create a router configuration using createBrowserRouter.
// This configuration specifies which components to render for specific paths.
const router = createBrowserRouter([
  {
    path: "/", // Define the root path.
    element: <Root />, // Render the Root component for the root path.
    children: [
      { path: "/", element: <Home /> }, // Render the Home component for the root path.
      { path: "/products", element: <Products /> }, // Render the Products component for the "/products" path.
    ],
  },
]);

// Define the main App component.
function App() {
  // Return the RouterProvider component with the router configuration as a prop.
  // This allows the routing functionality to be available throughout the app.
  return <RouterProvider router={router} />;
}

export default App;
