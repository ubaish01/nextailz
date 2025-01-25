# nextailz

A modern, scalable template for Next.js applications with built-in best practices.

## Tech Stack

- **Next.js 14**: App router, server components, and optimized performance
- **TypeScript**: Type safety and better developer experience
- **TailwindCSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built, customizable components
- **Zustand**: Lightweight state management

## Why This Stack?

- **Next.js 14**: Latest features like server components and streaming. Better SEO and performance.
- **TypeScript**: Catch errors early, better IDE support, improved maintainability
- **TailwindCSS**: Rapid UI development, consistent styling, no CSS conflicts
- **shadcn/ui**: Accessible components, customizable source code, no external dependencies
- **Zustand**: Simple but powerful state management, minimal boilerplate

## Project Structure

```
src/
├── app/                     # Next.js app router pages
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── shared/             # Shared components
├── features/               # Feature-based modules
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── store.ts
│   └── [feature]/
├── lib/
│   ├── utils/             # Utility functions
│   └── config/            # App configuration
└── types/                 # Global TypeScript types
```

### Why This Structure?

- **Feature-Based Organization**: Each feature is self-contained with its components, hooks, and state
- **Clear Separation**: Components, business logic, and utilities are clearly separated
- **Scalability**: Easy to add new features without affecting existing ones
- **Maintainability**: Clear locations for different types of code
- **Reusability**: Shared components and utilities are easily accessible

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ubaish01/nextailz.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Start development server:

```bash
pnpm dev
```

## Adding New Features

1. Create a new directory in `features/`
2. Add feature-specific components, hooks, and state
3. Export through feature's index.ts
4. Import where needed

## Best Practices

- Keep components small and focused
- Use TypeScript strictly - no `any` types
- Follow feature-based organization
- Keep shared code to a minimum
- Document complex logic
- Write meaningful commit messages

## Why Use This Template?

### Save Time

- Skip configuration and setup
- Pre-built components ready to use
- Proven architecture patterns

### Scale Well

- Feature-based organization
- Clear separation of concerns
- TypeScript for type safety

### Stay Clean

- Consistent code structure
- Best practices built in
- No technical debt from poor setup

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open Pull Request

## License

MIT License - feel free to use in your projects.
