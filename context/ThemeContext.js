"use client"

import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('dark')

    const toggle = () =>{
        setMode((prev)=> (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{mode, toggle}}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}
