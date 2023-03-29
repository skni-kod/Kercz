import '../assets/css/App.css';
import { Outlet, Link } from "react-router-dom";
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const App = () => {
  return (
    <div className="App">
      <Navbar />
        <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;