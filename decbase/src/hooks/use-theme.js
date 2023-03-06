import { useLayoutEffect, useState } from 'react'


const date = new Date('December 25, 1995 16:15:30');
const hoursNow = date.getHours();
const isDarkTheme = hoursNow<6 || hoursNow>21;
const defaultTheme = isDarkTheme ? 'light' : 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState(
     localStorage.getItem('app-theme') || defaultTheme
  )

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('app-theme', theme)
  }, [theme])
  
  return { theme, setTheme }
}