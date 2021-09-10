import React, { useEffect } from 'react';
import { Badge } from 'react-bootstrap';
import ProjectCard from '../../../Components/ProjectCard/ProjectCard';
import { projectList } from '../../../Data/projectData';
import { scrollTo } from '../../../tools/scroll';


const Projects = () => {

    useEffect(() => {
        scrollTo(10, 10);
    }, [])

    return (
        <section className="mt-5" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-5" > <h3 className="text-center" ><Badge variant="danger" pill >Projects</Badge></h3> </div>
                    <div className="col-12 mb-5" >
                        <h1 className="text-center mt-3" >Take A Look <br /> Our Latest Project</h1>
                    </div>
                    {
                        projectList.map(each => <ProjectCard projectInfo={each} ></ProjectCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;