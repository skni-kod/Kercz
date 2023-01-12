import { Outlet} from "react-router-dom";
import Navbar from '../components/navbar'
import '../assets/css/app.css';

import Footer from '../components/footer'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
        <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
