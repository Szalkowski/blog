'use client';
import {
  Context,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getJsonData } from '@/api/getData';

const DataContext: Context<Awaited<ReturnType<typeof getJsonData>>> =
  createContext({ posts: [], categoryList: [] });
export const useData = () => useContext(DataContext);
interface Props {
  children: ReactNode;
}
export const DataProvider = ({ children }: Props) => {
  const [data, setData] = useState<Awaited<ReturnType<typeof getJsonData>>>({
    posts: [],
    categoryList: [],
  });

  useEffect(() => {
    getJsonData().then((data) => setData(data));
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
