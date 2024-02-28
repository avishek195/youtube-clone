import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nevigation from "./Components/NavBar/Nevigation";
import FrontPage from "./Components/Frontpage/FrontPage";

const App = () => {
  return (
    <Router>
      <Nevigation />
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </Router>
  );
};

export default App;
