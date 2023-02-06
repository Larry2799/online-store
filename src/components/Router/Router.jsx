import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Profile from "../../pages/UserProfilePage";
import Bookmarks from "../../pages/BookmarksPage";
import Homepage from "../../pages/HomePage/Homepage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import SearchFilter from "../../pages/SearchFilterPage/SearchFilter";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<SearchFilter />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
