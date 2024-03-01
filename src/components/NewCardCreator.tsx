import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { createNew } from '../features/cardList/cardListslice';

const NewCardCreator = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>('');

  const handleCreateNewCard = () => {
    if (text === '') return;

    dispatch(createNew({ name: text, id: Math.random() }));
    setText('');
  };

  return (
    <StyledWrapper>
      <input
        type='text'
        placeholder='입력해주세요'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleCreateNewCard()}
      />
      <button onClick={handleCreateNewCard}>Add</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;

  input,
  button {
    border-radius: 10px;
    border: 3px solid lightgrey;
    background-color: #444;
    outline: none;
    color: lightgrey;
    font-family: 'Noto Sans KR', sans-serif;
  }

  input {
    width: 500px;
    padding: 10px;
    font-size: 16px;
  }

  button {
    width: 80px;
    cursor: pointer;
    font-size: 15px;
  }
`;

export default NewCardCreator;
