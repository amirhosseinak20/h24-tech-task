interface ICategory {
  name: string;
  categoryArticles: ICategoryArticle;
  articleCount: number;
  childrenCategories: IChildCategory[];
}

interface IArticle {
  name: string;
  variantName: string;
  prices: IPrice;
  images: Image[];
}

interface IChildCategory {
  name: string;
  urlPath: string;
}

interface IPrice {
  currency: string;
  regular: {
    value: number;
  };
}

type Image = {
  path: string;
};

interface ICategoryArticle {
  articles: IArticle[];
}
