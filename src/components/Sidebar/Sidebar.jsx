import React from 'react'
import { NavLink } from 'react-router-dom'
const stylebar=({isActive})=>{ 
  const style='flex items-center gap-1 p-2 hover:bg-red-400 hover:text-neutral-100 rounded-r-3xl ';
  return   isActive ? `bg-red-400 text-neutral-100 ${style}`:`${style}`;
}
const Sidebar = () => {
    
  return (
     <aside className='flex flex-col min-w-3.5 w-44 gap-3  text-left pl-6 pt-2 h-screen fixed mt-24' >
      <NavLink className={stylebar}  to='/'> <span class="material-symbols-outlined">
home
</span> <span>Home</span></NavLink>
      <NavLink  className={stylebar}   to='/Archive'>
      <span class="material-symbols-outlined">
archive
</span>
        <span>Archive</span></NavLink>
      {/* <NavLink className={stylebar}   to='/important'> <span class="material-symbols-outlined">
label_important
</span>  <span>Important</span></NavLink> */}
      <NavLink  className={stylebar}  to='/bin'> 
      <span class="material-symbols-outlined">
delete
</span>
      <span>Bin</span></NavLink>
     </aside>
  )
}

export default Sidebar