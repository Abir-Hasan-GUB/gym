import React from 'react';
import './TrainingProgram.css';
import training1 from '../Images/trainin1.png';
import training2 from '../Images/training2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const arrow = <FontAwesomeIcon icon={faArrowRight} />
{/* <i class="fas fa-arrow-right"></i> */}


const TrainingProgram = () => {
    return (
        <div>
            <div className="title">
                <h1>Training <span>Programs</span> </h1>
            </div>
        <div className="row ">
            <div className="col-md-6 aboutUs">
                <div className="aboutLeft trainigLeft">
                    <img src={training1} alt=""/>
                    <div className="trainingFooter1">
                    <a href="#"><h3>Yioga Training session <span className="arrow">{arrow}</span> </h3></a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 aboutLeft">
            <div className="aboutLeft aboutRight trainingRight">
                    <img src={training2} alt=""/>
                    <div className="trainingFooter2">
                        <a href="#"><h3>Cardio Training session <span className="arrow">{arrow}</span></h3></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default TrainingProgram;