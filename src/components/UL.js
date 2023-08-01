const UL = ({years}) =>{
    let rows =[];

    for (let index = 1; index <= Number(years); index++) {
        rows.push(<ul key={index}>{index}</ul>)
    }
    return <ul>{rows}</ul>
};
export default UL;
