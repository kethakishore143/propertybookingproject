import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import List from "./components/list";
import Home from "./components/Home";
import Hotel from "./components/Hotels";






function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter >

  );
}

export default App;