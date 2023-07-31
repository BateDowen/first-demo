

const Form = (props) =>{
    const calculate = (ev) =>{
        ev.preventDefault();
        let table = document.querySelector('.result');
        
        if (table.classList.contains('hidden')) {
            table.classList.remove( 'hidden');
            
        }
        
        const formElement = document.querySelector('.form');
        const formData = new FormData(formElement);
        let { currentSavings,yearlySavings,expectedReturn,duration } = Object.fromEntries(formData);
       props.onAddInvestment({ currentSavings,yearlySavings,expectedReturn,duration });
       
  };
  
    return (
        <form className="form" onSubmit={calculate}>
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
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
          
        </p>
      </form>
    )
};
export default Form;
