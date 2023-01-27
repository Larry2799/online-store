import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Homepage } from "../../pages/HomePage/Homepage";
import { Profile } from "../../pages/UserProfile/UserProfile";
import { SearchFilter } from "../../pages/SearchFilter/SearchFilter";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="filters" element={<SearchFilter />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
