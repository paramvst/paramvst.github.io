import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MongoDB from './pages/blogs/MongoDB';
import Achivements from './pages/portfolio/Achivements';
import Works from './pages/portfolio/Works';
import Blogs from './pages/_main/Blogs';
import Portfolio from './pages/_main/Portfolio';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/blog/mongoDB" element={<MongoDB />} />
      <Route path="/achivements" element={<Achivements />} />
      <Route path="/works" element={<Works />} />
      <Route path="*" element={<h1>Buddy..  No such Page exists. Sorry for that</h1>} />
    </Routes>
    </>
  );
}

export default App;
