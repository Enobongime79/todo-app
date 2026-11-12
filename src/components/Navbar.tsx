import { IconMoon, IconSun } from '@tabler/icons-react';
import { useState, useEffect } from 'react';

const darkMode = localStorage.getItem("theme")
console.log(darkMode);

function Navbar() {
  
  const [dark, setDark] = useState(darkMode || "light");

  const setTheme = () => {
    if (dark === "dark") {
      document.documentElement.classList.add("dark")
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  }

  const updateDarkMode = () => {
    if (dark === "light") {
      setDark("dark")
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark");
    }
    else if(dark === "dark") {
      setDark("light")
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light");
    }
  }

  useEffect(() => {
    setTheme();
  }, [])
  
  return (
    <nav className="justify-between dark:bg-black dark:text-white items-center px-4 lg:px-52 py-4 flex flex-row border-b">
      <p className="text-xl font-semibold">Todo List</p>
      <button onClick={() => {updateDarkMode()}} className='border-2 dark:border-white hover:cursor-pointer border-black p-1 rounded-full'> 
        {dark == "dark" ? <IconMoon stroke={1.5}/> : <IconSun /> }
      </button>
    </nav>
  )
}

export default Navbar;