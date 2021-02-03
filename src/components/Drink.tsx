import React, { FC } from 'react';
import { TDrink } from './Drinks';

type TProps = {
  drink: TDrink;
};

export const Drink: FC<TProps> = ({ drink }) => {
  const { strDrink, strDrinkThumb } = drink;
  return (
    <>
      <h1>{strDrink}</h1>
    </>
  );
};
