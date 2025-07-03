import Home from "./component/Home";
import Nav from "./component/Nav";
import About from "./component/About";
import { Routes, Route } from "react-router-dom";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
