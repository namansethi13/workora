// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun'
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import type { RootState } from '@/store/store'
import { toggleTheme } from '@/feature/theme/themeToggleSlice'
import { motion, AnimatePresence } from 'framer-motion'
import Cookies from 'js-cookie'



function Toggler() {
    const dispatch = useDispatch()
    const darkMode = useSelector((state: RootState) => state.theme.darkMode)

    useEffect (() => {
        const cookieTheme = Cookies.get("theme");
        if(cookieTheme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [])


  return (
    <button
      className="fixed right-11 p-3 rounded-full hover:scale-110 transition duration-300 ease-in-out"
      onClick={() => dispatch(toggleTheme())}
    >
      <AnimatePresence mode="wait">
        {darkMode ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <FontAwesomeIcon icon={faSun} color="#D1CFCF" size="xl" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <FontAwesomeIcon icon={faMoon} color="#101827" size="xl" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

export default Toggler

