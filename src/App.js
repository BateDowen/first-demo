import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { calculate, reset } from "./Utils/utils";

const App = () => {
  return (
    <div>
      <header className="header">
        <img src="./invest.png"></img>
        <h1>Investment calculator</h1>
      </header>

      <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" name="currentSavings"/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" name="yearlySavings"/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" name="expectedReturn"/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" name="duration"/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={reset}>
            Reset
          </button>
          <button type="submit" className="button" onClick={calculate}>
            Calculate
          </button>
        </p>
      </form>

      <Table />
    </div>
  );
};

export default App;
