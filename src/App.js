import './App.css';
import ThemeSelector from './ThemeSelector';
import { useState } from 'react';
// import Assignment0 from './assignments/Assignment0';

function App() {
  const [visible, setVisible] = useState({0:false, 1:false, 2:false, 3:false, 4:false, 5:false, 6:false});

  return (
    <div className="App">

        <div className="theme-selector">
          <ThemeSelector/>
          <h1>Welcome to my 439 class page!</h1>
          <img src="./me.jpg"/>
          <h3 className="body-text">
              Hello! My name is Edgar! I'm a senior in HCDE taking the data science pathway. I have a cat, she is very soft and fluffy.
              And I like food. Cinnamon rolls especially are yummy.
          </h3>
          <div className="content">
            <div className="row" style={{cursor:"pointer"}} onClick={()=>{setVisible(visible => ({...visible, 0: !visible[0]}))}}>
              <h3 className="menu-text">Assignment 0: Webpage!</h3>
            </div>
            {visible && visible[0] && <h2>taco</h2>}

            <div className="row" style={{cursor:"pointer"}} onClick={()=>{setVisible(visible => ({...visible, 1: !visible[1]}))}}>
              <h3 className="menu-text">Assignment 1: Blink!</h3>
            </div>
            {visible && visible[1] && <h2>Assignment 1 coming really soon!</h2>}

            <div className="row" style={{cursor:"pointer"}} onClick={()=>{setVisible(visible => ({...visible, 2: !visible[2]}))}}>
              <h3 className="menu-text">Assignment 2: Fade!</h3>
            </div>
            {visible && visible[2] && <h2>Assignment 2 coming soonish!</h2>}

            <div className="row" style={{cursor:"pointer"}} onClick={()=>{setVisible(visible => ({...visible, 3: !visible[3]}))}}>
              <h3 className="menu-text">Assignment 3: Input Output!</h3>
            </div>
            {visible && visible[3] && <h2>Assignment 3 is coming in the forseeable future</h2>}

            <div className="row" style={{cursor:"pointer"}} onClick={()=>{setVisible(visible => ({...visible, 4: !visible[4]}))}}>
              <h3 className="menu-text">Assignment 4: Libraries!</h3>
            </div>
            {visible && visible[4] && <h2>It'll be a while before assignment 4 arrives</h2>}

            <div className="row" style={{cursor:"pointer"}} onClick={()=>{setVisible(visible => ({...visible, 5: !visible[5]}))}}>
              <h3 className="menu-text">Assignment 5: High(er) Voltage and transistors!</h3>
            </div>
            {visible && visible[5] && <h2>taco</h2>}

            <div className="row" style={{cursor:"pointer"}} onClick={()=>{setVisible(visible => ({...visible, 6: !visible[6]}))}}>
              <h3 className="menu-text">Assignment 6: Talking to the Web!</h3>
            </div>
            {visible && visible[6] && <h2>taco</h2>}

          </div>
        </div>

    </div>
  );
}

export default App;
