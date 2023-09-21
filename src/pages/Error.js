import MainNavigation from "../components/MainNavigation";

// Define the Error component, which represents the page to display when an error occurs.
const Error = () => {
  return (
    <>
      {/* Render the MainNavigation component, typically used for site navigation. */}
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
};

export default Error;
