import { types } from "../types/types";




export const AlertReducer = (state={}, action) => {

    switch (action.type) {
        case types.alertMsg.success:
            return {
                ...state,
                title: action.payload.title,
                msg: action.payload.msg,
                icon: '',
                color: 'success'
            }

        case types.alertMsg.error:
            return {
                ...state,
                title: action.payload.title,
                msg: action.payload.msg,
                icon: '',
                color: 'error'
            }

        case types.alertMsg.general:
            return {
                ...state,
                type: action.payload.type, //success / error / info /warning
                title: action.payload.title,
                msg: action.payload.msg,
                icon: '',
                color: action.payload.color
            }

        case types.alertMsg.clear:
            return {
                ...state,
                type: null, //success / error / info /warning
                title: null,
                msg: null,
                icon: '',
                color: null
            }
    
        default:
            return state;
    }
}