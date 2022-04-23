import React from "react";

import { ArticleList } from "components/ArticleList";
import { useQuery } from "hooks/useQuery";
import { ARTICLES_LIST_QUERY } from "api/queries/articlesList";

function CategoryPage() {
  useQuery({
    query: ARTICLES_LIST_QUERY,
    onSuccess: (res) => console.log(res),
    onError: (e) => console.log(e),
  });

  return null;
  // var articles = this.state.categories.map((category) => {
  //   return category.categoryArticles.articles.map((article) => {
  //     return <ArticleCard article={article} />;
  //   });
  // });

  // return <ArticleList />;
}

export default CategoryPage;
