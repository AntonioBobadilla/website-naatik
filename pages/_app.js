import Layout1 from '../components/layout1';
import Layout2 from '../components/layout2';
import '../styles/globals.css'

import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

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
