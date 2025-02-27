export const reducer = (state,action)=>{
    
    switch(action.type){
        
      case 'DELETE_MODAL_ACTION': return {
            ...state,
            openDelete:!state.openDelete
            }

      case 'UPDATE_MODAL_ACTION': return {
        ...state,
        openUpdate:!state.openUpdate
        }
      default: return state

    }
  }