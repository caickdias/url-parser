import React, { useContext } from 'react'

import PreferencesContext from '../context/Context';

const CheckBoxTopArea = () => {

  const { preferences, setPreferences } = useContext<any>(PreferencesContext); 
    
    const changeOutputMode = (option: string) => {    
        setPreferences({
          ...preferences,
          'plainText': option == 'plainText' ? true : false,
        })
      }

  return (
    <div className="flex justify-around my-4" >
          <button className='' onClick={() => changeOutputMode('object')}>
            <input 
              className="rounded-full mr-2" 
              type="checkbox" 
              checked={!preferences.plainText}              
            />
            Object
          </button>
          
          <button className='' onClick={() => changeOutputMode('plainText')}>
            <input 
              className="rounded-full m-2" 
              type="checkbox" 
              checked={preferences.plainText}              
            />
            Plain text
          </button>
          
        </div>
  )
}

export default CheckBoxTopArea