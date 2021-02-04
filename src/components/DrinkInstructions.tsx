import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useSWR from 'swr';
import { Drink } from './Drink';
import { TResponse } from './Drinks';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const DrinkInstructions = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const { data, error } = useSWR<TResponse>(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const drink = data.drinks[0];

  return (
    <DrinkContainer>
      <Drink drink={drink} />
    </DrinkContainer>
  );
};

const DrinkContainer = styled.div`
  width: 250px;
`;
