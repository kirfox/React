import React from 'react';
import { Wrap } from './ModalStyle';
import { Label } from './ModalStyle';
import { CheckboxRadio } from './ModalStyle';

export function Choices({ openItem, choice, changeChoices }) {
  return (
    <>
      <h3>Выбирайте:</h3>
      <Wrap>
        {openItem.choices.map((item, i) => (
          <Label key={i}>
            <CheckboxRadio 
              type="radio"
              name="choices"
              checked={choice === item}
              value={item}
              onChange={changeChoices}
              />
            {item}
          </Label>
        ))}
        
      </Wrap>
    </>
  )
}