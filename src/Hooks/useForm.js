import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';




export const useForm = () => {

    const [formState, setFormState] = useState({});

    const onChangeInput = (event) => {
        const field = event.target.name;
        const value = event.target.value;

        console.log(field, value)
  
        setFormState({
          ...formState,
          [field]:value
        });
      }


  return {
    ...formState,
    formState,
    onChangeInput,
  }
}
