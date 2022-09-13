import React from "react"
import about from "../../assets/images/about.png"
import about_mobile from "../../assets/images/about_mobile.png"
import "./about.css"

const About = ({theme, lang, screen}) => {
    const widthCondition = screen >= 600
    return (
        <div className="about container">
           {screen <= 600 &&  <h2 className="about title">About</h2>} 
            <div className="text-box">
                {widthCondition && <h2 className="about title">About</h2>}
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Natoque vel pellentesque nulla mauris et vitae ultricies
                    lorem. Dignissim pulvinar auctor vel aenean ornare diam
                    vulputate. Amet purus nulla mi consequat libero augue
                    aliquet id diam. Leo, nisi faucibus maecenas facilisis.
                    Mauris venenatis augue a semper. Dui et massa tellus in
                    viverra in lorem elementum, sed. Suspendisse ut dolor et
                    fermentum consectetur. Lectus eget bibendum viverra arcu,
                    sit duis ultrices. Sit ultricies nulla dictumst vestibulum
                    at id. Tellus ut viverra massa amet habitasse arcu, sapien
                    aliquam.
                </p>
            </div>
            <div className="image-box">
                {widthCondition ? 
                <img src={about} alt="about_image" className="about-image"/>
                :
                <img src={about_mobile} alt="about_image" className="about-image"/>
                }
            </div>
        </div>
    )
}

export default About
