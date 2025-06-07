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
            My journey into technology began not in a lab, but through a
            personal realization of its potential. In 2024, I applied for
            tuition to one of the developer academies in Batam, and though I
            wasn't accepted, the experience ignited my interest. It made me
            curious, eager to learn, and motivated me to pursue a formal
            education in computer science to explore this growing field.
          </p>

          <blockquote className="border-l-4 border-green-400 pl-6 py-2 bg-gray-800/50 rounded-r-lg">
            <p className="text-green-300 font-semibold">
              "The transition from working as a graphic designer to becoming a
              tech student taught me persistence, self-discipline, and the
              ability to learn independently. These traits became essential as I
              navigated new concepts, solved coding problems, and adapted to the
              challenges of switching fields."
            </p>
          </blockquote>

          <p className="text-gray-300">
            While working in an advertising company, I developed a strong
            foundation in visual storytelling, branding, and client relations. I
            often wondered how digital designs became interactive, which led me
            to explore coding. This curiosity gradually evolved into a deep
            interest in software development and drove me to pursue knowledge
            beyond visuals-toward building digital products that actually
            function and solve problems.
          </p>

          <blockquote className="border-l-4 border-blue-400 pl-6 py-2 bg-gray-800/50 rounded-r-lg">
            <p className="text-blue-300 font-semibold">
              "Combining my background in design and technology helps me see
              problems from both creative and practical perspectives. I'm still
              learning, but I aim to build solutions that are thoughtful,
              functional, and relevant to real users."
            </p>
          </blockquote>

          <p className="text-gray-300">
            Today, I leverage my diverse background to approach technology with
            both structure and creativity. My time in advertising taught me how
            to think visually and understand user needs, while my academic
            journey in tech equips me to turn ideas into working digital
            solutions. I'm still growing, but each step has shaped how I build
            and solve.
          </p>
        </div>
      </div>
    </section>
  );
}
