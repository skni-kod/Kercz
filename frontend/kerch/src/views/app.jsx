import '../assets/css/App.css';
import { Outlet, Link } from "react-router-dom";
App = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
