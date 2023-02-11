// All react imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// All styles import
import './App.css';
// All components import
import SideBar from "./components/SideBar";
// All pages import
import SignIn from "./pages/signIn/SignIn";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
          <SideBar />
            <Routes>
              <Route path="/" element={ <Dashboard /> } />
              <Route path="/signIn" element={ <SignIn /> } />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
