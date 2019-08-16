import { CHANGE_LOGIN } from './constants';

const reducer = (state = {}, actions) => {
    switch (actions.type) {
        case CHANGE_LOGIN:
            return {
                ...state,
                login: actions.login
            }
            break;
        default:
            return state;
            break;
    }
}

export default reducer;