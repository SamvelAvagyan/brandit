import React from "react"
import "./service.css"
const Service = ({theme}) => {
    return (
        <>
            <div className={`service container ${theme}`}>
                <h2 className="title">Services</h2>
                <p className="text">
                    We specialize in transforming your business ideas into
                    reality
                </p>
                <div className="service-items-container">
                    <div className="service-upper-col">
                        <div className="service-item">
                            <h3 className="service-title">
                                Web Design & Integration
                            </h3>
                            <p className="service-text">
                                From mockup to functioning site, we can take
                                care of every step of the website creation
                                process.
                            </p>
                        </div>
                        <div className="service-item">
                            <h3 className="service-title">
                                SOCIAL MEDIA MARKETING
                            </h3>
                            <p className="service-text">
                                We'll take care of all your social media design
                                needs. Logo's, Banners, giveaway graphics and
                                more!
                            </p>
                        </div>
                    </div>
                    <div className="service-item lower">
                        <h3 className="service-title">
                            Animation & Promo Videos
                        </h3>
                        <p className="service-text">
                            {/* Want to showcase your project? Let us create an on
                            brand masterpiece that captures your holders
                            attention. */}
                            From the development of a positioning strategy to
                            the stage of developing a visual image (name, logo,
                            corporate identity and other corporate components).
                            The main goal is to create a complete brand image
                            and give it a competitive advantage.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
