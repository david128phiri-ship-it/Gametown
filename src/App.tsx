/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import GameDetails from './pages/GameDetails';
import Categories from './pages/Categories';
import Favorites from './pages/Favorites';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/game/:id" element={<GameDetails />} />
          </Routes>
        </main>
        
        <footer className="mt-20 border-t border-white/5 bg-zinc-950 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-indigo-600 p-1">
                  <div className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tighter text-white uppercase">GAMETOWN</span>
              </div>
              <p className="text-sm text-zinc-500">
                © 2026 Gametown. All rights reserved. Built for gamers, by gamers.
              </p>
              <div className="flex gap-6 text-sm font-medium text-zinc-500">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

