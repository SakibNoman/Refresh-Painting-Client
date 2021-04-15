import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = ({ projectInfo }) => {
    const { projectImg, projectName, projectLocation } = projectInfo;
    return (
        <div className="col-md-4 d-flex justify-content-center mb-5">
            <Card border="light" className="shadow" style={{ width: '18rem' }}>
                <div className="text-center">
                    <Card.Img variant="top" src={projectImg} />
                </div>
            </Card>
        </div>
    );
};

export default ProjectCard;