import React from "react"
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram, AiTwotoneMail} from 'react-icons/ai'
import {BsTelegram, BsBehance, BsFillTelephoneFill} from 'react-icons/bs'



const Footer = ({theme, lang}) => {
    return (
        <footer>
        <div className='footer'>
            <div className="icons-container">
                <FaFacebookF className="footer-icons" />
                <AiOutlineInstagram className="footer-icons" />
                <BsBehance className="footer-icons" />
                <BsTelegram className="footer-icons" />
            </div>
            <hr className="hr" />
            <div className="info">
                <span className="about">About Us</span>
                <span className="line">|</span> 
                <span className="contact">Contact Us</span>
            </div>
            <div className="info">
                <span className="mail">info@thebrandit.agency</span>
                <span className="line">|</span>
                <span className="phone">+374 33 97 00 96</span>
            </div>
            <span className="copyright">@2022 Brandit</span>
        </div>
    </footer>
    )
}

export default Footer
