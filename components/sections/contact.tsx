"use client";

import { Mail, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "salm7108@mylaurier.ca",
      href: "mailto:salm7108@mylaurier.ca",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Waterloo, ON",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yousif-salma",
      href: "https://linkedin.com/in/yousif-salma",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                );

                return info.href ? (
                  <Link
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="hover:opacity-80 transition-opacity"
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-center text-muted-foreground mb-6">
                Let's work together to bring your ideas to life
              </p>
              <div className="flex justify-center gap-4">
                <Link href="mailto:salm7108@mylaurier.ca">
                  <Button size="lg">Send Email</Button>
                </Link>
                <Link
                  href="https://linkedin.com/in/yousif-salma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    Connect on LinkedIn
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

