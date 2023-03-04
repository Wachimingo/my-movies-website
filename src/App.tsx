import React, { useEffect } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { Home, Login, Details, Favorites, Search, NotFound } from "./pages";
import { Navbar } from "./pages/common";

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
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/search/:query' element={<Search />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
