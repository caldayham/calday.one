import { Fragment, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/headers/Header.jsx";
import ScrollToTop from "./functions/ScrollToTop.jsx";
import AboutPage from "./pages/AboutPage.jsx";

import ConnectPage from "./pages/ConnectPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ThoughtsPage from "./pages/ThoughtsPage.jsx";
import LessonsPage from "./pages/LessonsPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import MorePage from "./pages/MorePage.jsx";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./elements/themes";

const App = () => {

  
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Router>

        <Header setTheme={setTheme} theme={theme}/>

        <Fragment>
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/thoughts" element={<ThoughtsPage />} />
            <Route exact path="/lessons" element={<LessonsPage />} />
            <Route exact path="/projects" element={<ProjectsPage />} />
            <Route exact path="/connect" element={<ConnectPage />} />
            <Route exact path="/more" element={<MorePage />} />
          </Routes>
        </Fragment>

        <Footer />

      </Router>
    </ThemeProvider>
  );
}

export default App;
