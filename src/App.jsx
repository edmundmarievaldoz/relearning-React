import AuthContext from "./components/auth/AuthContext.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./components/views/Home.jsx";
import Modules from "./components/views/Modules.jsx";
import Students from "./components/views/Students.jsx";
import PageNotFound from "./components/views/PageNotFound.jsx";

function App() {
  
  // Initialisation ---------------
  const loggedInUser = {
    UserID: 820,
    UserFirstname:'Edmund',
    UserUsertype: 1,
};

// State ------------------------------
// Handlers ----------------------------
// View -------------------------------------

  return (
    <AuthContext value={loggedInUser}>
    <BrowserRouter>
      <Layout>
        <Routes> {/* anything in here will be displayed based on the current route */}
            <Route path = "/" element = {<Home />} />
            <Route path = "/modules" element = {<Modules />} />
            <Route path = "/students" element = {<Students />} />
            <Route path = "/*" element = {<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </AuthContext>
  )
}

export default App
