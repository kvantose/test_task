import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import UserPage from "./components/UserPage/UserPage.jsx";


function App() {
 return (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/user/:id" element={<UserPage />} />
  </Routes>
  );
}

export default App;
