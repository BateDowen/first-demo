import Card from "./Card";
import "./ExpenceItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenceItem(props) {
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenceItem;
