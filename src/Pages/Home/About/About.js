import React, { useEffect } from 'react';
import { Badge } from 'react-bootstrap';
import Progress from '../../../Components/Progress';
import { skillInfo } from '../../../Data/skillInfo';
import { scrollTo } from '../../../tools/scroll';


const About = () => {

    useEffect(() => {
        scrollTo(10, 10);
    }, [])

    return (
        <section className="my-5" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-5" > <h3 className="text-center" ><Badge variant="danger" pill >About us</Badge></h3> </div>
                    <div className="col-12 mb-5" >
                        <h1 className="text-center mt-3" >We Are Professioanal <br />Painting Services</h1>
                    </div>
                    {
                        skillInfo.map(each => <Progress key={each.name} perchantage={each} ></Progress>)
                    }
                </div>
            </div>
        </section>
    );
};

export default About;