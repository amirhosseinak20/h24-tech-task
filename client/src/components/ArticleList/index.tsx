import React from "react";

import { Article } from "components/Article";

import styles from "./ArticleList.module.scss";

type PropTypes = {
  articles: IArticle[];
};
export function ArticleList({ articles }: PropTypes) {
  return (
    <div className={styles.ArticlesList}>
      {articles?.map((item, index) => (
        <Article key={index} {...item} />
      ))}
    </div>
  );
}
