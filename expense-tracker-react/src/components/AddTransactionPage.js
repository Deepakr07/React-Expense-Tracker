import Header from "./Header";
import AddTransaction from "./AddTransaction";
import "../../src/App.css"
export default function AddTransactionPage(){
    return(
        <div className="container">
            <Header />
            <AddTransaction />
        </div>
    )
}