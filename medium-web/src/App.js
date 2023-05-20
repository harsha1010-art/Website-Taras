import About from './About';
import './App.css';
import Clients from './Clients';
import Data from './Data';
import Service from './Service';
import Team from './Team';
import Team2 from './Team2';
import Mainpg from './mainpg';
import Navbar from './navigation';
import Project from './projcts';

function App() {
  return (
    <div className="main" >
      <Navbar />
      <Mainpg />
      <About />
      <Service />
      <Project />
      <Data />
      <Clients />
      <Team/>
      <Team2/>


    </div>
  );
}

export default App;
