"use client";

import React, { useEffect, useRef } from "react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import "./animate.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Boxes,
  Code2,
  Rocket,
  Github,
  Layout,
  ArrowRight,
  Layers,
  FileCode,
  Scale,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function LandingPage() {
  const features = [
    {
      icon: <Layout className="h-8 w-8 text-primary" />,
      title: "Pre-configured Stack",
      description:
        "Next.js 14, TypeScript, TailwindCSS, ShadcnUI, and Zustand - all set up and ready to go.",
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Structured Architecture",
      description:
        "Clear separation of data layer, service layer, and UI components. Feature-based organization for better scalability.",
    },
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: "Built to Scale",
      description:
        "Organized codebase that grows with your project. No technical debt from day one.",
    },
  ];

  const technicalDetails = [
    {
      icon: <FileCode className="h-6 w-6" />,
      title: "Clean Code Structure",
      points: [
        "Feature-based modules",
        "Service layer abstraction",
        "Type-safe data flow",
      ],
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Developer Experience",
      points: [
        "Zero configuration",
        "Consistent patterns",
        "Best practices built-in",
      ],
    },
    {
      icon: <Boxes className="h-6 w-6" />,
      title: "Ready to Use",
      points: [
        "Pre-built components",
        "State management setup",
        "Routing configured",
      ],
    },
  ];

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/50 opacity-75 blur animate-pulse" />
              <Rocket className="h-6 w-6 text-primary relative" />
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              nextailz
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section
        ref={heroRef}
        className="container mx-auto px-4 py-24 text-center relative overflow-hidden opacity-0 transition-opacity duration-1000"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-primary/5 to-transparent opacity-70" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-text-shimmer">
          Start Clean, Stay Clean
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          A pre-configured template for scalable Next.js applications. Skip the
          setup, start building features.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Use Template
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            View Code
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border bg-card hover:bg-accent/50 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-primary/50 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-6 relative z-10">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary/5 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-primary/5 to-transparent opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Technical Foundation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {technicalDetails.map((detail, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 p-4 rounded-full bg-primary/10 relative overflow-hidden transition-all duration-300 ease-in-out group-hover:bg-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
                    {detail.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{detail.title}</h3>
                <ul className="text-muted-foreground space-y-2">
                  {detail.points.map((point, i) => (
                    <li
                      key={i}
                      className="transition-all duration-300 ease-in-out hover:text-primary"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Why Choose nextailz?
            </h2>
            <p className="text-muted-foreground">
              See how nextailz transforms your development workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Without nextailz */}
            <div className="relative group transition-all duration-300 ease-in-out transform hover:scale-105">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/50 to-red-500/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-background rounded-lg p-8 border border-red-500/10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-red-500/10 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-red-500">
                    Without nextailz
                  </h3>
                </div>
                <ul className="space-y-6">
                  {[
                    "Spend days setting up project structure",
                    "Manual configuration of Tailwind, ShadcnUI, and Zustand",
                    "Figure out best practices for folder structure",
                    "Setup data layer and service layer from scratch",
                    "Deal with technical debt from poor initial setup",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-3 text-muted-foreground group"
                    >
                      <div className="h-6 w-6 flex items-center justify-center mt-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500 group-hover:animate-ping" />
                      </div>
                      <span className="group-hover:text-red-500 transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* With nextailz */}
            <div className="relative group transition-all duration-300 ease-in-out transform hover:scale-105">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-background rounded-lg p-8 border border-primary/10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    With nextailz
                  </h3>
                </div>
                <ul className="space-y-6">
                  {[
                    "Start building features in minutes",
                    "All tools pre-configured and integrated",
                    "Proven, scalable architecture ready to use",
                    "Clean separation of concerns built-in",
                    "Future-proof foundation for growth",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-3 text-muted-foreground group"
                    >
                      <div className="h-6 w-6 flex items-center justify-center mt-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary group-hover:animate-ping" />
                      </div>
                      <span className="group-hover:text-primary transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-primary/5 to-transparent opacity-30" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Start Your Next Project Right
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Clone, customize, and build. No configuration needed.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Clone Repository
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
