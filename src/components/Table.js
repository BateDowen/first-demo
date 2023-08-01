import {  DurationUl, YearlySavings } from "./UL";


const Table = ({calculations}) => {
  // console.log(c);
    return (
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>YEAR NUMBER {<DurationUl counts={calculations}></DurationUl>}</td>  
            <td>TOTAL SAVINGS END OF YEAR {<YearlySavings counts={calculations}></YearlySavings>}</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
        </tbody>
      </table>
    )
};
export default Table;
