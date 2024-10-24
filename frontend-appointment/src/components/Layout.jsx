import  { createContext, useContext ,  useState } from 'react';
import Navbar from './Nav'
import { Outlet } from 'react-router-dom'
import {MobileMenu} from "./Nav"

export const ServiceContext = createContext();

function Layout() {
    const [service , setService] = useState()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
      };
  return (
    <>
    <ServiceContext.Provider value={{service , setService}}>
      <Navbar toggleMobileMenu= {toggleMobileMenu} /> 
        <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
      <Outlet /> {/* This will render the different route components */}
      </ServiceContext.Provider>
    </>
  )
}

export default Layout
