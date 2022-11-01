import Footer from "./Footer";
import Navbar2 from "./Navbar2";

const Layout2 = ( {children}) => {
    return ( 

        <section>
            <Navbar2 />
                {children}
            <Footer />
        </section>
     );
}
 
export default Layout2;