'use client';
import {
  Context,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getPageBySlug } from '@/api/getData';

const PageContext: Context<Awaited<ReturnType<typeof getPageBySlug>>> =
  createContext({
    post: [],
    categoryList: [],
  });
export const usePageData = () => useContext(PageContext);
interface Props {
  slug: string;
  children: ReactNode;
}
export const PageProvider = ({ children, slug }: Props) => {
  const [data, setData] = useState<Awaited<ReturnType<typeof getPageBySlug>>>({
    post: [],
    categoryList: [],
  });
  useEffect(() => {
    getPageBySlug(slug).then((pageData) => setData(pageData));
  }, []);
  return <PageContext.Provider value={data}>{children}</PageContext.Provider>;
};
