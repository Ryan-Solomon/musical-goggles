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
  const { strDrink, strDrinkThumb, strInstructions } = drink;
  return (
    <DrinkContainer>
      <DrinkTitle>{strDrink}</DrinkTitle>
      <DrinkImage src={strDrinkThumb} alt='drink' />
      <Instructions>{strInstructions}</Instructions>
    </DrinkContainer>
  );
};

const DrinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 10px #8f8f8f;
  overflow: hidden;
  position: relative;
  width: 350px;
  margin: auto;
  margin-top: 5rem;
`;

const DrinkTitle = styled.h2`
  text-align: center;
  color: white;
  font-size: 2rem;
  padding: 1.5rem;
  letter-spacing: 0.2rem;
`;

const DrinkImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Instructions = styled.p`
  color: white;
  font-size: 2rem;
  padding: 1rem;
  text-align: center;
`;
