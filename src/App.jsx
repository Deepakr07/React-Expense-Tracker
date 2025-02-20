import { GlobalProvider } from "./Context/GlobalState";
import AddTransactionPage from "./Pages/AddTransactionPage/AddTransactionPage";
import IncomeExpensePage from "./Pages/IncomeExpensePage/IncomeExpensePage";
import {BrowserRouter} from 'react-router-dom'
import { Route,Routes } from 'react-router-dom';
import "./App.css"
import SimpleBottomNavigation from "./Components/BottomNavBar";
import HistoryPage from "./Pages/History/HistoryPage";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path = "/add" element = {<AddTransactionPage />}/>
          <Route path = "/" element = {<IncomeExpensePage />}/>
          <Route path="/history" element = {<HistoryPage/>}/>
        </Routes>
        <div className="bottom-navigation-bar">
          <SimpleBottomNavigation />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
