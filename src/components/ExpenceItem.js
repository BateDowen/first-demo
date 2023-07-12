import "./ExpenceItem.css";

function ExpenceItem() {
    const date = new Date();
    const item = 'Car';
    const price = '3000';

  return (
    <div className="expense-item">
      <div>{date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{item}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
    </div>
  );
}
export default ExpenceItem;
