# Team Directory

A React (Vite) + Tailwind CSS app for browsing a team directory with search, favorites, dark mode and user detail pages — all using 100% local data, no API.

## Features

- **Routing** with React Router: `/` (Home), `/users` (Users), `/users/:id` (User Details), `/about` (About) and a `*` catch-all 404 page — no page reloads.
- **Reusable components** that get all their data through props: `Navbar`, `UserCard`, `Button`, `Loader`, `ErrorMessage` (in `src/components/`).
- **Search**: a controlled input on the Users page filters users by name as you type (`useState`).
- **Favorites**: every user card has a favorite button; the count shows in the Navbar as `Favorites: n`.
- **Dark / Light mode**: a toggle button in the Navbar switches the app's colors.
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
├── index.css     # Tailwind CSS entry + class-based dark mode
└── main.jsx
```

## Git setup (GitHub repo with 4 commits)

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

# Connect to GitHub and push (create the empty repo on github.com first)
git branch -M main
git remote add origin https://github.com/<your-username>/team-directory.git
git push -u origin main
```

## How it works — a short explanation

### Component example: `Button`

`src/components/Button.jsx` is a small reusable component that accepts props — `label`, `onClick` and `variant` — and also renders whatever is passed as `children`. The `variant` prop is `"primary"` (blue) by default or `"danger"` (red), and a ternary picks the Tailwind classes accordingly. Because everything comes from props, the same component is reused in three places with different props: the Home page buttons (`label` + `onClick`), the favorite toggle in `UserCard` (which switches from `primary` to `danger` once a user is favorited), and the dark-mode toggle in the `Navbar` (which only uses `children` to show the 🌙/☀️ icon and text).

### Hook example: the `useEffect` that loads users (`src/pages/Users.jsx`)

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    setUsers(allUsers)
    setIsLoading(false)
  }, 1000)

  return () => clearTimeout(timer)
}, [])
```

The dependency array is empty (`[]`), so this effect runs **once**, right after the Users page mounts — like a data fetch. Inside, a `setTimeout` waits 1 second and then puts the local users array into state and flips `isLoading` to `false`, which is what swaps the `Loader` for the list of `UserCard`s. The returned cleanup function clears the timer, so if the user leaves the page before the second is up, the timer is cancelled and there is no "state update on an unmounted component". This mirrors the exact pattern you'd use for a real `fetch()` call, just with local data.
