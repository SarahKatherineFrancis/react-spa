import { Link } from "react-router-dom";

// Define the Home component, representing the content of the home page.
const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        {/* Create a Link component within a paragraph that points to the "/products" path. */}
        Go to <Link to="/products">the list of products</Link>
      </p>
    </>
  );
};

export default Home;
