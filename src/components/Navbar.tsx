import { IconMoon, IconSun } from '@tabler/icons-react';
import { useState } from 'react';

function Navbar() {
  
  const [dark, setDark] = useState(false);

  const updateDarkMode = () => {
    if (!dark) {
      setDark(true)
      document.documentElement.classList.add("dark")
    }
    else {
      setDark(false)
      document.documentElement.classList.remove("dark")
    }
  }
  
  return (
    <nav className="justify-between dark:bg-black dark:text-white items-center px-4 lg:px-52 py-4 flex flex-row border-b">
      <p className="text-xl font-semibold">Todo List</p>
      <button onClick={() => {updateDarkMode()}} className='border-2 dark:border-white hover:cursor-pointer border-black p-1 rounded-full'> 
        {!dark ? <IconMoon stroke={1.5}/> : <IconSun /> }
      </button>
    </nav>
  )
}

export default Navbar;