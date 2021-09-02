import PropTypes from "prop-types";
import { Header } from "components/organisms";

const classes = {
  root: "min-h-screen flex flex-col",
};

const WithoutFooterPage = ({ children }) => {
  return (
    <div className={classes.root}>
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
};

WithoutFooterPage.propTypes = {
  children: PropTypes.any,
};

export default WithoutFooterPage;
