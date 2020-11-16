import React from 'react';
import './ChooseUs.css';
import choose1 from '../Images/choose 1.png';
import choose2 from '../Images/choose 2.png';
import choose3 from '../Images/choose 3.png';

const ChooseUs = () => {
    return (
        <div>
            <div className="title">
                <h1><span>Why</span> Choose Us </h1>
            </div>
            <div class="card-deck chooseUs">
                <div class="card">
                    <div className="overlayInside">
                        <img src={choose1} alt="" />
                        <h1 className = "pt-3 pb-3">Nutrision</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat error tenetur sunt deleniti animi maiores!</p>
                    </div>

                </div>

                <div class="card">
                <div className="overlayInside">
                        <img src={choose2} alt="" />
                        <h1 className = "pt-3 pb-3">Nutrision</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat error tenetur sunt deleniti animi maiores!</p>
                    </div>

                </div>
                <div class="card">
                <div className="overlayInside">
                        <img src={choose3} alt="" />
                        <h1 className = "pt-3 pb-3">Nutrision</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat error tenetur sunt deleniti animi maiores!</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChooseUs;