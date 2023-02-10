// All react imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// All styles import
import './App.css';
// All pages import
import SignIn from "./pages/signIn/SignIn";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <SignIn />
        <Routes>
          <Route path="/dashboard" element={ <Dashboard /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
