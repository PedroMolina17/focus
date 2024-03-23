import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lights from "./Components/Lights";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lights />} />
      </Routes>
    </Router>
  );
}

export default App;
