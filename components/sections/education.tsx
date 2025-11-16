"use client";

import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building a strong foundation in computer science
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Bachelor of Science, Computer Science (Co-op)
                </h3>
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">
                      Wilfrid Laurier University
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Waterloo, ON</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Expected Aug 2026</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Pursuing a comprehensive computer science degree with a focus on
                  artificial intelligence, machine learning, and software
                  engineering. The co-op program has provided valuable
                  real-world experience in AI development and research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

