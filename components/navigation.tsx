"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { renderCanvas } from "@/components/ui/canvas";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Initialize canvas animation in header
    const timer = setTimeout(() => {
      const canvas = document.getElementById("header-canvas");
      if (canvas) {
        renderCanvas("header-canvas");
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 relative overflow-hidden",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <canvas
        id="header-canvas"
        className="absolute inset-0 pointer-events-none"
        style={{
          height: "100%",
          width: "100%",
          zIndex: 0,
          opacity: 0.5
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="#home"
            className="flex flex-col md:flex-row md:items-center md:gap-2 relative z-20 group"
          >
            <span className="text-xl md:text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors relative z-20 bg-background/50 backdrop-blur-sm px-2 py-1 rounded">
              Yousif Salman
            </span>
            <span className="text-sm md:text-base font-medium text-foreground group-hover:text-foreground transition-colors relative z-20 bg-background/50 backdrop-blur-sm px-2 py-1 rounded">
              AI Developer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link href="#contact">
              <Button size="sm">Get in Touch</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button size="sm" className="w-full">
                Get in Touch
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

