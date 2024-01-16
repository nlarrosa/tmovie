



export const AuthReducer = (state={}, action) => {

    switch (action.type) {

        case 'LOGIN':
            return{
                ...state,
                user: action.payload.user, 
                isLogged: true,
                token: action.payload.token,
            }

        case 'LOGOUT':
            return{
                ...state,
                user: null, 
                isLogged: false,
                token: '',
            }

        case 'ERROR-MESSAGE':
            return {
                ...state,
                message: action.payload.msg,
            }

        case 'RECOVERY':
            return{
                newPassword: action.payload.newpassword
            }
    
        default:
            return state;
    }
}