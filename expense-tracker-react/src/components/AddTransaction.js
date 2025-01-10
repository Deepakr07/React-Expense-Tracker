import { GlobalContext } from "../Context/GlobalState"
import { useState,useContext } from "react"
import { useForm } from 'react-hook-form'
export default function AddTransaction(){
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm();
    
    const textValue = watch("text");
    const amountValue = watch("amount");
    const { addTransaction } = useContext(GlobalContext)
    const onSubmit = ({text,amount}) => {
        const newTransaction ={
            id:Math.floor(Math.random()*100000000000),
            text,
            amount
        }
        console.log(text,amount)
        addTransaction(newTransaction)
        reset()
   
      };
      const handleInputChange = (e) => {
        if (e.target.value.length > 12) {
            e.target.value = e.target.value.substring(0, 12);  
        }
    }
    const handleAmountInputChange = (e) => {
        let value = e.target.value;

        // Handle the decimal point situation
        const parts = value.split(".");
        
        if (parts[0].length > 10) {
            value = parts[0].substring(0, 10) + (parts[1] ? "." + parts[1] : "");  
        }

        if (parts[1] && parts[1].length > 3) {
            value = parts[0] + "." + parts[1].substring(0, 3);  
        }

        e.target.value = value; 
    };
    return(
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label htmlFor = "text">Text</label>
                    <input type = "text" name = "text" {...register("text")}placeholder = "Enter text..." onInput={handleInputChange}/>
                </div>
                <div className="form-control">
                    <label htmlFor = "amount">Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" name = "amount"  {...register("amount")}placeholder="Enter amount..."  step= "any" onInput={handleAmountInputChange}/>
                </div>
                {textValue&&amountValue && <button className="btn">Add transaction</button>}
            </form>            
        </>
    )
}