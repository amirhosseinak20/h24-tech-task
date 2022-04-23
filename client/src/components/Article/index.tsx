import React from "react";

import { priceFormatter } from "utils";

import styles from "./Article.module.scss";

export function Article({ article }: { article: IArticle }) {
  return (
    <div className={styles.Article}>
      <img src={article.images[0].path} alt={article.name} />
      <div>{article.name}</div>
      <div>{priceFormatter(article.prices.regular.value / 100)}</div>
      <button>Add to cart</button>
    </div>
  );
}
