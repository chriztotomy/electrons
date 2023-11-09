import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import SignUp from './pages/signup';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
