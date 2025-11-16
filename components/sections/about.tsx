"use client";

import { Code, Database, Brain, Cpu, Globe, GitBranch } from "lucide-react";

export function About() {
  const skills = {
    languages: ["Python", "JavaScript", "C++", "Java", "Go", "SQL", "Bash", "HTML/CSS"],
    frameworks: ["React.js", "Next.js", "Node.js", "FastAPI", "PyTorch", "TensorFlow"],
    tools: [
      "NumPy",
      "Pandas",
      "scikit-learn",
      "Hugging Face Transformers",
      "OpenCV",
      "Git",
      "Linux",
    ],
  };

  const skillCategories = [
    {
      title: "Languages",
      items: skills.languages,
      icon: Code,
      color: "text-blue-500",
    },
    {
      title: "Frameworks",
      items: skills.frameworks,
      icon: Brain,
      color: "text-purple-500",
    },
    {
      title: "Libraries & Tools",
      items: skills.tools,
      icon: Database,
      color: "text-green-500",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI Developer passionate about building intelligent solutions that
              solve real-world problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm an AI Developer with a passion for creating intelligent
                systems that make a real impact. Currently pursuing my Bachelor
                of Science in Computer Science at Wilfrid Laurier University,
                I've worked on cutting-edge AI projects that have improved
                efficiency, accuracy, and user experience across various
                industries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From building transformer-based LLM systems to developing
                machine learning models for clinical decision-making, I thrive
                on solving complex problems with innovative AI solutions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">AI Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Building intelligent systems with LLMs, transformers, and
                      deep learning models
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Full-Stack Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating end-to-end solutions with modern frameworks and
                      APIs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Research & Innovation</h4>
                    <p className="text-sm text-muted-foreground">
                      Contributing to academic research and presenting findings
                      at conferences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Skills</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {skillCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.title}
                    className="bg-card border border-border rounded-lg p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className={`h-6 w-6 ${category.color}`} />
                      <h4 className="text-xl font-semibold">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

