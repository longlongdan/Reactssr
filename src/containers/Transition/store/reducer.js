const reducer = (state = {}, action) => {
    switch(action.type) {
        case 'changeList':
            return {
                list: action.list
            }
            break;
        default: 
            return state;
            break;
    }
}
export default reducer;