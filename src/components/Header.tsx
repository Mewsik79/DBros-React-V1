import React, { useState } from 'react'
    import { Menu, X } from 'lucide-react'

    export default function Header() {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <header className="fixed w-full bg-white shadow-md z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="DECKBROS Logo"
                className="h-12 w-auto"
              />
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-blue-600">Home</a>
              <a href="#" className="hover:text-blue-600">About Us</a>
              <a href="#" className="hover:text-blue-600">Missions</a>
              <a href="#" className="hover:text-blue-600">Contact Us</a>
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up / Log In</a>
            </nav>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white">
              <nav className="flex flex-col space-y-4 p-4">
                <a href="#" className="hover:text-blue-600">Home</a>
                <a href="#" className="hover:text-blue-600">About Us</a>
                <a href="#" className="hover:text-blue-600">Missions</a>
                <a href="#" className="hover:text-blue-600">Contact Us</a>
                <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up / Log In</a>
              </nav>
            </div>
          )}
        </header>
      )
    }
