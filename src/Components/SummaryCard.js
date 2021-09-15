import React from 'react';
import { Card } from 'react-bootstrap';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const SummaryCard = ({ info }) => {
    return (
        <div className="d-flex justify-content-center mb-5 mx-3">
            <Card className={`shadow`} style={{ width: '15rem' }}>
                <Card.Body>
                    <div className="d-flex align-items-center" >
                        <div className="col-6 px-0" >
                            <b>{info.name + ' :  '}  </b> <h1 className={`text-${info.color}`} >{info.value}</h1>
                        </div>
                        <div className="col-7" >
                            <CircularProgressbar
                                styles={buildStyles({
                                    pathColor: info.pathColor,
                                    textColor: info.pathColor
                                })} value={info.perchant} text={`${info.perchant}%`} />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SummaryCard;