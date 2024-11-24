import React from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { PhotoGallery } from './components/PhotoGallery';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <About />
      <PhotoGallery />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;