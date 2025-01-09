import { GlobalContext } from "../Context/GlobalState"
import { useState,useContext } from "react"
export default function AddTransaction(){
    const [text, setText] = useState('')
    const [amount, setAmout] = useState(0)
    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e =>{
        e.preventDefault()
        const newTransaction = {
            id:Math.floor(Math.random() * 1000000000),
            text,
            amount
        }
        setText('')
        setAmout(0)
        addTransaction(newTransaction)
    }

    return(
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor = "text">Text</label>
                    <input type = "text" value = {text} onChange = {(e) => setText(e.target.value)} placeholder = "Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor = "amount">Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value = {amount} onChange = {(e) => setAmout(e.target.value)}placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>            
        </>
    )
}