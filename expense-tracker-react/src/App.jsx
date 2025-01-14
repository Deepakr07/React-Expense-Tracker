import { GlobalProvider } from "./Context/GlobalState";
import AddTransactionPage from "./Pages/AddTransactionPage/AddTransactionPage";
import IncomeExpensePage from "./Pages/IncomeExpensePage/IncomeExpensePage";
import {BrowserRouter} from 'react-router-dom'
import { Route,Routes } from 'react-router-dom';
import "./App.css"
import SimpleBottomNavigation from "./Components/BottomNavBar";

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
