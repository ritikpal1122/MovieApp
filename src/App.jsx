import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Moviedetailpage from './Pages/MovieDetailPage';
import PopularMovies from './Components/PopularMovies';
import TopRatedMovies from './Components/TopRatedMovies';
import UpcomingMovies from './Components/UpcomingMovies';
import SearchMovie from './Components/SearchMovie';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen scroll-smooth">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<PopularMovies />} />
            <Route path="/toprated" element={<TopRatedMovies />} />
            <Route path="/upcoming" element={<UpcomingMovies />} />
            <Route path="/movie/:id" element={<Moviedetailpage />} />
            <Route path="/search" element={<SearchMovie />} /> 
           
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
