import React from "react";

export function NavbarSection() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-xl font-bold font-mono text-white">Sande Effendi</div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-300 hover:text-green-400 transition-colors font-mono">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors font-mono">
                About
              </a>
              <a href="#portfolio" className="text-gray-300 hover:text-green-400 transition-colors font-mono">
                Portfolio
              </a>
              <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors font-mono">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
}
