import Header from "./Components/Header";
import AddTransaction from "./Components/AddTransaction";
import "../../App.css"
export default function AddTransactionPage(){
    return(
        <div className="container">
            <Header />
            <AddTransaction />
        </div>
    )
}