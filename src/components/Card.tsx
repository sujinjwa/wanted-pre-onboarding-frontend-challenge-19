import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteOne } from '../features/cardList/cardListslice';

type TCard = {
  name: string;
  id: number;
};

const Card = ({ name, id }: TCard) => {
  const dispatch = useDispatch();

  return (
    <StyledWrapper>
      <p>{name}</p>
      <button onClick={() => dispatch(deleteOne(id))}>Delete</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  border-radius: 10px;
  border: 3px solid lightgrey;
  background-color: #444;
  outline: none;
  color: lightgrey;
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  padding: 20px;
  margin: 10px 0 10px 0;

  p {
    font-size: 18px;
  }

  button {
    cursor: pointer;
    border-radius: 10px;
    border: 3px solid lightgrey;
    background-color: #444;
    color: lightgrey;
    padding: 8px 15px 8px 15px;
    font-size: 15px;
    font-weight: 600;
  }
`;

export default Card;
