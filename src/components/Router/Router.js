import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Profile from "../../pages/UserProfile";
import Bookmarks from "../../pages/Bookmarks";
import Homepage from "../../pages/HomePage/Homepage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import SearchFilter from "../../pages/SearchFilter/SearchFilter";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="search" element={<SearchFilter />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
