import { GlobalContext } from "../Context/GlobalState"
import { useState,useContext } from "react"
import { useForm } from 'react-hook-form'
export default function AddTransaction(){
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    
    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = ({text,amount}) => {
        const newTransaction ={
            id:Math.floor(Math.random()*100000000000),
            text,
            amount
        }
        addTransaction(newTransaction)
        reset()
   
      };


    return(
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label htmlFor = "text">Text</label>
                    <input type = "text" name = "text" {...register("text")}placeholder = "Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor = "amount">Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" name = "amount"  {...register("amount")}placeholder="Enter amount..." maxLength={10}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>            
        </>
    )
}