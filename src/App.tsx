/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import Social from './components/Social';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <About />
        <Events />
        <Sponsors />
        <Social />
      </main>
      <Footer />
    </div>
  );
}

