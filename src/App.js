import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';
import OpenInBrowserBanner from './components/OpenInBrowserBanner';

function App() {
  return (
    <div className="App has-fixed-header">
      <Header />
      <main className="site-gradient">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <OpenInBrowserBanner />
    </div>
  );
}

export default App;
