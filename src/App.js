import Navbar from './component/Structure/Navbar';
import Info from './component/Structure/Info';
import ExplorePlatforms from './component/Structure/ExplorePlatforms';
import ContactForm from './component/Structure/ContactForm';
import './App.css';
import FeedbackComponent from './component/Structure/FeedbackComponent';
import Footer from './component/Structure/Footer';
// import ToolFeatures from './component/Structure/ToolFeatures';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Info/>
      <ExplorePlatforms/>
      <ContactForm/>
      <FeedbackComponent/>
      {/* <ToolFeatures/>z */}
      <Footer/>
    </div>
  );
}

export default App;
