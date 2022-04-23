import React, { PropsWithChildren } from "react";

import styles from "./SidebarLayout.module.scss";

type PropTypes = PropsWithChildren<{
  categories?: ICategory[];
  articles?: IArticle[];
}>;
export function SidebarLayout({
  categories = [],
  articles = [],
  children,
}: PropTypes) {
  const currentCategory = categories[0];

  return (
    <>
      <div className={styles.SidebarLayout__sidebar}>
        <h3>Kategorien</h3>
        {categories.length ? (
          <ul>
            {currentCategory.childrenCategories.map(({ name, urlPath }) => {
              return (
                <li>
                  <a href={`/${urlPath}`}>{name}</a>
                </li>
              );
            })}
          </ul>
        ) : (
          "Loading..."
        )}
      </div>

      <div className={styles.SidebarLayout__content}>
        {categories.length ? (
          <h1>
            {currentCategory.name}
            <small> ({currentCategory.articleCount})</small>
          </h1>
        ) : (
          "Loading..."
        )}
        {/* <div className={"articles"}>{articles}</div> */}
        {children}
      </div>
    </>
  );
}
