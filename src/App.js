import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
// import { calculate, reset } from "./Utils/utils";
import Form from "./components/Form";


const App = () => {
  const[ investCalculation, setInvestCalculations] = useState([]);
  const onCalculateInvestment = (props)=>{
    setInvestCalculations(prevInvestCalc =>{
      const updatedCalc = props;
      return updatedCalc;
    })
  
  }
  return (
    <div>
      <header className="header">
        <img src="./invest.png"></img>
        <h1>Investment calculator</h1>
      </header>

     <Form onAddInvestment={onCalculateInvestment}></Form>

      <Table calculations={investCalculation} />
    </div>
  );
};

export default App;
