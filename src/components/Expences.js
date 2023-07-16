import Card from "./Card";
import ExpenceItem from "./ExpenceItem";
import './Expenses.css';

const Expenses = ({items}) => {
  
  return (
    <Card className="expenses">
      <ExpenceItem
      
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenceItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
      <ExpenceItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />
      <ExpenceItem
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      />
    </Card>
  );
}
export default Expenses;
