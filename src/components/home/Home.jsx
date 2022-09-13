import React, { useRef, useLayoutEffect } from "react"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./home.css"
import hero1 from "../../assets/images/hero1.png"
import hero2 from "../../assets/images/hero2.png"
import hero3 from "../../assets/images/hero3.png"
import projects1 from "../../assets/images/projects1.png"
import projects2 from "../../assets/images/projects2.png"
import projects3 from "../../assets/images/projects3.png"
import projects4 from "../../assets/images/projects4.png"
import projects5 from "../../assets/images/projects5.png"
import projects6 from "../../assets/images/projects6.png"
import projects7 from "../../assets/images/projects7.png"
import projects8 from "../../assets/images/projects8.png"
import projects9 from "../../assets/images/projects9.png"
import projects10 from "../../assets/images/projects10.png"
import projects11 from "../../assets/images/projects11.png"
import projects12 from "../../assets/images/projects12.png"
import apostrof from "../../assets/images/apostrof.svg"
import apostrof2 from "../../assets/images/apostrof2.svg"
import form_image from "../../assets/images/form-image.png"
import left_arrow from "../../assets/images/left-arrow.svg"
import right_arrow from "../../assets/images/right-arrow.svg"
import button_arrow from "../../assets/images/button-arrow.svg"

import { useState } from "react"
import {
    commentObjects1,
    commentObjects2,
    commentObjects3
} from "./datas/commentDatas"
import {
    valuesObject1,
    valuesObject2,
    valuesObject3,
    valuesObject4,
    valuesObject5,
    valuesObject6
} from "./datas/valuesDatas"
import light_right_arrow from "../../assets/images/light_right-arrow.svg"
import light_left_arrow from "../../assets/images/light_left-arrow.svg"
import dot from "../../assets/images/dot.svg"
import dot_selected from "../../assets/images/dot-selected.svg"
import values_icon1 from "../../assets/images/icon1.png"
import values_icon2 from "../../assets/images/icon2.png"
import values_icon3 from "../../assets/images/icon3.png"
import values_icon4 from "../../assets/images/icon4.png"
import values_icon5 from "../../assets/images/icon5.png"
import values_icon6 from "../../assets/images/icon6.png"

const Home = ({ theme, lang, screen }) => {
    const commentDatas = [commentObjects1, commentObjects2, commentObjects3]
    const valuesDatas = [
        valuesObject1,
        valuesObject2,
        valuesObject3,
        valuesObject4,
        valuesObject5,
        valuesObject6
    ]

    const [currentDotDatas, setCurrentDotDatas] = useState({
        title: "Brand identity and logo design",
        text: "The first step for high quality brand is to have quality logo and design!",
        src: hero1
    })
    const [currentCommentDatas, setCurrentCommentDatas] =
        useState(commentObjects1)

    const widthCondition = screen >= 600

    const heroObject = [
        {
            id: 1,
            title: "Brand identity and logo design",
            text: "The first step for high quality brand is to have quality logo and design!",
            src: hero1
        },
        {
            id: 2,
            title: "Digital Marketing",
            text: "We will take care of your marketing. Get a fame and new clients with us!",
            src: hero2
        },
        {
            id: 3,
            title: "Packaging design",
            text: "Have a unique packaging. Be the best in the market with us!",
            src: hero3
        }
    ]

    const serviceRef = useRef()

    const [currentValuesDatas, setCurrentValuesDatas] = useState(valuesObject1)
    const [ourWorks, setOurWorks] = useState();
    const [clients, setClients] = useState();
    const [messageBody, setMessageBody] = useState();

    useLayoutEffect(() => {
		let isMounted = true;

		if (isMounted) {
            getOurWorks();
            getClients();
		}

		return () => {
			isMounted = false;
		};
	}, []);

    async function getOurWorks() {
		let response = await fetch(
			"http://localhost:8000/pbE4HxorpVi2wTDUm7EL1CXwmAaEfButHOosdjfosa9H/our-work-list/"
		, {
			headers : { 
			  'Content-Type': 'application/json',
			  'Accept': 'application/json'
			},
            method : "GET",
            mode: 'cors',
	  
		  });
		let obj = await response.json();

        let c = [];
        let k = 0;
        for(let i = 0; i < obj.length; i++){
            if(obj[i].active)
            {
                c[k] = obj[i];
                k++;
            }
        }

		setOurWorks(c);
	}

    async function getClients() {
		let response = await fetch(
			"http://localhost:8000/pbE4HxorpVi2wTDUm7EL1CXwmAaEfButHOosdjfosa9H/what-our-clients-say-list/"
		, {
			headers : { 
			  'Content-Type': 'application/json',
			  'Accept': 'application/json'
			},
            method : "GET",
            mode: 'cors',
	  
		  });
		let obj = await response.json();
        let c = [];
        let k = 0;

        for(let i = 0; i < obj.length; i++){
            if(obj[i].active){
                c[k] = obj[i];
                k++;
            }
        }

		setClients(c);
	}

    const leftArrowHandler = (initialDatas, currentDatas, setCurrentDatas) => {
        for (let i = 0; i < initialDatas.length; i++) {
            if (initialDatas[i] == currentDatas) {
                if (i == 0) {
                    setCurrentDatas(initialDatas[initialDatas.length - 1])
                } else {
                    setCurrentDatas(initialDatas[i - 1])
                }
            }
        }
    }

    const rightArrowHandler = (initialDatas, currentDatas, setCurrentDatas) => {
        for (let i = 0; i < initialDatas.length; i++) {
            if (initialDatas[i] == currentDatas) {
                if (i == initialDatas.length - 1) {
                    setCurrentDatas(initialDatas[0])
                } else {
                    setCurrentDatas(initialDatas[i + 1])
                }
            }
        }
    }

    const settings = {
        dots: true,
        fade: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (slider, i) => {
            return (
                <div className="dot">
                    <div className="inner-dot"></div>
                </div>
            )
        }
    }
    const handleInputChange = (e) => {
        setMessageBody({
            ...messageBody, [e.target.name]: e.target.value
        })

        console.log(e.target.name + ": " + e.target.value);
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
        <>
            <section className="header-section">
                <Slider {...settings}>
                    {heroObject.map((item) => (
                        <div className="wrapper">
                            <div className="header container" key={item.id}>
                                <div className="content-box">
                                    <h2 className="content-box__title">
                                        {item.title}
                                    </h2>
                                    <p className="content-box__text">
                                        {item.text}
                                    </p>
                                    <span className="content-box__text">
                                        Let's Get Started
                                    </span>
                                    <Link to="/start-a-project">
                                        <button className="button">
                                            start a project
                                        </button>
                                    </Link>
                                </div>
                                <div className="image-container" style={{backgroundImage: `url(${item.src})`}}>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
            <section className="service-section">
                <div className="section container">
                    <h2 className="title">Services</h2>
                    <p className="text">Transforming your ideas into reality</p>
                    <div className="items-container">
                        <div className="item first">
                            <span className="service-title">Design</span>
                        </div>
                        <div className="item second">
                            <span className="service-title">
                                Digital <br />
                                Marketing
                            </span>
                        </div>
                        <div className="item third">
                            <span className="service-title">Web</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="works-section">
                <div className="section container">
                    <h2 className="title">Our Works</h2>
                    <p className="text">
                        Some of the projects we have worked on
                    </p>
                    <div className="slide">
                        <div className="row upper">
                            {ourWorks?.map((work, index) => (
                                (index <= 5) && (
                                <img src={work.image} alt="" />
                                )
                            ))}
                            {/* <img src={projects1} alt="" />
                            <img src={projects2} alt="" />
                            <img src={projects3} alt="" />
                            <img src={projects4} alt="" />
                            <img src={projects5} alt="" />
                            <img src={projects6} alt="" /> */}
                        </div>
                        <div className="row middle">
                            {ourWorks?.map((work, index) => (
                                (index > 5 && index <= 11) && (
                                <img src={work.image} alt="" />
                                )
                            ))}
                        </div>
                        <div className="row lower">
                            {ourWorks?.map((work, index) => (
                                (index > 11 && index <= 17) && (
                                <img src={work.image} alt="" />
                                )
                            ))}
                        </div>
                    </div>
                    <button className="button view">
                        view more
                        <img
                            src={button_arrow}
                            className="button-arrow"
                            alt=""
                        />
                    </button>
                </div>
            </section>
            <section className="clients-section">
                <div className="section container">
                    <h2 className="title">What our clients say</h2>
                    <p className="text">
                        This is what our customers say about us. It really
                        <br />
                        matters for us.
                    </p>
                    <div className="items-container">
                        {widthCondition ? (
                            <>
                                {clients?.map((client) => (
                                    <div className="item-client">
                                    <img
                                        src={apostrof}
                                        alt=""
                                        className="apostrof left"
                                    />
                                    <img
                                        src={apostrof2}
                                        alt=""
                                        className="apostrof right"
                                    />
                                    <p className="comment">
                                        {client.description}
                                    </p>

                                    <div className="user-part">
                                        <div className="for-avatar"></div>
                                        <div className="user-info">
                                            <span className="user-name">
                                                {client.username}
                                            </span>
                                            <span className="user-login">
                                                {client.username}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                {/* <div className="item-client">
                                    <img
                                        src={apostrof}
                                        alt=""
                                        className="apostrof left"
                                    />
                                    <img
                                        src={apostrof2}
                                        alt=""
                                        className="apostrof right"
                                    />
                                    <p className="comment">
                                        “I don’t know in real-time where the
                                        money is spent, and I don’t have to lend
                                        out the company’s credit card anymore.
                                        What a releif!”
                                    </p>

                                    <div className="user-part">
                                        <div className="for-avatar"></div>
                                        <div className="user-info">
                                            <span className="user-name">
                                                Denny Hilguston
                                            </span>
                                            <span className="user-login">
                                                @denny_hill
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-client">
                                    <img
                                        src={apostrof}
                                        alt=""
                                        className="apostrof left"
                                    />
                                    <img
                                        src={apostrof2}
                                        alt=""
                                        className="apostrof right"
                                    />
                                    <p className="comment">
                                        “I don’t know in real-time where the
                                        money is spent, and I don’t have to lend
                                        out the company’s credit card anymore.
                                        What a releif!”
                                    </p>

                                    <div className="user-part">
                                        <div className="for-avatar"></div>
                                        <div className="user-info">
                                            <span className="user-name">
                                                Denny Hilguston
                                            </span>
                                            <span className="user-login">
                                                @denny_hill
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-client">
                                    <img
                                        src={apostrof}
                                        alt=""
                                        className="apostrof left"
                                    />
                                    <img
                                        src={apostrof2}
                                        alt=""
                                        className="apostrof right"
                                    />
                                    <p className="comment">
                                        “I don’t know in real-time where the
                                        money is spent, and I don’t have to lend
                                        out the company’s credit card anymore.
                                        What a releif!”
                                    </p>

                                    <div className="user-part">
                                        <div className="for-avatar"></div>
                                        <div className="user-info">
                                            <span className="user-name">
                                                Denny Hilguston
                                            </span>
                                            <span className="user-login">
                                                @denny_hill
                                            </span>
                                        </div>
                                    </div>
                                </div> */}
                            </>
                        ) : (
                            <>
                                <img
                                    src={
                                        theme === "dark"
                                            ? left_arrow
                                            : light_left_arrow
                                    }
                                    alt=""
                                    className="left-arrow"
                                    onClick={() =>
                                        leftArrowHandler(
                                            commentDatas,
                                            currentCommentDatas,
                                            setCurrentCommentDatas
                                        )
                                    }
                                />
                                <img
                                    src={
                                        theme === "dark"
                                            ? right_arrow
                                            : light_right_arrow
                                    }
                                    alt=""
                                    className="right-arrow"
                                    onClick={() =>
                                        rightArrowHandler(
                                            commentDatas,
                                            currentCommentDatas,
                                            setCurrentCommentDatas
                                        )
                                    }
                                />
                                {clients?.map((client) => (
                                    <div className="item-client carousel">
                                    <img
                                        src={apostrof}
                                        alt=""
                                        className="apostrof left"
                                    />
                                    <img
                                        src={apostrof2}
                                        alt=""
                                        className="apostrof right"
                                    />
                                    <p className="comment">
                                        {client.description}
                                    </p>
                                    <div className="user-part">
                                        <div
                                            className="for-avatar"
                                            style={{
                                                background: `url(${client.image}) no-repeat center`,
                                                backgroundSize: "cover"
                                            }}></div>
                                        <div className="user-info">
                                            <span className="user-name">
                                                {client.username}
                                            </span>
                                            <span className="user-login">
                                                {client.username}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                {/* <div className="item-client carousel">
                                    <img
                                        src={apostrof}
                                        alt=""
                                        className="apostrof left"
                                    />
                                    <img
                                        src={apostrof2}
                                        alt=""
                                        className="apostrof right"
                                    />
                                    <p className="comment">
                                        {currentCommentDatas.comment}
                                    </p>
                                    <div className="user-part">
                                        <div
                                            className="for-avatar"
                                            style={{
                                                background: `url(${currentCommentDatas.avatar_img}) no-repeat center`,
                                                backgroundSize: "cover"
                                            }}></div>
                                        <div className="user-info">
                                            <span className="user-name">
                                                {currentCommentDatas.user_name}
                                            </span>
                                            <span className="user-login">
                                                {currentCommentDatas.user_login}
                                            </span>
                                        </div>
                                    </div>
                                </div> */}
                            </>
                        )}
                    </div>
                </div>
            </section>
            <section className="values-section">
                <div className="section container">
                    <h2 className="title">Our Values</h2>

                    <div className="values-container">
                        {widthCondition ? (
                            <>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon1}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">GROWTH</h3>
                                    <p className="values-text">
                                        This is what we will bring to your
                                        business. More fame between your
                                        individual type of businesses. More
                                        clients and which by itself means more
                                        sales. Our clients have experienced it
                                        just after months. Making your business
                                        grow also.
                                    </p>
                                </div>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon2}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">STRATEGY</h3>
                                    <p className="values-text">
                                        With plenty of experience from our work
                                        and in-depth analysis of more advanced
                                        agencies, we process the most effective
                                        method to grow your business in a short
                                        time. Many companies collapse with no
                                        strategy.
                                    </p>
                                </div>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon3}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">
                                        TRANSPARENCY
                                    </h3>
                                    <p className="values-text">
                                        We are open, honest, and straight
                                        forward to our clients. This is how we
                                        gain trust, and this is how we keep our
                                        agency's name clear. In return, we get
                                        the same clear and friendly
                                        relationships. Whatever we do, this is
                                        the most valuable thing for us.
                                    </p>
                                </div>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon4}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">TRUST</h3>
                                    <p className="values-text">
                                        Trust is one of the most meaningful
                                        things in our job. By growing up with
                                        our partners we have gained
                                        irreplaceable things such as experience
                                        and trust. And this gives us the most
                                        value.
                                    </p>
                                </div>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon5}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">UNIQUENESS</h3>
                                    <p className="values-text">
                                        Most of our clients are not the only
                                        ones in their sphere. So we work on
                                        making them unique and creative,
                                        separating them from the gray crowd.
                                        From the plenty of fish, you will notice
                                        at first the one that shines the best
                                        with its uniqueness.
                                    </p>
                                </div>
                                <div className="values-items-container">
                                    <img
                                        src={values_icon6}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">
                                        RESPONSIBILITY
                                    </h3>
                                    <p className="values-text">
                                        Our team consists of professional
                                        specialists who's duty is just to make
                                        our clients pleased. Discipline,
                                        communication and active rest, this is
                                        how our team works on projects. So
                                        easily rely on us and don’t care about
                                        deadlines.
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <img
                                    src={
                                        theme === "dark"
                                            ? left_arrow
                                            : light_left_arrow
                                    }
                                    alt=""
                                    className="left-arrow"
                                    onClick={() =>
                                        leftArrowHandler(
                                            valuesDatas,
                                            currentValuesDatas,
                                            setCurrentValuesDatas
                                        )
                                    }
                                />
                                <img
                                    src={
                                        theme === "dark"
                                            ? right_arrow
                                            : light_right_arrow
                                    }
                                    alt=""
                                    className="right-arrow"
                                    onClick={() =>
                                        rightArrowHandler(
                                            valuesDatas,
                                            currentValuesDatas,
                                            setCurrentValuesDatas
                                        )
                                    }
                                />
                                <div className="values-items-container">
                                    <img
                                        src={currentValuesDatas.icon}
                                        alt=""
                                        className="values-icons"
                                    />
                                    <h3 className="values-title">
                                        {currentValuesDatas.title}
                                    </h3>
                                    <p className="values-text">
                                        {currentValuesDatas.text}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
            <section className="form-section">
                <div className={`form-container ${theme}`}>
                    <div className="form-box">
                        <h2 className="title">
                            Start your project with Brandit
                        </h2>
                        <p className="text">
                            Send us a message today to get started.
                        </p>
                        <form className="form" onSubmit={sendMessage}>
                            <input type="text" name="name" placeholder="Name" onChange={handleInputChange}/>
                            <input type="email" name="email" placeholder="Email" onChange={handleInputChange}/>
                            <input
                                type="text"
                                name="message"
                                placeholder="Message"
                                className="message"
                                onChange={handleInputChange}
                            />
                            <button className="form-button">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="image-box">
                        <img src={form_image} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
