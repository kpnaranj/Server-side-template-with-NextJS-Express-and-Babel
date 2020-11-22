import { Fragment } from "react";
import Header from "./Header";
function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <h1 className="text-center pt-4">This is the Layout</h1>
      {children}
      <h2 className="text-center pt-4">End of Layout</h2>
    </Fragment>
  );
}

export default Layout;
