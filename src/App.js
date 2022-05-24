import './App.css';
import { Link, Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>React Router Demo</h1>
      <nav style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}>
        <Link to="/weather">Weather App</Link> |{" "} 
        <Link to="/news">News App</Link> |{" "} 
        <Link to="/trivia">Trivia App</Link> |{" "} 
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
