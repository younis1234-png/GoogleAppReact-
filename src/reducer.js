export const initialState = {
    term: null,
}

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM"
}

// listen for any dispatch action return the new data (state) and our term
const reducer =(state, action) => {

    console.log(action);

    switch(action.type) {
        case actionTypes.SET_SEARCH_TERM:
        return {
            ...state,
            term: action.term,
        }

        default:
            return state
    }
}
export default reducer

// this is where the data is gonna live 
//  if we search younis term: "YOunis"