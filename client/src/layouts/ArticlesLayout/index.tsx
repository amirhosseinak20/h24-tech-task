import React, { PropsWithChildren } from "react";

import { isEmpty } from "utils";

import styles from "./ArticlesLayout.module.scss";
import { ArticleList } from "components/ArticleList";
import { CategoriesList } from "components/CategoriesList";

type PropTypes = PropsWithChildren<{
  categories?: IChildCategory[];
  articles?: IArticle[];
  isLoading?: boolean;
  categoryName?: string;
  articleCount?: number;
}>;
export function ArticlesLayout({
  isLoading,
  categoryName,
  articleCount,
  categories = [],
  articles = [],
}: PropTypes) {
  return (
    <>
      <div className={styles.ArticlesLayout__sidebar}>
        <h3>Kategorien</h3>
        {!isLoading || !isEmpty(categories) ? (
          <CategoriesList categories={categories} />
        ) : (
          "Loading..."
        )}
      </div>

      <div className={styles.ArticlesLayout__content}>
        {!isLoading ? (
          <>
            <h1>
              {categoryName}
              <small> ({articleCount})</small>
            </h1>
          </>
        ) : (
          "Loading..."
        )}
        <ArticleList articles={articles} />
      </div>
    </>
  );
}
