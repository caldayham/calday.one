import { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/header/Header.jsx";
import ScrollToTop from "./functions/ScrollToTop.jsx";
import AboutPage from "./pages/AboutPage.jsx";

import ConnectPage from "./pages/ConnectPage.jsx";
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
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/connect" element={<ConnectPage />} />
        </Routes>
      </Fragment>

      <Footer/>

    </Router>
  );
}

export default App;
