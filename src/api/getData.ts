import { Post } from '@/utils/types';

export const getJsonData = async () => {
  const response = await fetch('/json/blog.json');
  const objectData = await response.json();
  return { posts: objectData.posts, categoryList: objectData.categories };
};

export const getPageBySlug = async (slug: string) => {
  const { posts, categoryList } = await getJsonData();
  const page = posts.filter((post: Post) => post.slug === slug);
  return { post: page, categoryList: categoryList };
};
