import React, { useContext } from 'react'
import CopyToClipboard from './CopyToClipboard';

import { generateParsedStringUrl, splitURL } from '../utils/parser';
import PreferencesContext from '../context/Context';

import { Preferences } from '../types';

type Props = {
  url: string;
}

const ParseContainer = ({ url }: Props) => {
  
  const { preferences } = useContext<any>(PreferencesContext); 
    
  const splittedUrl: any = splitURL(url);
  const parsedStringUrl = generateParsedStringUrl(splittedUrl, preferences);
  
  return (
    <div className='w-1/2 h-1/3 relative'>
      <textarea 
        className="w-full h-full bg-[#485460] rounded-lg p-2"
        value={parsedStringUrl}
        spellCheck={false}
        disabled
      />

      <CopyToClipboard text={''} />

    </div>
  )
}

export default ParseContainer