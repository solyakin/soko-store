
const setLocalStorage = products => {
    return{
        type : 'SET_LOCAL_STORAGE',
        payload : products
    }
}
export default setLocalStorage;