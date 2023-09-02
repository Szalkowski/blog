import { Category } from '@/utils/types';

export const getCategories = (
  categoryList: Category[],
  postCategories: number[]
) => {
  return categoryList
    .map((cat) => {
      if (postCategories.includes(cat.id)) {
        return cat.name;
      }
    })
    .filter((name) => name)
    .join(', ');
};
