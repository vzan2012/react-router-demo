import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <p>An error occurred !</p>
        <p>Could not find this page !</p>
      </main>
    </>
  );
};

export default ErrorPage;
