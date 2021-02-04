import React, { FC } from 'react';
import styled from 'styled-components';
import { TDrink } from './Drinks';

type TProps = {
  drink: TDrink;
};

export const Drink: FC<TProps> = ({ drink }) => {
  const { strDrink, strDrinkThumb } = drink;
  return (
    <DrinkContainer>
      <DrinkTitle>{strDrink}</DrinkTitle>
      <DrinkImage src={strDrinkThumb} alt='drink' />
    </DrinkContainer>
  );
};

const DrinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 10px #8f8f8f;
  height: 300px;
  overflow: hidden;
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
