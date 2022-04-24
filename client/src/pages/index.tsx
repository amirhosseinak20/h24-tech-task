import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CategoryPage from "pages/[categorySlug]";

export function Pages() {
  return (
    <Routes>
      <Route path="*" element={<CategoryPage />} />
    </Routes>
  );
}
