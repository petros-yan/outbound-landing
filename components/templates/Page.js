import PropTypes from "prop-types";
import { Header, Footer } from "components/organisms";

const classes = {
  root: "min-h-screen flex flex-col",
};

const Page = ({ children }) => {
  return (
    <div className={classes.root}>
      <Header />
      <main className="flex-1 ">{children}</main>
      <Footer />
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
