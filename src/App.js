import "./App.css";
import About from "./Component/About";
import Navbar1 from "./Component/Navbar1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextForm from "./Component/TextForm";
import Speed from "./Component/Speed";
import Home from "./Component/Home";
import Navbar2 from "./Component/Navbar2";
import Card1 from "./Component/card1";


// import Timer from "./Component/Timer";


function App() {
  return (
    


    <BrowserRouter>
      <div className="App">
      
        {/* <Navbar1 /> */}
        {/* <Timer/> */}
        {/* <Navbar2/>
        <Card1 className = "card"/> */}
        <Routes>
          <Route exact path="" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/form" element={<TextForm />}></Route>
          <Route exact path="/speed" element={<Speed />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
