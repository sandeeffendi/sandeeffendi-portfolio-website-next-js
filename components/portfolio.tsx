import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink, Github } from "lucide-react";

export function PortfolioSection(){
    return(
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
                <CardTitle className="text-white font-mono">E-Commerce Platform</CardTitle>
                <CardDescription className="text-gray-400">Full-stack web application</CardDescription>
              </CardHeader>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mx-6 mb-4">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="E-Commerce Platform Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm">
                  Built with Next.js, TypeScript, and PostgreSQL. Features include user authentication, payment
                  processing, and admin dashboard.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-900 hover:bg-gray-700">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-900 hover:bg-gray-700">
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="bg-gray-800 border-gray-700 hover:border-green-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-white font-mono">Task Management App</CardTitle>
                <CardDescription className="text-gray-400">React Native mobile application</CardDescription>
              </CardHeader>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mx-6 mb-4">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Task Management App Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm">
                  Cross-platform mobile app built with React Native and Firebase. Includes real-time collaboration and
                  offline functionality.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-900 hover:bg-gray-700">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    App Store
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-900 hover:bg-gray-700">
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="bg-gray-800 border-gray-700 hover:border-green-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-white font-mono">Analytics Dashboard</CardTitle>
                <CardDescription className="text-gray-400">Data visualization platform</CardDescription>
              </CardHeader>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mx-6 mb-4">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Analytics Dashboard Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm">
                  Interactive dashboard built with Vue.js and D3.js. Processes large datasets and provides real-time
                  insights.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-900 hover:bg-gray-700">
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-900 hover:bg-gray-700">
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}