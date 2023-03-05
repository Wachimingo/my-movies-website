import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import movieAnimation from "./assets/animations/movie-animation.json";
import { Navbar } from "./pages/common";

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Details = lazy(() => import("./pages/details/Details"));
const Favorites = lazy(() => import("./pages/favorites/Favorites"));
const Search = lazy(() => import("./pages/search/Search"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    }
  }, [navigate]);

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          path='/'
          element={
            <Suspense fallback={<Lottie animationData={movieAnimation} />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/home'
          element={
            <Suspense fallback={<Lottie animationData={movieAnimation} />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/details/:id'
          element={
            <Suspense fallback={<Lottie animationData={movieAnimation} />}>
              <Details />
            </Suspense>
          }
        />
        <Route
          path='/favorites'
          element={
            <Suspense fallback={<Lottie animationData={movieAnimation} />}>
              <Favorites />
            </Suspense>
          }
        />
        <Route
          path='/search/:query'
          element={
            <Suspense fallback={<Lottie animationData={movieAnimation} />}>
              <Search />
            </Suspense>
          }
        />
      </Route>
      <Route
        path='/login'
        element={
          <Suspense fallback={<Lottie animationData={movieAnimation} />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path='/*'
        element={
          <Suspense fallback={<Lottie animationData={movieAnimation} />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
