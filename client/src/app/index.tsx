import React from "react";
import { BrowserRouter } from "react-router-dom";

import { PageContainer } from "./components/PageContainer";
import { Pages } from "pages";

export function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <Pages />
      </PageContainer>
    </BrowserRouter>
  );
}
