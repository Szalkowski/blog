import { PostPage } from '@/components/postPage';
import { PageProvider } from '@/components/context/pageData';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <PageProvider slug={slug}>
      <article className={'container'}>
        <PostPage />
      </article>
    </PageProvider>
  );
}
