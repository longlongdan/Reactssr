const Reducer = (state, action) => {
    switch(action.type) {
        case "ADD":
            return {name:'xiaoli',num:state.num++};
            break;
        case "del":
            return {name:'xiaoli',num:state.num--};
            break;
        case "change":
            return {name:'xiaoli',num:state.num+1};
            break;
        default: 
            return state;
    }
}
export default Reducer;