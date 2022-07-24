import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles } from 'react-loader-spinner';

import Navigation from './Navigation/Navigation';
import Container from './Container/Container';



// import styled from 'styled-components';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));
const NotFound = lazy(() => import ('../pages/NotFound'));

// const StyledLink = styled(NavLink)`
// padding: 10px;
// color: black;

// &.active {
//   color: orange;
// }
// `;

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<div className='Circles'>
        <Circles
        color="#3f51b5"
        height={80}
        width={80} ariaLabel="loading-indicator"
      />
      </div>}>
        <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/movies" element={< Movies />} />
        <Route path="/movies/:movieId" element={< MovieDetails />} >
          <Route path="cast" element={< Cast />} />
          <Route path="reviews" element={< Reviews />} />
          </Route>
        <Route path="*" element={< NotFound />} />
        </Routes>
        </Suspense>
    </Container>
  );
};
