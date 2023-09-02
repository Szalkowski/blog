'use client';
import { Button } from '@/components/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Props {
  totalElements: number;
  limit: number;
}
export const Pagination = ({ totalElements, limit }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  const totalPages = Math.ceil(totalElements / limit);
  const [pageNo, setPageNo] = useState(+(searchParams.get('pageNo') ?? 1));

  useEffect(() => {
    handleSearch();
  }, [pageNo]);
  const handleSearch = () => {
    if (searchParams.has('pageNo') && pageNo === 1) {
      current.delete('pageNo');
    } else if (pageNo > 1) {
      current.set('pageNo', `${pageNo}`);
    }
    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`/${query}`);
  };
  const prevPage = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };
  const nextPage = () => {
    if (pageNo < totalPages) {
      setPageNo(pageNo + 1);
    }
  };

  return (
    <div className={'container flex justify-between my-10'}>
      <Button id={'prevButton'} text={'Prev'} onClick={prevPage} />
      <Button id={'nextButton'} text={'Next'} onClick={nextPage} />
    </div>
  );
};
