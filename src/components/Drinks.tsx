import React from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Drinks = () => {
  const { data, error } = useSWR(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);
  return (
    <>
      <h1>Drinks</h1>
    </>
  );
};
