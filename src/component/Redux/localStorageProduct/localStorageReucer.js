const initialState = {
    localStorageProduct : []
}

const localStorageReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_LOCAL_STORAGE' : 
            return{
                ...state,
                localStorageProduct : action.payload 
                }
            default : 
                return state
    }
}

export default localStorageReducer;