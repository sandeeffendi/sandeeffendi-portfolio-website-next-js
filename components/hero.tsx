"use client";

import { Button } from "./ui/button";
import { Mail, Github, Linkedin} from "lucide-react"
import { FaCode } from "react-icons/fa";
import React from "react";
import { scrollToSection } from "./scrollToSection";

export function HeroSection(){
    

    return (
              <section id="hero" className="container mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Right side - Profile photo */}
          <div className="flex justify-center lg:justify-start lg:ml-[10%]">
            <div className="relative">
              <img
                src="img\IMG_5205.JPG"
                alt="Sande Effendi"
                className="w-80 h-80 rounded-2xl object-cover border-2 border-gray-700"
              />
              <div className="absolute inset-y-0 left-[10%] right-0 rounded-2xl bg-gradient-to-r from-transparent via-green-400/10 to-green-400/30"></div>
            </div>
          </div>

          {/* Left side - Text and buttons */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-400 text-lg lg:text-3x1">Hello, I'm</span>
                <br />
                <span className="text-white">Sande Effendi</span>
                <br />
                <span className="text-green-400 text-2xl lg:text-3xl">Fullstack Developer</span>
              </h1>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-mono" size="lg" onClick={() => scrollToSection('portfolio')}>
                <FaCode className="mr-2 h-4 w-4"  />
                Check out my work
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contact')} className="border-gray-600 text-gray-900 hover:bg-gray-800 font-mono" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact Info
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://github.com/sandeeffendi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/sandeeffendi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section> 
    )
}