import React, { useState, useEffect, useContext } from 'react'

import Title from '../Title'
import Input from '../Input';
import ParseContainer from '../ParseContainer';
import PreferencesContext from '../../context/Context';

import { getPreferencesFromLocalStorage } from '../../services/localStorage';

const Main = () => {

  const [url, setUrl] = useState<string>('');  
  const { setPreferences } = useContext<any>(PreferencesContext); 

  useEffect(() => {
    const preferences = getPreferencesFromLocalStorage();
    if(preferences){
      setPreferences(preferences);
    }
  }, []);

  const handleChangeUrl = (url: string) => setUrl(url);

  return (
    <div className='flex flex-[4] flex-col justify-evenly items-center p-4 h-full'>

      <Input onChange={handleChangeUrl} />

      <Title />

      <ParseContainer url={url} />
    </div>
  )
}

export default Main