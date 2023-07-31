
export const reset = (ev) =>{
        ev.preventDefault()
        let table = document.querySelector('.result');
        table.classList.add('hidden');
        const form = document.querySelector('.form');
        form.reset();

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
     
console.log(ev);
};
