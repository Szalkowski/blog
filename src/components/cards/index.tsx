'use client';
import { Card } from '@/components/cards/card';
import './styles.css';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Pagination } from '@/components/pagination';
import { useData } from '@/components/context/dataProvider';
import { Post } from '@/utils/types';

interface Props {
  limit: number;
}
export const Cards = ({ limit }: Props) => {
  const { posts } = useData();
  const searchParams = useSearchParams();
  let cardsContent: Post[] = posts;
  let totalElements = posts.length;

  useEffect(() => {
    displayCards();
  }, [searchParams]);
  const displayCards = () => {
    const pageNo = +(searchParams.get('pageNo') ?? 1);
    const startElement = pageNo === 1 ? 0 : (pageNo - 1) * limit;
    const endElement = pageNo === 1 ? 3 : pageNo * limit;

    if (searchParams.has('title')) {
      const searchValue = searchParams.get('title');
      cardsContent = cardsContent.filter((item) =>
        item.title.toLowerCase().includes(searchValue?.toLowerCase() ?? '')
      );
    }
    if (searchParams.has('categories')) {
      const searchValue = searchParams.get('categories')?.split(',');
      cardsContent = cardsContent.filter((item) =>
        item.categories.some((i) => searchValue?.includes(`${i}`))
      );
    }
    totalElements = cardsContent.length;
    return cardsContent
      .map((card) => <Card key={card.id} {...card} />)
      .slice(startElement, endElement);
  };

  return (
    <>
      <div className={'flex flex-wrap space-x-5'}>{displayCards()}</div>
      {totalElements > limit && (
        <Pagination totalElements={totalElements} limit={limit} />
      )}
    </>
  );
};
