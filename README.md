# React-JS-App Template v1.0.0
GDSC NIT Silchar's Template for a JS + React + Tailwind CSS app.

## Features, Tools and Technologies
- JavaScript
- React 18
- React Router 6
- Tailwind CSS
- Vite
- pnpm
- Prettier
- Very Strict ESLint
- Auto Lint and Pretty on commit using simple-git-hooks (compatible with Windows unlike husky)

## Tailwind CSS Setup
This project uses Tailwind CSS v4 with CSS-based configuration. Custom GDSC color palette available:
- `bg-gdsc-blue-{1,2,3}` / `text-gdsc-blue-{1,2,3}` - GDSC blue variants
- `bg-gdsc-green` / `text-gdsc-green` - GDSC green
- `bg-gdsc-red-{1,2}` / `text-gdsc-red-{1,2}` - GDSC red variants
- `bg-gdsc-yellow` / `text-gdsc-yellow` - GDSC yellow
- `font-poppins` - Poppins font family

Custom theme variables are defined in `src/index.css` using the `@theme` directive.
All SASS modules have been removed and replaced with Tailwind utility classes
