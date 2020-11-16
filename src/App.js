import './App.css';
import AboutUs from './Componants/AboutUs/AboutUs';
import Banner from './Componants/Banner/Banner';
import ChooseUs from './Componants/ChooseUS/ChooseUs';
import NavBar from './Componants/NavBar/NavBar';
import Sarvice from './Componants/Sarvice/Sarvice';
import TrainingProgram from './Componants/TrainingPrograms/TrainingProgram';

function App() {
  return (
   <div className = "container">
      <Banner></Banner>
    <Sarvice></Sarvice>
    <AboutUs></AboutUs>
    <TrainingProgram></TrainingProgram>
    <ChooseUs></ChooseUs>
   </div>
  );
}

export default App;
