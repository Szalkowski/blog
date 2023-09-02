import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/utils/types';
import { useData } from '@/components/context/dataProvider';
import { getCategories } from '@/utils/getCategories';

export const Card = ({ title, slug, excerpt, imageUrl, categories }: Post) => {
  const { categoryList } = useData();
  return (
    <Link
      href={slug}
      className={'flex-initial item rounded-md shadow-lg shadow-gray'}
    >
      <div className={'relative h-40'}>
        <Image
          className={'rounded-t-md'}
          src={imageUrl}
          alt={title}
          fill
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <div className={'px-4'}>
        <p className={'text-sm text-blue mt-4'}>
          {getCategories(categoryList, categories)}
        </p>
        <h2 className={'text-lg font-bold my-4'}>{title}</h2>
        <p className={'text-sm text-gray pb-5'}>{excerpt}</p>
      </div>
    </Link>
  );
};
