import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddPage from '../pages/AddPage';
import HomePage from '../pages/HomePage';
import Navigation from './Navigation';

function ContactApp() {
  return (
    <div className="contact-app">
      <header className="contact-app__header">
        <h1>Aplikasi Kontak</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="add" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default ContactApp;
