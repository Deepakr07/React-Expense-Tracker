import { createContext,useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState =  {
    transactions:  [
        // { id: 1, text: 'Flower', amount: -20},
        // { id: 2, text: 'Salary', amount: 300},
        // { id: 3, text: 'Book', amount: -10},
        // { id: 4, text: 'Camera', amount: 150}
    ]
}

//creating context
export const GlobalContext = createContext(initialState);

//Provider Component
export const  GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:transaction
        })
    }
    function editTransaction(updatedTransaction) {
        dispatch({
            type: 'EDIT_TRANSACTION',
            payload: {
                id: updatedTransaction.id,  
                data: updatedTransaction // This contains the new values
            }
        });
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,editTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )

}