import React, { useContext } from 'react'

import PreferencesContext from '../context/Context';

import { menuOptions } from '../data/sidebarMenuOptions';

const ShowOptions = () => {

    const { preferences, setPreferences } = useContext<any>(PreferencesContext); 
    
    const onToggleOption = (option: string) => {    
        setPreferences({
          ...preferences,
          [option]: !preferences[option],
        })
    }
    
    return (
        <div className='flex justify-center mt-2 mb-4'>
            <div className='flex flex-1'></div>
            
            <div className='flex flex-1 flex-col items-start'>
            {
                menuOptions.map(urlPart => 
                <button key={urlPart} className='flex justify-center my-1' onClick={() => onToggleOption(`show${urlPart[0].toUpperCase()+urlPart.slice(1)}`)}>
                <input 
                    className="rounded-full mr-2" 
                    type="checkbox"  
                    checked={preferences[`show${urlPart[0].toUpperCase()+urlPart.slice(1)}`]}             
                />
                {urlPart}
                </button>)
            }
            </div>

            <div className='flex flex-1'></div>
            </div>
    )
}

export default ShowOptions