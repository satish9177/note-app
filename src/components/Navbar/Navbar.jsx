import React from 'react'
import logo  from '../../Assets/note-app-icon.png'
const Navbar = () => {
  return (
    <div className='flex w-full h-24 pt-2 pb-2 px-2  justify-start items-center gap-2 border-b-2 fixed'> 
      <img className=' h-16' src={logo} alt='logo'/>
      <h1 className=' font-bold  text-4xl text-cyan-600'>NoteBook</h1>
      
    </div>
  )
}

export default Navbar