import React from 'react'
import LineDivider from '../LineDivider'

const Sidebar = () => {
  return (
    <div className='flex flex-1 flex-col h-full bg-[#d2dae2] opacity-80 p-4 text-[#1e272e] font-semibold text-lg'>
        Preferences
        <LineDivider />

        hide keys
        object | text
    </div>
  )
}

export default Sidebar