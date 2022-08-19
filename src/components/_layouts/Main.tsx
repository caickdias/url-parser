import React, { useState } from 'react'

import Title from '../Title'
import Input from '../Input';
import ParseContainer from '../ParseContainer';
import { Preferences } from '../../types';

const preferencesDefault: Preferences = {  
  showBaseUrl: false,
  showResource: false,
  showScheme: false,
  showHostname: true,
  showSubdomain: false,
  showDomain: false,
  showTld: false,
  showPath: true,
  showQuery: true,
  showArgs: true,
  hideKeys: true,
  plainText: true,
}

const Main = () => {

  const [url, setUrl] = useState<string>('asd');
  const [preferences, setPreferences] = useState<Preferences>(preferencesDefault)

  const handleChangeUrl = (url: string) => setUrl(url);

  return (
    <div className='flex flex-[4] flex-col justify-evenly items-center p-4 h-full'>

      <Input onChange={handleChangeUrl} />

      <Title />

      <ParseContainer url={url} preferences={preferences} />
    </div>
  )
}

export default Main