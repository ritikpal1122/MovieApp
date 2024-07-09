import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Popular from './Pages/Popular';
import TopRated from './Pages/TopRated';
import Categories from './Pages/Categories';
import Moviedetailpage from './Pages/MovieDetailPage';
import Upcoming from './Pages/Upcoming';
import SearchResults from './Components/SearchResults';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/toprated" element={<TopRated />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/movie/:id" element={<Moviedetailpage />} />
            {/* Add route for search results */}
            <Route path="/search/:query" element={<SearchResults />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
