import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './Components/HomePage';
import BookingPage from './Components/BookingPage';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}> </Route>
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
