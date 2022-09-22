import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  return(
    <>

     <ParallaxProvider>
            {/*<AppRoutes /> */}
            <Component {...pageProps} />
      </ParallaxProvider> 
      

    </>

  );
}

export default MyApp
