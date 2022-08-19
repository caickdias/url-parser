import React, { useState, useContext, useEffect } from 'react'
import CheckBoxTopArea from '../CheckBoxTopArea';
import LineDivider from '../LineDivider'

import PreferencesContext from '../../context/Context';
import ShowOptions from '../ShowOptions';

const Sidebar = () => {

  const [outputMode, setOutputMode] = useState('object');
  const { preferences, setPreferences } = useContext<any>(PreferencesContext);  
    
  const onToggleOption = (option: string) => {    
      setPreferences({
        ...preferences,
        [option]: !preferences[option],
      })
    }

  return (
    <div className='flex flex-1 flex-col h-full bg-[#d2dae2] opacity-80 p-4 text-[#1e272e] font-semibold text-lg'>
        
        <h1 className="text-2xl">Preferences</h1>
        <LineDivider />        

        <CheckBoxTopArea textMode={outputMode} />        
        
        <h1 className="text-2xl">Show options</h1>
        <LineDivider />

        <ShowOptions />

        <h1 className="text-2xl">More options</h1>
        <LineDivider />

        <button className='flex justify-center mt-4' onClick={() => onToggleOption('hideKeys')}>
          <input 
            className="rounded-full mr-2" 
            type="checkbox"   
            checked={preferences['hideKeys']}                
          />
          Hide keys
        </button>

    </div>
  )
}

export default Sidebar