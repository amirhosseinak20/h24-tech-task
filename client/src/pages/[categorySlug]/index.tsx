import React, { useEffect } from "react";

import { ArticleList } from "components/ArticleList";
import { useQuery } from "hooks/useQuery";
import { ARTICLES_LIST_QUERY } from "graphql/queries";
import { ArticlesLayout } from "layouts/ArticlesLayout";

function CategoryPage() {
  const { data, isLoading } = useQuery({
    query: ARTICLES_LIST_QUERY,
  });

  const {
    name: categoryName,
    articleCount,
    categoryArticles,
    childrenCategories,
  } = data?.categories?.[0] || {};

  return (
    <ArticlesLayout
      categoryName={categoryName}
      articleCount={articleCount}
      isLoading={isLoading}
      categories={childrenCategories}
      articles={categoryArticles?.articles}
    />
  );
}

export default CategoryPage;
