const initialState =  {
        state : 1
}

const renderReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'SET_FUNITURE' : 
        return{
            ...state,
            state : 2
        }
        case 'SET_GROCERY' : 
        return{
            ...state,
            state : 1
        }
        case 'SET_KID' : 
        return{
            ...state,
            state : 4
        }
        case 'SET_FOOD' : 
        return{
            ...state,
            state : 5
        }
        case 'SET_ELECTRONICS' : 
        return{
            ...state,
            state : 6
        }
        case 'SET_HOME' : 
        return{
            ...state,
            state : 7
        }
        default : 
        return state
    }
}

export default renderReducer