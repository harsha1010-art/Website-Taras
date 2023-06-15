import About from './About';
import './App.css';
import Clients from './Clients';
import Data from './Data';
import Service from './Service';
import Team from './Team';
import Team2 from './Team2';
import Team3 from './Team3';
import Mainpg from './mainpg';
import Navbar from './navigation';
import Project from './projcts';
import './Contact.css';
import Contact from './Contact';
import Footer from './Footer';

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
      <Team />
      <Team2 />
      <Team3 />
      <Contact />
      <Footer />




    </div>
  );
}

export default App;
