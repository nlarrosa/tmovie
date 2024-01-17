import React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useReducer } from 'react';
import { AuthReducer } from '../reducers/AuthReducer';
import { axiosDash } from '../config/dashAxios';
import { types } from '../types/types';



const initialValues = {
  user: {}, 
  isLogged: false,
  token: '',
  message: ''
}


export const AuthProvider = ({ children }) => {
  
  const [ state, dispatch ] = useReducer(AuthReducer, initialValues);
  
  
  const login = async(email, password) => {
    
    try {
        const { data } = await axiosDash.post('/auth/user/login', {
          email,
          password,
        });


        const objectStorage = {
          user: {
            id: data.resp.id,
            email: data.resp.email,
            name: data.resp.name,
            lastName: data.resp.lastName,
          },
          token: data.resp.token
        }
  
        localStorage.setItem('token', JSON.stringify(objectStorage));
  
        dispatch({
          type: types.auth.login,
          payload: objectStorage
        });

      } catch (error) {

        dispatch({
          type: types.auth.errorMsg,
          payload: {
            message: error.response.data
          }
        })
      }
    }


    const checkToken = async() => {

         const token = localStorage.getItem('token');
         const dataToken = JSON.parse(token);

         if(!token){
          return dispatch({
            type: types.auth.logout
          });
         }

         axiosDash.interceptors.request.use( config => {
            config.headers = {
              ...config.headers,
              'x-token-data': dataToken.token,
            }
            return config;
         });

         const { data } = await axiosDash.get('/auth/user/review/token');
  
         const objectStorage = {
          user: {
            id: dataToken.user.id,
            email: dataToken.user.email,
            name: dataToken.user.name,
            lastName: dataToken.user.lastName,
          },
          token: data.resp.token
        }

        localStorage.setItem('token', JSON.stringify(objectStorage));

         dispatch({
          type: types.auth.login,
          payload: objectStorage
        });
    }


    const logout = () => {

        localStorage.clear();
      
        dispatch({
          type: types.auth.logout,
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
