import React from 'react';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../NavBar/NavBar';
{/* <i class="far fa-play-circle"></i> */ }
const icon = <FontAwesomeIcon icon={faPlayCircle} />

const Banner = () => {
    return (
        <div className="container" id="banner">
            <div className="overlay">
                <NavBar></NavBar>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center bannerLeft">
                        <div className="pl-5">
                            <h1 className="bannerTitle mb-5">
                                The best fitness studio in town
                    </h1>
                            <p className="bannerDescription mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores et molestias quo expedita accusamus doloremque odit eos incidunt nostrum dolorum! </p>
                            <button className="btn btn-warning bannerBtn">Join Us</button>
                        </div>
                    </div>
                    <div className="col-md-6 bannerRight">
                        <div className="bannerIcon">
                            <a href="#"><h1>{icon}</h1></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;