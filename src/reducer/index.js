const Reducer = (state, action) => {
    switch(action.type) {
        case "show":
            return {
                data: action.info
            }
        default: 
            return state;
    }
}
export default Reducer;