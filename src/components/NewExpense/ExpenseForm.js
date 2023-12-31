import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let { title, amount, date } = Object.fromEntries(formData);
    date = new Date(date);
    props.onSaveExpenseData({ title, amount, date });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" name="amount" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" name="date" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
