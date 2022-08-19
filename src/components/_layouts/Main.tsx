import React from 'react'

import Title from '../Title'
import Input from '../Input';
import ParseContainer from '../ParseContainer';

const Main = () => {
  return (
    <div className='flex flex-[4] flex-col justify-evenly items-center p-4 h-full'>

      <Input />

      <Title />

      <ParseContainer />
    </div>
  )
}

export default Main