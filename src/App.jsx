import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./components/views/Home.jsx";
import Modules from "./components/views/Modules.jsx";
import Students from "./components/views/Students.jsx";

function App() {

  const loggedInUser = "Hunter";

  return (
    <BrowserRouter>
      <Layout userName={loggedInUser}>
        <Routes> {/* anything in here will be displayed based on the current route */}
            <Route path = "/" element = {<Home />} />
            <Route path = "/modules" element = {<Modules />} />
            <Route path = "/students" element = {<Students />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
