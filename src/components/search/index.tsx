'use client';
import { Button } from '@/components/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  const handleSearch = () => {
    if (!searchValue) {
      current.delete('title');
    } else {
      current.set('title', searchValue);
    }
    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`/${query}`);
  };

  return (
    <>
      <div>
        <p className={'text-lg font-bold'}>Search title</p>
        <input
          className={'block border rounded-md px-2 input'}
          type='text'
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button
          className={'my-2 mx-auto'}
          text={'Search'}
          onClick={handleSearch}
        />
      </div>
    </>
  );
};
