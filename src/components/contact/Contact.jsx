import { React, useState } from "react"
import contact from "../../assets/images/contact.png"
import "./contact.css"

const Contact = ({ theme, lang, screen }) => {
    const [messageBody, setMessageBody] = useState();

    const handleInputChange = (e) => {
        setMessageBody({
            ...messageBody, [e.target.name]: e.target.value
        })
    }

    const sendMessage = (e) => {
        e.preventDefault();
		e.target.reset();
		let response = fetch(
			"http://localhost:8000/pbE4HxorpVi2wTDUm7EL1CXwmAaEfButHOosdjfosa9H/contact-us-list/",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},              
				body: JSON.stringify(messageBody),
			}
		).then(response => console.log(response.status));
    }

    return (
        <div className="contact container">
            <h2 className="title">Contact Us</h2>
            <p className="contact text">Start your project with Brandit</p>
            <p className="contact text">Send us a message today to get started.</p>
            <div className={`form-container ${theme}`}>
                <div className="form-box">
                    <form className="form" onSubmit={sendMessage}>
                        <input type="text" placeholder="Name" name="name" onChange={handleInputChange} />
                        <input type="email" placeholder="Email" name="email" onChange={handleInputChange} />
                        <input
                            type="text"
                            placeholder="Message"
                            className="message"
                            name="message"
                            onChange={handleInputChange}
                        />
                        <button className="form-button">Send Message</button>
                    </form>
                </div>
                <div className="image-box">
                    <img src={contact} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact
