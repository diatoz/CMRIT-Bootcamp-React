import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>App Component</h3>
      <div className="nav-links">
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/signup" className="nav-link">
          SignUp
        </Link>
      </div>
    </div>
  );
}

export default App;
