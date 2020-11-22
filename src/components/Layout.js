import { Fragment } from "react";
import Header from "./Header";
function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <h1>This is the Layout</h1>
      {children}
    </Fragment>
  );
}

export default Layout;
