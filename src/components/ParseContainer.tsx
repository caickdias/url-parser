import React from 'react'
import CopyToClipboard from './CopyToClipboard';

const ParseContainer = () => {

  const url = "https://www.asdf.com/query?a=b&c=123&d=1";
  const parsed = `{
    "hostname": "asdf.com",
    "path": "query",
    "params": {
      a: "b",
      c: "123",
      d: "1",
    }`
  

  return (
    <div className='w-1/3 h-48 relative'>
      <textarea 
        className="w-full h-full bg-[#485460] rounded-lg "
        value={parsed}
        spellCheck={false}
        disabled
      />

      <CopyToClipboard text={parsed} />

    </div>
  )
}

export default ParseContainer