import React, { useRef, useEffect, useState } from "react"
import "./navbar.css"
import logo_dark from "../../assets/images/logo_dark.svg"
import logo_light from "../../assets/images/logo_light.svg"
import { BsSun } from "react-icons/bs"
import { GrMoon } from "react-icons/gr"
import { IoIosArrowDown } from "react-icons/io"
import { Link } from "react-router-dom"
const Navbar = ({ theme, setTheme, lang, setLang, screen }) => {
    const handleChangeTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }

    const navbarRef = useRef()
    const mobile_navbarRef = useRef()
    const inputCheck = useRef()

    const [isChecked, setIsChecked] = useState(false)

    const handleNavbarToggle = (e) => {
        if (e.clientY >= 180) {
            navbarRef.current.style.top = -90 + "px"
            navbarRef.current.style.transition = 0.7 + "s"
        } else {
            navbarRef.current.style.top = 0
            navbarRef.current.style.transition = 0.7 + "s"
        }
    }

    const handleScroll = () => {
        if (window.matchMedia("(min-width: 600px)").matches) {
            if (document.documentElement.scrollTop > 600) {
                navbarRef.current.style.top = -90 + "px"
                window.addEventListener("mousemove", handleNavbarToggle)
            } else {
                navbarRef.current.style.top = 0
                window.removeEventListener("mousemove", handleNavbarToggle)
            }
        }
    }
    useEffect(() => {
        document.addEventListener("scroll", handleScroll)

        return () => document.removeEventListener("scroll", handleScroll)
    }, [])

    const bolderFont = (e) => {
        e.target.focus()
    }

    const handleChecked = () => {
        setIsChecked(!isChecked)
    }

    return (
        <>
            {screen >= 600 ? (
                <nav className={`nav ${theme}`} ref={navbarRef}>
                    <div className={`navbar ${theme}`}>
                        <Link to="/">
                            {theme === "light" ? (
                                <img src={logo_light} alt="brandit logo" />
                            ) : (
                                <img src={logo_dark} alt="brandit logo" />
                            )}
                        </Link>
                        <ul className={`navbar__list ${theme}`}>
                            <li>
                                <Link to="/portfolio" onClick={bolderFont}>
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={bolderFont}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/service" onClick={bolderFont}>
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={bolderFont}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <div className="navbar__settings">
                            {theme === "dark" ? (
                                <BsSun onClick={handleChangeTheme} className="theme-icon" />
                            ) : (
                                <GrMoon onClick={handleChangeTheme} className="theme-icon" />
                            )}
                            <svg
                                width="2"
                                height="34"
                                viewBox="0 0 2 34"
                                fill="none"
                                className="vertical-line"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0V34" stroke={theme === "light" ? "black" : "white"} strokeWidth="2" />
                            </svg>
                            <span>{lang}</span>
                            <IoIosArrowDown className="arrow-down" />
                        </div>
                    </div>
                </nav>
            ) : (
                <nav>
                    <div className={`mobile-navbar ${theme}`} ref={mobile_navbarRef}>
                        <div className="nav-container">
                            <input
                                className="checkbox"
                                type="checkbox"
                                name=""
                                id=""
                                ref={inputCheck}
                                onChange={handleChecked}
                                checked={isChecked}
                            />
                            <div className="logo">
                                {isChecked ? (
                                    <>
                                        <svg
                                            width="2"
                                            height="34"
                                            viewBox="0 0 2 34"
                                            fill="none"
                                            className="vertical-line"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1 0V34"
                                                stroke={theme === "light" ? "black" : "white"}
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <span>{lang}</span>
                                        <IoIosArrowDown className="arrow-down" />
                                    </>
                                ) : (
                                    <Link to="/">
                                        {theme === "light" ? (
                                            <img src={logo_light} alt="logo" />
                                        ) : (
                                            <img src={logo_dark} alt="logo" />
                                        )}
                                    </Link>
                                )}
                            </div>
                            <div className="burger-menu">
                                {!isChecked &&
                                    (theme === "dark" ? (
                                        <BsSun onClick={handleChangeTheme} className="theme-icon" />
                                    ) : (
                                        <GrMoon onClick={handleChangeTheme} className="theme-icon" />
                                    ))}
                                <div className={`hamburger-lines ${theme}`}>
                                    <span className="line line1"></span>
                                    <span className="line line2"></span>
                                    <span className="line line3"></span>
                                </div>
                            </div>
                            <div className="menu-items">
                                <li onClick={handleChecked}>
                                    <Link to="/portfolio">Portfolio</Link>
                                </li>
                                <li onClick={handleChecked}>
                                    <Link to="/about">About</Link>
                                </li>
                                <li onClick={handleChecked}>
                                    <Link to="/service">Service</Link>
                                </li>
                                <li onClick={handleChecked}>
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </nav>
            )}
        </>
    )
}

export default Navbar
