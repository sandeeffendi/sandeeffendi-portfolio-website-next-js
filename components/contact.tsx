
import React from "react";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

export function ContactSection() {
  const router = useRouter();
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      router.push("/message-sent");
    }
  };
  return (
    <section id="contact" className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
          <span className="text-gray-400">{"<"}</span>
          Contact Info
          <span className="text-gray-400">{" />"}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                  <Mail className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-300">sande.effendi@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                  <Phone className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-gray-300">+62-895-0378-7543</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                  <MapPin className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-gray-300">Batam, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-6">
                I'm always interested in new opportunities and collaborations.
                Whether you have a project in mind or just want to chat about
                technology, feel free to reach out!
              </p>
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

          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white font-mono">
                Send a Message
              </CardTitle>
              <CardDescription className="text-gray-400">
                Drop me a line and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-300"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={`w-full px-3 py-2 bg-gray-900 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent ${
                      errors.name ? "border-red-500" : "border-gray-600"
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className={`w-full px-3 py-2 bg-gray-900 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent ${
                      errors.email ? "border-red-500" : "border-gray-600"
                    }`}
                    placeholder="youremail@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-300"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`w-full px-3 py-2 bg-gray-900 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none ${
                      errors.message ? "border-red-500" : "border-gray-600"
                    }`}
                    placeholder="Tell me about your project or just say hello!"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm">{errors.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-mono"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
