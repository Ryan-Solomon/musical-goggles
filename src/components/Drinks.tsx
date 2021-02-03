import React from 'react';
import useSWR from 'swr';
import { Drink } from './Drink';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type TResponse = {
  drinks: TDrink[];
};

export type TDrink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
};

export const Drinks = () => {
  const { data, error } = useSWR<TResponse>(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data.drinks);
  return (
    <>
      <h1>Drinks</h1>
      {data.drinks.map((drink) => {
        return <Drink key={drink.idDrink} drink={drink} />;
      })}
    </>
  );
};
