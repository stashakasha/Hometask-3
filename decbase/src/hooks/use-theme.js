import { useLayoutEffect, useState } from 'react'


const date = new Date();
const hoursNow = date.getHours();
console.log(hoursNow)
const isDarkTheme = hoursNow<6 || hoursNow>21;
console.log(isDarkTheme)
const defaultTheme = isDarkTheme ? 'dark' : 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState(
    sessionStorage.getItem('app-theme') || defaultTheme
  )

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    sessionStorage.setItem('app-theme', theme)
  }, [theme])
  
  return { theme, setTheme }
}