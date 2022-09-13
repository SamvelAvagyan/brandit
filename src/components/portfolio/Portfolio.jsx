import React, { useState, useLayoutEffect } from "react"
import { Link } from "react-router-dom"
import "./portfolio.css"
import portfolio1 from "../../assets/images/portfolio1.png"
import portfolio2 from "../../assets/images/portfolio2.png"
import portfolio3 from "../../assets/images/portfolio3.png"
import portfolio4 from "../../assets/images/portfolio4.png"
import portfolio5 from "../../assets/images/portfolio5.png"
import portfolio6 from "../../assets/images/portfolio6.png"
import { categoriesDatas } from "./datas/categoriesDatas"

const Portfolio = ({ theme, lang, screen }) => {
    const [projects, setProjects] = useState();
    const [activeProjects, setActiveProjects] = useState();
    let actives = [];

    useLayoutEffect(() => {
		let isMounted = true;

		if (isMounted) {
            getProjects();
		}

		return () => {
			isMounted = false;
		};
	}, []);

    async function getProjects(){
        let response = await fetch(
			"http://localhost:8000/pbE4HxorpVi2wTDUm7EL1CXwmAaEfButHOosdjfosa9H/portfolio-list/"
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

		setProjects(c);
        setActiveProjects(c);

        // for(let i = 0; i < obj.length; i++){
        //     if(obj[i].active)
        //     {
        //         c[k] = obj[i];
        //         k++;
        //     }
        // }

        // setAllProjects(c);
    }

    const handleUnderLine = (e) => {
        categoriesDatas.forEach((item) => {
            e.target.innerText == item.title
                ? e.target.classList.add("active")
                : e.target.classList.remove("active")
        })
    }

    const onCategoryClick = async (e) => {
        console.log(projects);
        
        if(e.target.title !== "All"){
            // let c = [];
            // let k = 0;
            // console.log(e.target.title);
            // for(let i = 0; i < projects.length; i++){
            //     if(projects[i].project_type === e.target.title){
            //         c[k] = projects[i];
            //         k++;
            //     }
            // }
            // setProjects(c);  

            let j = 0;
		    for (let i = 0; i < projects.length; i++) {
			    if (projects[i]?.project_type == e.target.title) {
				    actives[j] = projects[i];
				    j++;
			    }
		    }

		    setActiveProjects(actives);
		    console.log(activeProjects);
        }else{
            setActiveProjects(projects);
        }

        
    }

    return (
        <>
            <div className="portfolio container">
                <h2 className="title">Portfolio</h2>
                <p className="text">Some of the projects we have worked on</p>
                <div className="categories-wrapper">
                    <ul className="categories-list">
                        {categoriesDatas.map((item) => (
                            <li key={item.id} onClick={onCategoryClick} title={item.title}>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="images-wrapper">
                    <div className="upper-col">
                        {activeProjects?.map((project, index) =>(
                        (index < 3) ? (<div className="portfolio-item">
                            <Link to="/portfolio-info" state={{title: project?.title}}>
                                <img
                                    src={project.div_image}
                                    alt="portfolio_image"
                                    className="portfolio-images"
                                />
                                <div className="title-box">
                                    <h2 className="image title">
                                        {project.title}
                                    </h2>
                                </div>
                            </Link>
                        </div>
                        ) : (
                            <></>
                        )
                        ))}
                    </div>

                        {activeProjects?.map((project, index) => (
                            (index == 3) ? (
                                <div className="portfolio-item middle">
                                <Link to="/portfolio-info" state={{title: project?.title}}>
                                <img
                                    src={project.div_image}
                                    alt="portfolio_image"
                                    className="portfolio-images"
                                />
                                <div className="title-box">
                                    <h2 className="image title">
                                        {project.title}
                                    </h2>
                                </div>
                            </Link>
                            </div>
                            ) :(
                                <></>
                            )
                        ))}

                        <div className="lower-col">
                            {activeProjects?.map((project, index) =>(
                                (index > 3 && index <= 5) ? (
                                 <div className="portfolio-item">
                                 <Link to="/portfolio-info" state={{title: project?.title}}>
                                     <img
                                         src={project.div_image}
                                         alt="portfolio_image"
                                         className="portfolio-images"
                                     />
                                     <div className="title-box">
                                         <h2 className="image title">
                                             {project.title}
                                         </h2>
                                     </div>
                                 </Link>
                             </div>
                                ) : (
                                    <></>
                                )
                            ))}
                        </div>
                        {/* <div className="portfolio-item">
                            <Link to="/portfolio-info">
                                <img
                                    src={portfolio2}
                                    alt="portfolio_image"
                                    className="portfolio-images"
                                />
                                <div className="title-box">
                                    <h2 className="image title">
                                        Dolice & Garbana
                                    </h2>
                                </div>
                            </Link>
                        </div>

                        <div className="portfolio-item">
                            <Link to="/portfolio-info">
                                <img
                                    src={portfolio3}
                                    alt="portfolio_image"
                                    className="portfolio-images"
                                />
                                <div className="title-box">
                                    <h2 className="image title">
                                        Dolice & Garbana
                                    </h2>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="portfolio-item middle">
                        <Link to="/portfolio-info">
                            <img
                                src={portfolio4}
                                alt="portfolio_image"
                                className="portfolio-images"
                            />
                            <div className="title-box">
                                <h2 className="image title">
                                    Dolice & Garbana
                                </h2>
                            </div>
                        </Link>
                    </div>

                    <div className="lower-col">
                        <div className="portfolio-item">
                            <Link to="/portfolio-info">
                                <img
                                    src={portfolio5}
                                    alt="portfolio_image"
                                    className="portfolio-images"
                                />
                                <div className="title-box">
                                    <h2 className="image title">
                                        Dolice & Garbana
                                    </h2>
                                </div>
                            </Link>
                        </div>

                        <div className="portfolio-item">
                            <Link to="/portfolio-info">
                                <img
                                    src={portfolio6}
                                    alt="portfolio_image"
                                    className="portfolio-images"
                                />
                                <div className="title-box">
                                    <h2 className="image title">
                                        Dolice & Garbana
                                    </h2>
                                </div>
                            </Link>
                        </div> */}
                    </div>
                </div>
                {/* <div className="grid-images-wrapper">
                    <div className="portfolio-item">
                        <Link to="/portfolio-info">
                            <img
                                src={portfolio1}
                                alt="portfolio_image"
                                className="portfolio-images"
                            />
                            <div className="title-box">
                                <h2 className="image title">
                                    Dolice & Garbana
                                </h2>
                            </div>
                        </Link>
                    </div>
                    <div className="portfolio-item">
                        <Link to="/portfolio-info">
                            <img
                                src={portfolio2}
                                alt="portfolio_image"
                                className="portfolio-images"
                            />
                            <div className="title-box">
                                <h2 className="image title">
                                    Dolice & Garbana
                                </h2>
                            </div>
                        </Link>
                    </div>
                    <div className="portfolio-item">
                        <Link to="/portfolio-info">
                            <img
                                src={portfolio3}
                                alt="portfolio_image"
                                className="portfolio-images"
                            />
                            <div className="title-box">
                                <h2 className="image title">
                                    Dolice & Garbana
                                </h2>
                            </div>
                        </Link>
                    </div>
                    <div className="portfolio-item middle">
                        <Link to="/portfolio-info">
                            <img
                                src={portfolio4}
                                alt="portfolio_image"
                                className="portfolio-images"
                            />
                            <div className="title-box">
                                <h2 className="image title">
                                    Dolice & Garbana
                                </h2>
                            </div>
                        </Link>
                    </div>
                    <div className="portfolio-item item5" >
                        <Link to="/portfolio-info">
                            <img
                                src={portfolio5}
                                alt="portfolio_image"
                                className="portfolio-images"
                            />
                            <div className="title-box">
                                <h2 className="image title">
                                    Dolice & Garbana
                                </h2>
                            </div>
                        </Link>
                    </div>
                    <div className="portfolio-item item6">
                        <Link to="/portfolio-info">
                            <img
                                src={portfolio6}
                                alt="portfolio_image"
                                className="portfolio-images"
                            />
                            <div className="title-box">
                                <h2 className="image title">
                                    Dolice & Garbana
                                </h2>
                            </div>
                        </Link>
                    </div> 
                </div>*/}
        </>
    )
}

export default Portfolio
