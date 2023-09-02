export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  categories: Array<number>;
}
