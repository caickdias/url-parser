import React from 'react'

import { AiOutlineCopy } from 'react-icons/ai';

type Props = {
  text: string;
}

const CopyToClipboard = ({text}: Props ) => {
  return (
    <button 
        className='absolute top-3 right-3 opacity-70 hover:opacity-[100]'  
        onClick={() => {navigator.clipboard.writeText(text)}}
      >
        <AiOutlineCopy size={18} color="white" />
      </button> 
  )
}

export default CopyToClipboard