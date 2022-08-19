import React from 'react'
import CopyToClipboard from './CopyToClipboard';

import { splitURL } from '../utils/parser';

type Props = {
  url: string;
}

const ParseContainer = ({ url }: Props) => {
  
  const parsed: any = splitURL(url || 'https://www.asdf.com/query?a=b&c=123&d=1');

  return (
    <div className='w-1/3 h-48 relative'>
      <textarea 
        className="w-full h-full bg-[#485460] rounded-lg p-2"
        value={'a'}
        spellCheck={false}
        disabled
      />

      <CopyToClipboard text={''} />

    </div>
  )
}

export default ParseContainer