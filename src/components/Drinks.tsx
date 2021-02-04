import React from 'react';
import styled from 'styled-components';
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
      <Title>Drinks</Title>
      <DrinkContainer>
        {data.drinks.map((drink) => {
          return <Drink key={drink.idDrink} drink={drink} />;
        })}
      </DrinkContainer>
    </>
  );
};

const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 2.5rem;
  padding: 1rem;
`;

const DrinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;
