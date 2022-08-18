import React, { useState } from "react";
//import response from './response.json';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import "./App.css";
import Recipe from "./recipe/recipe";
import Step from "./Steps/Step";
import Activities from "./Activities/Activities";

export default function App() {
  const [selectedKey, setSelectedKey] = useState("");
  const selectDropDown = (e) => {
    setSelectedKey(e.target.value);
  };
  return (
    
    <div className="App">
      <div className="Dropdown">
        {/* <DropdownButton id="dropdown-basic-button" title="data" onClick={(e) => selectDropDown(e)}>
          <Dropdown.Item href="/Activities.js" key="recipe">recipe</Dropdown.Item>
          <Dropdown.Item href="#/action-2" key="step">step</Dropdown.Item>
          <Dropdown.Item href="#/action-3" key="activities">activities</Dropdown.Item>
        </DropdownButton> */}
        <select class="form-select" onClick={(e) => selectDropDown(e)}>
          <option key="recipe">Recipe</option>
          <option key="step">Step</option>
          <option key="activities">Activities</option>
        </select>
        </div>
        {selectedKey === "Recipe" && <Recipe />}
        {selectedKey === "Step" && <Step />}
        {selectedKey === "Activities" && <Activities />}
        {/* <Activities /> */}
      
    </div>
  );
}
