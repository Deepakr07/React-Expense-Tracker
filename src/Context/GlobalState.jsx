import { createContext,useReducer } from "react";
import AppReducer from "./AppReducer";


const initialState =  {
    transactions:  []
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
                data: updatedTransaction 
            }
        });
    }


    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            editTransaction,
        }}>
            {children}
        </GlobalContext.Provider>
    )

}