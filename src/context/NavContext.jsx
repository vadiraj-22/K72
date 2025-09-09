import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NavbarContext = createContext() 
export const NavbarColorContext = createContext(['white', () => {}]) 

const NavContext = ({ children }) => {
    const [navColor, setnavColor] = useState('white')
    const [navOpen, setnavOpen] = useState(false)

    const locate = useLocation().pathname
    console.log(useLocation().pathname)

    useEffect(function() {
        if(locate == '/projects' || locate == '/agence'){
            setnavColor('black')
        } else  {
            setnavColor('white')
        }
    }, [locate])
    
    return (
        <div>
            <NavbarContext.Provider value={[navOpen, setnavOpen]}>
                <NavbarColorContext.Provider value={[navColor,setnavColor]}>
                {children}
                </NavbarColorContext.Provider>
            </NavbarContext.Provider>
        </div>
    )
}

export default NavContext
