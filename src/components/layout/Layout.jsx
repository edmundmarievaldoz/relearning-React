import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import './Layout.scss';

function Layout ({ children}) {
    return (
           <div className = "Layout">

      <Header />

      <Navbar />

      <main>
        {
           children
        }
      </main>

      <Footer />

    </div>

    );
}

export default Layout;