import React from "react";
import { Image } from "components/Image";

import { priceFormatter } from "utils";

import styles from "./Article.module.scss";

type PropTypes = IArticle;
export function Article({ name, images, prices }: PropTypes) {
  return (
    <div className={styles.Article}>
      <Image width={200} height={200} src={images?.[0]?.path} alt={name} />
      <div>{name}</div>
      <div>{priceFormatter(prices?.regular?.value / 100)}</div>
      <button>Add to cart</button>
    </div>
  );
}
