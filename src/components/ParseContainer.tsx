import React, { useEffect } from 'react'
import CopyToClipboard from './CopyToClipboard';

import { generateParsedStringUrl, splitURL } from '../utils/parser';

import { Preferences } from '../types';

type Props = {
  url: string;
  preferences: Preferences;
}

const ParseContainer = ({ url, preferences }: Props) => {
  
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