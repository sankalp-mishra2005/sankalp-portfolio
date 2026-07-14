import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { Button } from './ui/button'

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="secondary"
      size="icon"
      aria-label="Toggle theme"
      className="w-9 h-9"
    >
      {theme === 'light' ? <Moon size={18} className="text-foreground" /> : <Sun size={18} className="text-foreground" />}
    </Button>
  )
}

export default ThemeToggle
