import React from "react";
import { BrowserRouter } from "react-router-dom";

import { PageContainer } from "app/components/PageContainer";
import { Pages } from "pages";
import { ErrorBoundary } from "app/components/ErrorBoundary";

export function App() {
  return (
    <PageContainer>
      <ErrorBoundary>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </ErrorBoundary>
    </PageContainer>
  );
}
