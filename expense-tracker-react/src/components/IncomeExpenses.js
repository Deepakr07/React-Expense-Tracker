import { GlobalContext } from "../Context/GlobalState"
import { useContext } from "react"

export default function IncomeExpenses(){
  const { transactions } = useContext(GlobalContext)
  let income = 0
  let expense = 0
  transactions.forEach(transaction => {
      if(transaction.amount >0)
        income+=transaction.amount
      else
        expense+=Math.abs(transaction.amount)
  });
  return(
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className ="money minus">-${expense}</p>
        </div>
      </div>
    )
}