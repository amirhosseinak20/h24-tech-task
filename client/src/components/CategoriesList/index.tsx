import React from "react";

import { Link } from "components/Link";

type PropTypes = { categories: IChildCategory[] };
export function CategoriesList({ categories }: PropTypes) {
  return (
    <ul>
      {categories?.map?.((item, index) => (
        <Category key={index} {...item} />
      ))}
    </ul>
  );
}

function Category({ urlPath, name }: IChildCategory) {
  return (
    <li>
      <Link href={`/${urlPath}`}>{name}</Link>
    </li>
  );
}
