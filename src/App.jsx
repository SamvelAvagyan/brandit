import React, { useState, useEffect } from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom"
import Home from "./components/home/Home"
import Navbar from "./common/navbar/Navbar"
import Footer from "./common/footer/Footer"
import Portfolio from "./components/portfolio/Portfolio"
import About from "./components/about/About"
import Service from "./components/service/Service"
import Contact from "./components/contact/Contact"
import Start from "./components/start/Start"
import PortfolioInfo from "./components/portfolio-info-page/PortfolioInfo"

const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.screen.width)
    useEffect(() => {
        window.onresize = () => {
            setWindowWidth(window.screen.width)
        }
    }, [window.screen.width])

    const [theme, setTheme] = useState("dark")
    const [lang, setLang] = useState("En")
    return (
        <Router>
            <div className={`app ${theme}`}>
                <Navbar
                    theme={theme}
                    setTheme={setTheme}
                    lang={lang}
                    setLang={setLang}
                    screen={windowWidth}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                theme={theme}
                                lang={lang}
                                screen={windowWidth}
                            />
                        }></Route>
                    <Route
                        path="/portfolio"
                        element={
                            <Portfolio
                                theme={theme}
                                lang={lang}
                                screen={windowWidth}
                            />
                        }></Route>
                    <Route
                        path="/about"
                        element={
                            <About
                                theme={theme}
                                lang={lang}
                                screen={windowWidth}
                            />
                        }></Route>
                    <Route
                        path="/service"
                        element={
                            <Service
                                theme={theme}
                                lang={lang}
                                screen={windowWidth}
                            />
                        }></Route>
                    <Route
                        path="/contact"
                        element={
                            <Contact
                                theme={theme}
                                lang={lang}
                                screen={windowWidth}
                            />
                        }></Route>
                    <Route
                        path="/start-a-project"
                        element={
                            <Start
                                theme={theme}
                                lang={lang}
                                screen={windowWidth}
                            />
                        }></Route>
                    <Route
                        path="/portfolio-info"
                        element={
                            <PortfolioInfo
                                theme={theme}
                                lang={lang}
                                screen={windowWidth}
                            />
                        }></Route>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
            <Footer theme={theme} lang={lang} />
        </Router>
    )
}

export default App
