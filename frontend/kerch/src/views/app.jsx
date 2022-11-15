import '../assets/css/app.css';
import { Outlet, Link } from "react-router-dom";
import Navbar from '../components/navbar'
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
