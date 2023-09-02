'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useData } from '@/components/context/dataProvider';
import { Category } from '@/utils/types';

export const FilterList = () => {
  const { categoryList } = useData();
  const [searchCategories, setSearchCategories] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  useEffect(() => {
    if (!searchCategories.length) {
      current.delete('categories');
    } else {
      const search = searchCategories.join(',');
      current.set('categories', search);
    }
    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`/${query}`);
  }, [searchCategories]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.id;
    if (searchCategories.includes(value)) {
      const filteredValues = searchCategories.filter((item) => item !== value);
      setSearchCategories(filteredValues);
    } else {
      setSearchCategories([...searchCategories, value]);
    }
  };

  return (
    <div>
      <p className={'text-lg font-bold'}>Category Filter</p>
      <ul>
        {categoryList.map((item: Category) => (
          <li key={item.id} className={'space-x-1'}>
            <input
              type={'checkbox'}
              id={`${item.id}`}
              onChange={changeHandler}
            />
            <label htmlFor={`${item.id}`}>{item.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};
