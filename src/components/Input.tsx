import React from 'react'

type Props = {
  onChange: (url: string) => void;
}

const Input = ({ onChange }: Props) => {
  return (
    <input
      className='bg-[#485460] px-4 rounded-full w-1/2 h-10 text-center'
      placeholder='Paste your URL here...'
      onChange={event => onChange(event.target.value)}
    />    
  )
}

export default Input