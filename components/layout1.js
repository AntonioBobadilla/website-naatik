import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout1 = ( {children}) => {
    return ( 

        <section>
            <Navbar />
                {children}
            <Footer />
        </section>
     );
}
 
export default Layout1;