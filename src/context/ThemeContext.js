"use client"

import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('dark')

    const toggle = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        // Apply the theme class to the <html> element
        document.documentElement.className = mode
    }, [mode])

    return (
        <ThemeContext.Provider value={{ mode, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}