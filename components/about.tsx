import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
          <span className="text-gray-400">{"<"}</span>
          About Me
          <span className="text-gray-400">{" />"}</span>
        </h2>

        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-gray-300">
            My journey into technology started with a simple curiosity about how
            things work. In 2024, I applied to a developer academy in Batam.
            Although I wasn’t accepted, the process sparked my interest and
            encouraged me to keep learning. That experience led me to pursue a
            formal education in computer science and continue exploring the
            field step by step.
          </p>

          <blockquote className="border-l-4 border-green-400 pl-6 py-2 bg-gray-800/50 rounded-r-lg">
            <p className="text-green-300 font-semibold">
              "Shifting from a background in graphic design to studying
              technology hasn't been easy, but it started with a moment that
              challenged me. After facing a setback, I became more curious about
              how technology works and began exploring it on my own. "
            </p>
          </blockquote>

          <p className="text-gray-300">
            Over time, I've developed self discipline and the habit of learning
            independently, which helped me work through the challenges of
            switching fields and eventually led me to pursue formal education in
            computer science.
          </p>

          <blockquote className="border-l-4 border-blue-400 pl-6 py-2 bg-gray-800/50 rounded-r-lg">
            <p className="text-blue-300 font-semibold">
              "I'm still learning, but having some experience in both design and
              technology has helped me start seeing problems from different
              angles. I try to build simple solutions that make sense for real
              people, and I'm focused on improving as I go."
            </p>
          </blockquote>

          <p className="text-gray-300">
            Today, i'm beginning to find ways to connect my background in design
            with what i've picked up in technology. It's helped me look at
            problems with both creativity and practicality. I'm not an expert,
            but I try to build things that are simple, useful, and make sense
            for the people who use them.
          </p>
        </div>
      </div>
    </section>
  );
}
