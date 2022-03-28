import "../styles/globals.css";
import ProductContext from "../utils/context";

function MyApp({ Component, pageProps }) {
  return (
    <ProductContext>
      <Component {...pageProps} />
    </ProductContext>
  );
}

export default MyApp;
