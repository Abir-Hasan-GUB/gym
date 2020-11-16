import React from 'react';
import about from '../Images/aboutUs.jpg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6 aboutUs">
                    <div className="aboutLeft">
                        <img src={about} alt=""/>
                    </div>
                </div>
                <div className="col-md-6 aboutLeft">
                    <h1>About Us</h1>
                    <h2 className = "ab-text-1 pt-3">We are here to dream</h2>
                    <h2 className = "ab-text-2">Our team is here surve you </h2>
                    <p className ="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas voluptatem veritatis nemo exercitationem hic non quos quod rem dolorem, incidunt earum a laborum qui delectus veniam voluptates architecto aliquid, aliquam dicta expedita odit vero! Quas odio veniam blanditiis maxime rem dignissimos perferendis minus quae. Corporis modi repellendus nesciunt esse?</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;