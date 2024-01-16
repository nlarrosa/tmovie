import React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useReducer } from 'react';
import { AuthReducer } from '../reducers/AuthReducer';
import { axiosDash } from '../config/dashAxios';



const initialValues = {
  user: {}, 
  isLogged: false,
  token: '',
  message: ''
}


export const AuthProvider = ({ children }) => {
  
  const [ state, dispatch ] = useReducer(AuthReducer, initialValues);
  
  
  const login = async(email, pass) => {
    
    
    try {
        const { data } = await axiosDash.post('/auth/user/login', {
          email: email,
          password: pass,
        });
        
        const objectStorage = {
          user: {
            id: data.resp.id,
            username: data.resp.name,
            email: data.resp.email,
            firstName: data.resp.name,
            lastName: data.resp.lastName,
          },
          token: data.resp.token
        }
  
        localStorage.setItem('token', JSON.stringify(objectStorage));
  
        dispatch({
          type: 'LOGIN',
          payload: objectStorage
        })
      } catch (error) {
        console.log(error)
      }

    }


    const checkToken = async() => {

         const token = localStorage.getItem('token');
         const dataToken = JSON.parse(token);

         if(!token){
          dispatch({
            type: 'LOGOUT'
          });
         }

         axiosDash.interceptors.request.use( config  => {
          config.headers = {
              ...config.headers,
              'x-token-data': dataToken.token,
          }
          return  config;
        });

         const {data} = await axiosDash.get('/auth/user/review/token');

         dispatch({
          type: 'LOGIN',
          payload: {
            user: {
              id: dataToken.user.id,
              username: dataToken.user.username,
              email: dataToken.user.email,
              firstName: dataToken.user.firstName,
              lastName: dataToken.user.lastName,
              gender: dataToken.user.gender,
            },
            token: data.resp.token
          }
        });
    }



    const logout = () => {
      
        dispatch({
          type: 'LOGOUT',
        })
    }




  return (
    
    <AuthContext.Provider value={{
        state,
        login,
        logout,
        checkToken
    }}>
        { children }
    </AuthContext.Provider>
  )
}
