import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter";
function App() {
  const expenses = [
    { date: new Date(2022, 7, 14), title: "Toilet Paper", price: 94.12 },
    { date: new Date(2021, 2, 12), title: "New TV", price: 799.49 },
    { date: new Date(2021, 2, 28), title: "Car Insurance", price: 249.67 },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter />
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        price={expenses[0].price}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        price={expenses[1].price}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        price={expenses[2].price}
      />
    </div>
  );
}

export default App;
