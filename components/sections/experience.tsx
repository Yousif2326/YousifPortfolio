"use client";

import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AI Software Developer",
    company: "Laulima Consulting Inc.",
    location: "Remote",
    period: "Sep 2025 – Present",
    description: [
      "Engineered an AI system using transformer-based LLMs with embedding-based similarity scoring, automating job description creation and evaluation for over 3,000 roles.",
      "Built custom conversational AI tools with FastAPI and LangChain, enabling natural, iterative refinement of job descriptions and streamlining HR collaboration.",
      "Developed automated scoring and SHAP-inspired explainability modules with rule-based logic, improving fairness and transparency while increasing reviewer satisfaction by 25% and achieving 90% reviewer agreement.",
      "Optimized model performance and integrated the system into Laulima's HR workflow, cutting review time by 40% and boosting classification accuracy by 15%.",
    ],
    technologies: ["Python", "FastAPI", "LangChain", "LLMs", "Transformers"],
  },
  {
    title: "Coding & Math Instructor",
    company: "ICan Education",
    location: "Waterloo, ON",
    period: "Nov 2023 – Nov 2025",
    description: [
      "Integrated three new AI and real-world application modules from scratch, seamlessly integrating them into the existing computer science curriculum.",
      "Tracked student performance across coding and interdisciplinary projects, providing targeted feedback that led to an average score improvement of 20%.",
    ],
    technologies: ["Python", "JavaScript", "Teaching", "Curriculum Development"],
  },
  {
    title: "AI Developer & Research Assistant",
    company: "McGill University",
    location: "Remote",
    period: "May 2025 – Aug 2025",
    description: [
      "Developed machine learning models for missing data imputation, increasing data completeness by 45% and improving stability across timepoints, by combining statistical baselines with deep learning methods.",
      "Enhanced clinical decision-making accuracy, reducing prediction error on key outcomes by 18%, by building an end-to-end system that integrated imputation pipelines with predictive analytics.",
      "Improved real-world usability for clinical teams, shortening analysis workflows by 30%, by creating a user-friendly interface and validating outputs through multi-site clinician feedback.",
    ],
    technologies: ["Python", "PyTorch", "Deep Learning", "Clinical AI"],
  },
  {
    title: "AI Developer",
    company: "Wilfrid Laurier University",
    location: "Waterloo, ON",
    period: "Sep 2024 – Dec 2024",
    description: [
      "Led the development of an AI model that matched patients to clinical studies, achieving a 92% reduction in recruitment time through automated eligibility screening.",
      "Built the full end-to-end pipeline including data preprocessing, model architecture, and deployment, improving matching accuracy by 6% compared to traditional recruitment methods.",
      "Presented a research paper at a top Canadian AI conference, sharing insights on intelligent patient–study matching with over 100 attendees.",
    ],
    technologies: ["Python", "Machine Learning", "Research", "Data Science"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building AI solutions that make a real impact
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-primary mt-2">•</span>
                      <span className="text-muted-foreground leading-relaxed flex-1">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

