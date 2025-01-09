import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList";
import AddTransaction from "./Components/AddTransaction";
import { GlobalProvider } from "./Context/GlobalState";
import AddTransactionPage from "./Components/AddTransactionPage";
import IncomeExpensePage from "./Components/IncomeExpensePage";
import {BrowserRouter} from 'react-router-dom'
import { Route,Routes } from 'react-router-dom';
import "./App.css"
import SimpleBottomNavigation from "./Components/SimpleBottomNavigation";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path = "/add" element = {<AddTransactionPage />}/>
          <Route path = "/" element = {<IncomeExpensePage />}/>
        </Routes>
        <div className="bottom-navigation-bar">
          <SimpleBottomNavigation />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
