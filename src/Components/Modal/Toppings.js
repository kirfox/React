import React from 'react';
import { Wrap } from './ModalStyle';
import { Label } from './ModalStyle';
import { CheckboxRadio } from './ModalStyle';

export function Toppings({ toppings, checkToppings }) {
  return (
    <>
      <h3>Добавки</h3>
      <Wrap>
        {toppings.map((item, i) => (
          <Label key={i}>
            <CheckboxRadio 
              type="checkbox"
              checked={item.checked}
              onChange={() => checkToppings(i)}
              />
            {item.name}
          </Label>
        ))}
        
      </Wrap>
    </>
  )
}