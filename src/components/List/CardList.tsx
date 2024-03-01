import styled from 'styled-components';
import Card from '../Card';
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

const CardList = () => {
  const cardList = useSelector((state: RootState) => state.cardList.cardList);

  return (
    <StyledWrapper>
      {cardList.map((card) => (
        <Card name={card.name} key={card.id} id={card.id} />
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 30px 0;
`;

export default CardList;
