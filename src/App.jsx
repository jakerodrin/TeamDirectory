import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import About from './pages/About'
import NotFound from './pages/NotFound'

/**
 * App root:
 * - Holds the shared state: favorites (array of user ids) and dark mode.
 * - Wraps everything in BrowserRouter and declares all routes.
 * - Toggling dark mode adds/removes the "dark" class, which switches every
 *   dark: variant in the app.
 */
function App() {
  const [favorites, setFavorites] = useState([])
  const [isDark, setIsDark] = useState(false)

  const toggleFavorite = (id) => {
    setFavorites((previousFavorites) =>
      previousFavorites.includes(id)
        ? previousFavorites.filter((favoriteId) => favoriteId !== id)
        : [...previousFavorites, id],
    )
  }

  return (
    <BrowserRouter>
      {/* The "dark" class activates Tailwind's dark: variants app-wide. */}
      <div className={isDark ? 'dark' : undefined}>
        <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-900 dark:text-slate-100">
          <Navbar
            favoritesCount={favorites.length}
            isDark={isDark}
            onToggleDark={() => setIsDark((dark) => !dark)}
          />

          <main className="mx-auto max-w-4xl px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/users"
                element={
                  <Users favorites={favorites} onToggleFavorite={toggleFavorite} />
                }
              />
              <Route
                path="/users/:id"
                element={
                  <UserDetails
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
