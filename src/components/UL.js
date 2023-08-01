export const DurationUl = ({counts}) =>{
    let rows =[];

    for (let index = 1; index <= Number(counts.duration); index++) {
        rows.push(<ul key={index}>{index}</ul>)
    }
    return <ul>{rows}</ul>
};

export const YearlySavings = ({counts}) =>{
    let rows =[];
    let currentSavings = Number(counts.currentSavings);
    for (let index = 1; index <= Number(counts.duration); index++) {
        const expectedReturn = (Number(counts.expectedReturn)/ 100).toFixed(2)
        
        const yearlyInterest = currentSavings * expectedReturn ;
        currentSavings += yearlyInterest + Number(counts.yearlySavings);
        rows.push(<ul key={index}>{currentSavings.toFixed(2)}</ul>)
    }
    return <ul>{rows}</ul>
}
