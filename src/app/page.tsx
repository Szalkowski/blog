import { FilterList } from '@/components/filterList';
import { SearchComponent } from '@/components/search';
import { Cards } from '@/components/cards';
import { DataProvider } from '@/components/context/dataProvider';

export default async function Page() {
  const limit = 3;
  return (
    <DataProvider>
      <div className={'container'}>
        <header className={'mx-auto'}>
          <div className={'text-center mb-10'}>
            <h1 className={'text-3xl font-black mb-3'}>From the blog</h1>
            <p className={'block mx-auto text-gray subheader'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium alias aperiam aut consectetur corporis delectus.
            </p>
          </div>
        </header>
        <main className={'flex'}>
          <aside className={'w-2/12 px-2 space-y-2'}>
            <FilterList />
            <SearchComponent />
          </aside>
          <section className={'w-10/12 px-2'}>
            <Cards limit={limit} />
          </section>
        </main>
      </div>
    </DataProvider>
  );
}
