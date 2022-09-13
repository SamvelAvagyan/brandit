import {React, useState, useEffect} from "react"
import "./portfolioinfo.css"
import project_image from "../../assets/images/project-image.png"
import design1 from "../../assets/images/design1.png"
import design2 from "../../assets/images/design2.png"
import design3 from "../../assets/images/design3.png"
import design4 from "../../assets/images/design4.png"
import design5 from "../../assets/images/design5.png"
import portfolio1 from "../../assets/images/portfolio1.png"
import portfolio2 from "../../assets/images/portfolio2.png"
import portfolio3 from "../../assets/images/portfolio3.png"
import portfolio4 from "../../assets/images/portfolio6.png"
import similiar1 from "../../assets/images/similiar1.png"
import similiar2 from "../../assets/images/similiar2.png"
import similiar3 from "../../assets/images/similiar3.png"
import similiar4 from "../../assets/images/similiar4.png"
import { useLocation } from "react-router-dom";

const PortfolioInfo = () => {
    const location = useLocation({});
	const { title } = location.state;
    const [project, setProject] = useState();
    const [projects, setProjects] = useState();
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        getProjectsByCategory();        
        getProject();
	}, []);

    async function getProject() {
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
        console.log(obj)

        for(let i = 0; i < obj.length; i++){
            if(obj[i].title === title){
                setProject(obj[i]);
            }
        }
	}

    async function getProjectsByCategory(){
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
        console.log(obj)

        for(let i = 0; i < obj.length; i++){
            console.log(2)
            if(obj[i].active && obj[i].project_type === project?.project_type)
            {
                c[k] = obj[i];
                k++;
                console.log("1")
            }
        }

		setProjects(c);
    }

    return (
        <div className="portfolioinfo container">
            <h2 className="title">{title}</h2>
            <img src={project?.info_image} alt="" className="portfolio-main-image"/>
            <div className="portfolio-info-part">
                <div className="info-part-items">
                    <span className="info-title">Client</span>
                    <h4 className="info-text">{project?.title}</h4>
                </div>
                <div className="info-part-items center">
                    <span className="info-title">Designer</span>
                    <h4 className="info-text">{project?.designer}</h4>
                </div>
                <div className="info-part-items center">
                    <span className="info-title">Year</span>
                    <h4 className="info-text">{project?.year}</h4>
                </div>
                <div className="info-part-items end">
                    <span className="info-title">Category</span>
                    <h4 className="info-text">{project?.project_type}</h4>
                </div>
            </div>
            <div className="content-container">
                <h3 className="content-title">Brief</h3>
                <p className="content-text">
                    {project?.brief}
                </p>
            </div>

            <div className="design-container">
                <h3 className="content-title">Design</h3>
                <div className="design-image-container">
                    {project?.project_design?.map((design, index) => (
                        (index < 4 && design.active) ? (
                        <div className="design-item">
                            <img src={design.image} alt="" />
                        </div>
                        ) : (
                            <></>
                        )
                    ))}
                    {/* <div className="design-item">
                        <img src={design1} alt="" />
                    </div>
                    <div className="design-item">
                        <img src={design2} alt="" />
                    </div>
                    <div className="design-item">
                        <img src={design3} alt="" />
                    </div>
                    <div className="design-item">
                        <img src={design4} alt="" />
                    </div>
                    <div className="design-item last">
                        <img src={design5} alt="" />
                    </div> */}
                </div>
            </div>
            <div className="similiar-container">
                <h3 className="content-title">Similiar Project</h3>
                <div className="similiar-image-container">
                    {projects?.map((p, index) => (
                        (index <= 3) && (
                            <div className="similiar-item">
                                <img src={p.div_image} alt="" />
                            </div>
                        )
                    ))}
                    {/* <div className="similiar-item">
                        <img src={similiar1} alt="" />
                    </div>
                    <div className="similiar-item">
                        <img src={similiar2} alt="" />
                    </div>
                    <div className="similiar-item">
                        <img src={similiar3} alt="" />
                    </div>
                    <div className="similiar-item">
                        <img src={similiar4} alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default PortfolioInfo
