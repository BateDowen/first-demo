
export const reset = (ev) =>{
        ev.preventDefault()
        let table = document.querySelector('.result');
        table.classList.add('hidden');
   
};

export const calculate = (ev) =>{
      ev.preventDefault();
      let table = document.querySelector('.result');

      if (table.classList.contains('hidden')) {
        table.classList.remove( 'hidden');
        
      }

      const formElement = document.querySelector('.form');
      const formData = new FormData(formElement);
      let { currentSavings,yearlySavings,expectedReturn,duration } = Object.fromEntries(formData);
      console.log(currentSavings);
      console.log(yearlySavings);
      console.log(expectedReturn);
      console.log(duration);

};
