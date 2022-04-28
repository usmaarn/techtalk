import '../styles/globals.css'
import SessionProvider, {getSession} from "../config/sessionContext";
import App from "next/app";

function MyApp({ Component, pageProps }) {
  return (
      <SessionProvider value={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    appProps.pageProps.session = await getSession()
    return { ...appProps}
}


export default MyApp
