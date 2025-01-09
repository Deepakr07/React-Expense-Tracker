import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"



export default function Balance(){
    const { transactions } = useContext(GlobalContext)
    let income = 0
    let expense = 0
    transactions.forEach(transaction =>{
        if(transaction.amount>0)
            income+=transaction.amount
        else
        expense+=Math.abs(transaction.amount)
    })
    console.log(income)
    console.log(expense)
    return(
        <>
            <h4>Your Balance</h4>
            <h1>${income-expense}</h1>
        </>
    )
}