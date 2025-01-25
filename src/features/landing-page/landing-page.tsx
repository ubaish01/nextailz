"use client";

import React from "react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Boxes,
  Workflow,
  Laptop,
  Rocket,
  Github,
  Zap,
  Layout,
  Code2,
  Sparkles,
  ArrowRight,
  Package,
} from "lucide-react";

export default function LandingPage() {
  const features = [
    {
      icon: <Boxes className="h-8 w-8 text-primary" />,
      title: "Feature-Based Architecture",
      description:
        "Organized code structure that scales with your application. Each feature is self-contained with its components, hooks, and state.",
    },
    {
      icon: <Workflow className="h-8 w-8 text-primary" />,
      title: "Zero Configuration",
      description:
        "Pre-configured tooling and development patterns. Start building features instead of setting up infrastructure.",
    },
    {
      icon: <Laptop className="h-8 w-8 text-primary" />,
      title: "Modern Tech Stack",
      description:
        "Built on Next.js 14, TypeScript, and TailwindCSS. Enhanced with ShadcnUI components and Zustand state management.",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast Development",
      description:
        "Stop reinventing the wheel. Use our pre-built components and patterns.",
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Responsive by Default",
      description: "All components are mobile-first and fully responsive.",
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "TypeScript Ready",
      description:
        "Full type safety with TypeScript configured out of the box.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/50 opacity-75 blur" />
              <Rocket className="h-6 w-6 text-primary relative" />
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              nextailz
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <a href="https://github.com" target="_blank" rel="noopener">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-4 py-24 text-center relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />
        <Sparkles className="h-12 w-12 text-primary mx-auto mb-8" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Build Better Apps Faster
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          A production-ready framework combining Next.js 14, TailwindCSS, and
          Zustand
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Documentation
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border bg-card hover:bg-accent/50 transition-colors relative group"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-primary/50 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <CardContent className="pt-6 relative">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-primary/5 py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Why Choose nextailz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 p-4 rounded-full bg-primary/10 relative">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="container mx-auto px-4 py-24 text-center">
        <Package className="h-12 w-12 text-primary mx-auto mb-8" />
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Join the growing community of developers building with nextailz
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
        >
          Start Building
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>
    </div>
  );
}
