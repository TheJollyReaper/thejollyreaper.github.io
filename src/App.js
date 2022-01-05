import './App.css';
import ThemeSelector from './ThemeSelector';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Assignment0 from './assignments/Assignment0';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path = "/assignment0" element={<Assignment0/>}/>
            <Route exact path = "/assignment1" element={<Assignment0/>}/>
            <Route exact path = "/assignment2" element={<Assignment0/>}/>
            <Route exact path = "/assignment3" element={<Assignment0/>}/>
            <Route exact path = "/assignment4" element={<Assignment0/>}/>
            <Route exact path = "/assignment5" element={<Assignment0/>}/>
            <Route exact path = "/assignment6" element={<Assignment0/>}/>
          </Routes>
        </BrowserRouter>
        <div className="theme-selector">
          <ThemeSelector/>
          <h1>Welcome to my 439 class page!</h1>
          <img src="./me.jpg"/>
          <h3 className="body-text">
              Hello! My name is Edgar! I'm a senior in HCDE taking the data science pathway. I have a cat, she is very soft and fluffy.
              And I like food. Cinnamon rolls especially are yummy.
          </h3>
          <div className="content">
            <div className="row">
                <a href="/assignment0" style={{textDecoration:"none", color:"inherit"}}><h3 className="menu-text">Assignment 0: Webpage!</h3></a>
              </div>
              <div className="row">
                <a href="/assignment1" style={{textDecoration:"none", color:"inherit"}}>
                  <h3 className="menu-text">Assignment 1: Blink!</h3>
                </a>
              </div>
              <div className="row">
                <a href="/assignment2" style={{textDecoration:"none", color:"inherit"}}>
                  <h3 className="menu-text">Assignment 2: Fade!</h3>
                </a>
              </div>
              <div className="row">
                <a href="/assignment3" style={{textDecoration:"none", color:"inherit"}}>
                  <h3 className="menu-text">Assignment 3: Input Output!</h3>
                </a>
              </div>
              <div className="row">
                <a href="/assignment4" style={{textDecoration:"none", color:"inherit"}}>
                  <h3 className="menu-text">Assignment 4: Libraries!</h3>
                </a>
              </div>
              <div className="row">
                <a href="/assignment5" style={{textDecoration:"none", color:"inherit"}}>
                  <h3 className="menu-text">Assignment 5: High(er) Voltage and transistors!</h3>
                </a>
              </div>
              <div className="row">
                <a href="/assignment6" style={{textDecoration:"none", color:"inherit"}}>
                  <h3 className="menu-text">Assignment 6: Talking to the Web!</h3>
                </a>
              </div>
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
