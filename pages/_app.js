import { ApolloProvider } from "@apollo/client";
import client from "services/client";
import "styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
