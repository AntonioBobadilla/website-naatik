import Layout1 from '../components/layout1';
import Layout2 from '../components/layout2';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  if (  Component.name === "Home"){
    return (
      <Layout1>
        <Component {...pageProps} />
      </Layout1>
    );
  } else {
    return (
      <Layout2>
        <Component {...pageProps} />
      </Layout2>
    );   
  }


}

export default MyApp
