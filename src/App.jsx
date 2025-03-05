import AddTransactionPage from "./Pages/AddTransactionPage/AddTransactionPage";
import IncomeExpensePage from "./Pages/IncomeExpensePage/IncomeExpensePage";
import {BrowserRouter} from 'react-router-dom'
import { Route,Routes } from 'react-router-dom';
import "./global.css"
import SimpleBottomNavigation from "./Components/BottomNavBar";
import HistoryPage from "./Pages/History/HistoryPage";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
  <QueryClientProvider client={queryClient}>
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
  </QueryClientProvider>

  );
}

export default App;
