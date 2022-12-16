import { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import ScrollToTop from "./functions/ScrollToTop.jsx";

import ContactPage from "./pages/ContactPage.jsx";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
  return (
    <Router>

      <Header/> 

      <Fragment>
        <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
      </Fragment>

      <Footer/>

    </Router>
  );
}

export default App;
