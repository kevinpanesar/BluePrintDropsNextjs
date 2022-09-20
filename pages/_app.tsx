// import 'semantic-ui-css/semantic.min.css'
import "../styles/globals.css";
import "../global/stylesheet.css";
import { Provider } from "react-redux";
import store from "../store/store";
import { AppProps } from 'next/app';


function MyApp({ Component, pageProps } : AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
