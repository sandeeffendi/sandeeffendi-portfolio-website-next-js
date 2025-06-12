import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="container mx-auto px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
          <span className="text-gray-400">{"<"}</span>
          Portfolio
          <span className="text-gray-400">{" />"}</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <Card className="bg-gray-800 border-gray-700 hover:border-green-400 transition-colors">
            <CardHeader>
              <CardTitle className="text-white font-mono">
                Company Landing Page
              </CardTitle>
              <CardDescription className="text-gray-400">
                Front End web application
              </CardDescription>
            </CardHeader>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mx-6 mb-4">
              <Image
                src="/img/project-ciptaart-landing-page.png"
                alt="E-Commerce Platform Screenshot"
                width={300}
                height={200}
                className="w-full h-full"
              />
            </div>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm">
                A responsive landing page for a creative signage company, built
                with Next.js, React, Tailwind CSS, and Node.js. Designed to
                highlight 3D signage, facade signs, and backlit letters with
                clean UI and strong visual impact.
              </p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-900 hover:bg-gray-700"
                >
                  <a
                    target="_blank"
                    href="https://cipta-art-advertising-landing-page.vercel.app/"
                    className="flex"
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-900 hover:bg-gray-700"
                >
                  <a
                    href="https://github.com/sandeeffendi/cipta-art-advertising-landing-page-next-js"
                    className="flex"
                    target="_blank"
                  >
                    <Github className="mr-1 h-3 w-3" />
                    Documentation
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card className="bg-gray-800 border-gray-700 hover:border-green-400 transition-colors">
            <CardHeader>
              <CardTitle className="text-white font-mono">
                Weather Forecast Application
              </CardTitle>
              <CardDescription className="text-gray-400">
                Fullstack web application
              </CardDescription>
            </CardHeader>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mx-6 mb-4">
              <Image
                src="/img/weather-forecast-app.png"
                alt="Weather App Forecast Showcase"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm">
                Weather App v2 is a modern weather application built with React
                and Tailwind CSS. It shows current weather and a 3-hour interval
                forecast for the day using data from the OpenWeatherMap API.
              </p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-900 hover:bg-gray-700"
                >
                  <a
                    href="https://weather-app-v2-react.vercel.app/"
                    target="_blank"
                    className="flex"
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-900 hover:bg-gray-700"
                >
                  <a
                    href="https://github.com/sandeeffendi/weather-app-v2-react"
                    target="_blank"
                    className="flex"
                  >
                    <Github className="mr-1 h-3 w-3" />
                    Documentation
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project 3 */}
          <Card className="bg-gray-800 border-gray-700 hover:border-green-400 transition-colors">
            <CardHeader>
              <CardTitle className="text-white font-mono">
                Analytics Dashboard
              </CardTitle>
              <CardDescription className="text-gray-400">
                Data visualization platform
              </CardDescription>
            </CardHeader>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mx-6 mb-4 relative">
              <Image
                src="/img/weather-forecast-app.png"
                alt="Analytics Dashboard Screenshot"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm">
                Interactive dashboard built with Vue.js and D3.js. Processes
                large datasets and provides real-time insights.
              </p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-900 hover:bg-gray-700"
                >
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Live Demo
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-900 hover:bg-gray-700"
                >
                  <Github className="mr-1 h-3 w-3" />
                  Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
