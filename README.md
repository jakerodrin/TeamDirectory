# Team Directory

A React (Vite) + Tailwind CSS app for browsing a team directory with search, favorites, dark mode and user detail pages — all using 100% local data, no API.

## Features

- **Routing** with React Router: `/` (Home), `/users` (Users), `/users/:id` (User Details), `/about` (About) and a `*` catch-all 404 page — no page reloads.
- **Reusable components** that get all their data through props: `Navbar`, `UserCard`, `Button`, `Loader`, `ErrorMessage` (in `src/components/`).
- **Search**: a controlled input on the Users page filters users by name as you type (`useState`).
- **Favorites**: every user card has a favorite button; the count shows in the Navbar as `Favorites: n`.
- **Dark / Light mode**: an icon toggle in the Navbar switches the whole theme.
- **Soft, eye-friendly theme**: every color is a semantic CSS variable (`bg`, `surface`, `fg`, `muted`, `border`, `accent`, `danger`) defined once in `src/index.css` — slate text instead of pure black, gentle cool backgrounds and a calm indigo accent, in both light and dark mode. No component hardcodes a color.
- **Simulated loading**: the Users page shows a `Loader` for 1 second before the users appear.
- **Document titles**: `Users (n)` on the Users page (n = number of displayed users) and the user's name on the Details page.

## Getting started

```bash
npm install
npm run dev     # start the dev server
npm run build   # production build
```

## Project structure

```
src/
├── components/   # Navbar, UserCard, Button, Loader, ErrorMessage
├── data/
│   └── users.js  # local array of 10 users (id, name, email, company, role)
├── pages/        # Home, Users, UserDetails, About, NotFound
├── App.jsx       # routes + shared state (favorites, dark mode)
├── index.css     # Tailwind entry + theme tokens + class-based dark mode
└── main.jsx
```

## Git setup (GitHub repo)

```bash
git init
git add .
git commit -m "Set up Vite + React + Tailwind CSS and add local user data"
git add .
git commit -m "Add reusable UI components (Navbar, UserCard, Button, Loader, ErrorMessage)"
git add .
git commit -m "Add pages and React Router routes (Home, Users, UserDetails, About, NotFound)"
git add .
git commit -m "Add README with project docs and code explanations"
git add .
git commit -m "Soften the theme: eye-friendly slate/indigo palette via CSS variables"

# Connect to GitHub and push
git branch -M main
git remote add origin https://github.com/jakerodrin/TeamDirectory.git
git push -u origin main
```

## How it works — a short explanation

### Component example: `Button`

`src/components/Button.jsx` is a small reusable component that accepts props — `label`, `onClick`, `variant` and `title` — and also renders whatever is passed as `children`. The `variant` prop is `"primary"` by default or `"danger"`, and a ternary picks the semantic theme classes accordingly. Because everything comes from props, the same component is reused in three places with different props: the Home page button (`label` + `onClick`), the icon-only favorite toggle in `UserCard` (which switches from `primary` to `danger` once a user is favorited), and the dark-mode toggle in the `Navbar` (which renders only its `children` — a sun/moon SVG icon — using `title` for accessibility).

### Hook example: the `useEffect` that loads users (`src/pages/Users.jsx`)

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    setUsers(allUsers)
    setIsLoading(false)
  }, SIMULATED_LOAD_MS)

  return () => clearTimeout(timer)
}, [])
```

The dependency array is empty (`[]`), so this effect runs **once**, right after the Users page mounts — like a data fetch. Inside, a `setTimeout` waits 1 second and then puts the local users array into state and flips `isLoading` to `false`, which is what swaps the `Loader` for the list of `UserCard`s. The returned cleanup function clears the timer, so if the user leaves the page before the second is up, the timer is cancelled and there is no "state update on an unmounted component". This mirrors the exact pattern you'd use for a real `fetch()` call, just with local data.
