import React from 'react';
import './Sarvice.css';
import sarvice1 from '../Images/sarviceImg1.png';
import sarvice2 from '../Images/sarviceImg2.png';
import sarvice3 from '../Images/sarviceImage3.png';


const Sarvice = () => {
    return (
        <div className="container sarvice">
            <div class="card-deck">
  <div class="card sarvice1">
    <div className="overlay d-flex align-items-center justify-content-center">
        <div className="overlayInside">
        <div className="sarviceImg">
            <img src={sarvice3} alt=""/>
            <h1>Progression</h1>
            <p className = "sarviceDet">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat error tenetur sunt deleniti animi maiores!</p>
        </div>
        </div>
    </div>

  </div>

  <div class="card sarvice2">
   <div className="overlay d-flex align-items-center">
       <div className="overlayInside">
       <img src={sarvice1} alt=""/>
        <h1>Workout</h1>
        <p className = "sarviceDet">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat error tenetur sunt deleniti animi maiores!</p>
       </div>
   </div>
  </div>

  <div class="card sarvice3">
    <div className="overlay d-flex align-items-center justify-content-center">
        <div className="overlayInside">
        <img src={sarvice2} alt=""/>
        <h1>Nutrision</h1>
        <p className = "sarviceDet">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat error tenetur sunt deleniti animi maiores!</p>
        </div>
    </div>
  </div>

</div>
        </div>
    );
};

export default Sarvice;