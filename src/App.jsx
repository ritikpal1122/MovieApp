import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Moviedetailpage from './Pages/MovieDetailPage';
import PopularMovies from './Pages/PopularMovies';
import SearchResultsPage from './Pages/SearchResultsPage'; // Import SearchResultsPage
import TopRatedMovies from './Pages/TopRatedMovies';
import UpcomingMovies from './Pages/UpcomingMovies';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<PopularMovies />} />
            <Route path="/toprated" element={<TopRatedMovies />} />
            <Route path="/upcoming" element={<UpcomingMovies />} />
            <Route path="/movie/:id" element={<Moviedetailpage />} />
            <Route path="/search" element={<SearchResultsPage />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
