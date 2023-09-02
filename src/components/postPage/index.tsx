'use client';
import { usePageData } from '@/components/context/pageData';
import Image from 'next/image';
import './styles.css';
import { getCategories } from '@/utils/getCategories';

export const PostPage = () => {
  const { post, categoryList } = usePageData();

  return (
    post.length && (
      <>
        <h1 className={'text-center font-black text-4xl my-10'}>
          {post[0].title}
        </h1>
        <p className={'text-center font-bold text-lg mb-10'}>
          Categories:{' '}
          <span className={'text-blue'}>
            {getCategories(categoryList, post[0].categories)}
          </span>
        </p>
        <div className={'flex content'}>
          <div className={'w-1/2 px-4'}>
            <p className={'text-lg'}>{post[0].excerpt}</p>
          </div>
          <div className={'relative w-1/2'}>
            <Image
              className={'image'}
              src={post[0].imageUrl}
              alt={post[0].title}
              fill
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
        </div>
      </>
    )
  );
};
