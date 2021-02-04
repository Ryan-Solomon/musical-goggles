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
      <ShowInstructions>
        <h3>Show Instructions</h3>
      </ShowInstructions>
    </DrinkContainer>
  );
};

const DrinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 10px #8f8f8f;
  height: 300px;
  overflow: hidden;
  position: relative;
`;

const ShowInstructions = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  width: 100%;
  bottom: 0;
  padding: 1rem;
  font-size: 1.5rem;
  text-align: center;
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
