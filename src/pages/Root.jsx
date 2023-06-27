import classes from "./Root.module.css";

import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      {/* <h1>Root Layout</h1> */}
      <MainNavigation />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
