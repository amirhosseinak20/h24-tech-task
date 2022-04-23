import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CategoryPage from "pages/[categorySlug]";
import { SidebarLayout } from "layouts/SidebarLayout";

export function Pages() {
  return (
    <Routes>
      <Route path="/" element={<SidebarLayout />}>
        <Route path=":categorySlug" element={<CategoryPage />} />
      </Route>
    </Routes>
  );
}
