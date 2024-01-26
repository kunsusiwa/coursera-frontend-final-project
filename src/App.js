import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Reservation from './pages/Reservation'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/reservation" element={<Reservation />} />
      </Routes>
    </div>
  );
}

export default App;
