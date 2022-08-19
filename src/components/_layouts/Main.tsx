import React, { useState } from 'react'

import Title from '../Title'
import Input from '../Input';
import ParseContainer from '../ParseContainer';

const Main = () => {

  const [url, setUrl] = useState<string>('');

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