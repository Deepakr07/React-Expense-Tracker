export default (state, action) =>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions:[action.payload, ...state.transactions]
            } 
            case 'EDIT_TRANSACTION':
                return {
                    ...state,
                    transactions: state.transactions.map(transaction =>
                        transaction.id === action.payload.id
                            ? { ...transaction, ...action.payload.data } : transaction
                    )
                };   
        default:
            return state
    }
}