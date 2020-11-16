import './App.css';
import AboutUs from './Componants/AboutUs/AboutUs';
import Banner from './Componants/Banner/Banner';
import ChooseUs from './Componants/ChooseUS/ChooseUs';
import Footer from './Componants/Footer/Footer';
import Sarvice from './Componants/Sarvice/Sarvice';
import TrainingProgram from './Componants/TrainingPrograms/TrainingProgram';

function App() {
  return (
    <div className="container">
      <Banner></Banner>
      <Sarvice></Sarvice>
      <AboutUs></AboutUs>
      <TrainingProgram></TrainingProgram>
      <ChooseUs></ChooseUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
